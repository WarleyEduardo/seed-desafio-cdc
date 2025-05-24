import Autor from '../models/AutorModel.js';
import AutorRepository from '../repositories/autorRepository.js';
import restricaoValidation from '../middlewares/restricaoValidation.js';


class AutorController {


	static async postAutor(req, res, next) {


		try {
			
			
		  let httpStatus = 200;

		  let { nome , email , descricao } = req.body;

		   const autor      = new Autor(nome,email, descricao);	 		
		   const repository = new AutorRepository();
           let response     = null;

		   const existe = await repository.consistirExiste('email',email);
		   
		 
		   if (existe)
		   {
               
             return await restricaoValidation(res,'Existe autor cadastrado com e-mail informado');

		   }	

			
		   response  = await repository.save(autor);

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao gravar autor : ' +  e);
			
		}




	}




	static async getAutores(req, res, next) {


		try {
			
			
		  let httpStatus = 200;
	
			
		  const repository = new AutorRepository();
		   response  = await repository.find();

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao consultar autor : ' +  e);
			
		}




	}

}


export default AutorController;