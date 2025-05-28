
import restricaoValidation from '../middlewares/restricaoValidation.js';
import PedidoUseCase from '../useCase/pedidoUseCase.js';

class PedidoController {


	static async postPedido(req, res, next) {


		try {
			
		
		   let httpStatus = 200;

		   let { cliente , itens, total, cupomdesconto } = req.body;

            


           let response            =  null;

		   const pedidoCompra = {

              cliente,
			  listaItens : itens,
			  total,
			  cupomDesconto : cupomdesconto == undefined ? '' : cupomdesconto,
			  totalItens : 0,
			  desconto : 0

		   }


		    const pedidoUseCase =   new  PedidoUseCase();
          		 
		    response  = await pedidoUseCase.comprar(pedidoCompra);
		  

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao gravar pedido : ' +  e );
			
		}

	}

}


export default PedidoController;