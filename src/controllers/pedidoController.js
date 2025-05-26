import Pedido from '../models/pedidoModel.js';
import PedidoRepository from '../repositories/pedidoRepository.js'
import restricaoValidation from '../middlewares/restricaoValidation.js';



class PedidoController {


	static async postPedido(req, res, next) {



		try {
			
		
		   let httpStatus = 200;

		   let { cliente , itens, total } = req.body;

		   const estado            = new Estado(nome,pais);	 		
		   const estadoRepository  = new EstadoRepository();
		   const paisRepository    = new PaisRepository();
           let response            =  null;	


			
		   response  = await pedidoRepository.save(estado);

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao gravar estado : ' +  e );
			
		}

	}

}


export default EstadoController;