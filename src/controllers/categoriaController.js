import Response from '../helpers/response.js';
import Categoria from '../models/CategoriaModel.js';
import CategoriaRepository from '../repositories/categoriaRepository.js';


class CategoriaController {


	static async postCategoria(req, res, next) {



		try {
			
		
		   let httpStatus = 200;

		   let { nome } = req.body;

		   const categoria  = new Categoria(nome);	 		
		   const repository = new CategoriaRepository();
           let response     = new Response();	
		   
		   
		   const unico = await repository.ConsistirUnico('nome',nome);		   
		 
		   if (!unico)
		   {
               
              response.success = false;
			  response.message = 'Existe categoria cadastrada com nome informado';

			  httpStatus = 400;
			   return res.status(httpStatus).send(response)

		   }	

			
		   response  = await repository.save(categoria);

		   if (response.success == false) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			let httpStatus = 400;

			const response = new Response();
			
			response.success = false
			response.message = 'Erro ao gravar categoria : ' +  e ;

			return res.status(httpStatus).send(response)
			
		}

	}

}


export default CategoriaController;