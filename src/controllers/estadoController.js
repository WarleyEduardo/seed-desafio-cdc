import Estado from '../models/estadoModel.js';
import PaisRepository from '../repositories/paisRepository.js';
import EstadoRepository from '../repositories/estadoRepository.js'
import restricaoValidation from '../middlewares/restricaoValidation.js';



class EstadoController {


	static async postEstado(req, res, next) {



		try {
			
		
		   let httpStatus = 200;

		   let { nome , pais } = req.body;

		   const estado            = new Estado(nome,pais);	 		
		   const estadoRepository  = new EstadoRepository();
		   const paisRepository    = new PaisRepository();
           let response            =  null;	



		    const existePais = await paisRepository.consistirExiste('id',pais);		   
		 
		   if (!existePais)
		   {
              
			  return  await restricaoValidation(res,'país informado não consta cadastrado');

		   }	
		   
		   
		   const existeEstado = await estadoRepository.consistirExiste('nome',nome);		   
		 
		   if (existeEstado)
		   {
              
			  return  await restricaoValidation(res,'Existe estado cadastrado com nome informado');

		   }	

			
		   response  = await estadoRepository.save(estado);

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao gravar estado : ' +  e );
			
		}

	}

}


export default EstadoController;