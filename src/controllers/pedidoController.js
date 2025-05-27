import Pedido from '../models/pedidoModel.js';
import PedidoRepository from '../repositories/pedidoRepository.js'
import restricaoValidation from '../middlewares/restricaoValidation.js';
import LivroRepository from '../repositories/livroRepository.js'
import ClienteRepository from '../repositories/clienteRepository.js'
import Cliente from '../models/clienteModel.js'


class PedidoController {


	static async postPedido(req, res, next) {


		try {
			
		
		   let httpStatus = 200;

		   let { cliente , itens, total } = req.body;

		   const livroRepository   =  new LivroRepository();
		   const clienteRepository =  new ClienteRepository();
		   const pedido            =  new Pedido(cliente,itens,total,livroRepository);	 		
		   const pedidoRepository  =  new PedidoRepository();		  
		   let response            =  null;	

		   response  = await pedido.consistir();
			
		   
		   if (response.success) {


              const _cliente = new Cliente(cliente.nome,cliente.email,cliente.documento,cliente.sobrenome,cliente.endereco,cliente.complemento,
				cliente.cidade,cliente.pais,cliente.estado,cliente.telefone, cliente.cep )

			  
              const existeCliente = await clienteRepository.consistirExiste('email',cliente.email)

			  if (!existeCliente)
			  {
                  clienteRepository.save(_cliente);
			  }			


			  response  = await pedidoRepository.save(pedido);

		   }	
		  

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao gravar estado : ' +  e );
			
		}

	}

}


export default PedidoController;