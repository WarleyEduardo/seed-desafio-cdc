import Pedido from '../models/pedidoModel.js';
import PedidoRepository from '../repositories/pedidoRepository.js'
import restricaoValidation from '../middlewares/restricaoValidation.js';
import LivroRepository from '../repositories/livroRepository.js'
import ClienteRepository from '../repositories/clienteRepository.js'
import Cliente from '../models/clienteModel.js'
import Pais from '../models/paisModel.js';
import Estado from '../models/estadoModel.js';
import PaisRepository from '../repositories/paisRepository.js'
import EstadoRepository from '../repositories/estadoRepository.js'



class PedidoController {


	static async postPedido(req, res, next) {


		try {
			
		
		   let httpStatus = 200;

		   let { cliente , itens, total } = req.body;

		   const livroRepository   =  new LivroRepository();
		   const clienteRepository =  new ClienteRepository();
		   const estadoRepository  =  new EstadoRepository();
		   const paisRepository    =  new PaisRepository(); 
		 
		   const pedido            =  new Pedido(cliente,itens,total,livroRepository);	 		
		   const pedidoRepository  =  new PedidoRepository();		  
		   let response            =  null;
		   let existePais          = false;
		   let existeEstado        = false;	
		   let idPais              = '';
		          
		   response = await paisRepository.find('nome',cliente.pais);

		   if (response.success) {


			    existePais = true;


                const {id} = response.data[0];

				idPais = id;

				response = await estadoRepository.find('pais',id);
           
		       if (response.success && cliente.estado == '')
		       {   
				   response.success = false;
			       response.message = 'deve informar o estado para o país ' +  cliente.pais;
   		           response.data = [] 
				   return res.status(400).send(response)

		       }	


		   }

		  response  = await pedido.consistir();
			
		   
		   if (response.success) {


             
			  response  = await pedidoRepository.save(pedido);

              if (response.success)
			  {	
                 const _cliente = new Cliente(cliente.nome,cliente.email,cliente.documento,cliente.sobrenome,cliente.endereco,cliente.complemento,
				  cliente.cidade,cliente.pais,cliente.estado,cliente.telefone, cliente.cep )

			  
                  const existeCliente = await clienteRepository.consistirExiste('email',cliente.email)

			     if (!existeCliente)
			     {
                     clienteRepository.save(_cliente);
			     }	


				 if (!existePais) 
				 {

                      const pais = new Pais(cliente.pais);

					  await paisRepository.save(pais);

					  response = await paisRepository.find('nome',cliente.pais);

					  if (response.success) 
					  {

						const {id} = response.data[0];

				        idPais = id;
                          

					  }	

				 }	


				 existeEstado = await estadoRepository.consistirExiste('nome',cliente.estado);  

				 if (!existeEstado)
				 {

                      const estado = new Estado(cliente.estado,idPais);

					  estadoRepository.save(estado);
				 }	



			  
			  } 



		   }	
		  

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao gravar estado : ' +  e );
			
		}

	}

}


export default PedidoController;