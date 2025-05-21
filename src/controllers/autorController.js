import Response from '../helpers/response.js';
import Autor from '../models/AutorModel.js';
import AutorRepository from '../repositories/autorRepository.js';


class AutorController {


	static async postAutor(req, res, next) {



		try {
			
			
			let httpStatus = 200;

		  let { nome , email , descricao } = req.body;

		   const autor      = new Autor(nome,email, descricao);	 		
		   const repository = new AutorRepository();
           let response     = new Response();

		   const unico = await repository.ConsistirUnico('email',email);
		   
		 
		   if (unico == false)
		   {
               
              response.success = false;
			  response.message = 'Existe autor cadastrado com e-mail informado';

			  httpStatus = 400;
		      return res.status(httpStatus).send(response)

		   }	

			
		   response  = await repository.save(autor);

		   if (response.success == false) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			let httpStatus = 400;

			const response = new Response();
			
			response.success = false
			response.message = 'Erro ao gravar autor : ' +  e ;

			return res.status(httpStatus).send(response)
			
		}




	}

}


export default AutorController;