import Pais from '../models/paisModel.js';
import PaisRepository from '../repositories/paisRepository.js';
import restricaoValidation from '../middlewares/restricaoValidation.js';



class PaisController {


	static async postPais(req, res, next) {



		try {
			
		
		   let httpStatus = 200;

		   let { nome } = req.body;

		   const pais  = new Pais(nome);	 		
		   const repository = new PaisRepository();
           let response     = null;	
		   
		   
		   const existe = await repository.consistirExiste('nome',nome);		   
		 
		   if (existe)
		   {
              
			  return  await restricaoValidation(res,'Existe país  cadastrado com nome informado');

		   }	

			
		   response  = await repository.save(pais);

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao gravar país : ' +  e );
			
		}

	}

}


export default PaisController;