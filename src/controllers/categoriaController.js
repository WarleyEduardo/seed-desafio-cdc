import Categoria from '../models/CategoriaModel.js';
import CategoriaRepository from '../repositories/categoriaRepository.js';
import restricaoValidation from '../middlewares/restricaoValidation.js';



class CategoriaController {


	static async postCategoria(req, res, next) {



		try {
			
		
		   let httpStatus = 200;

		   let { nome } = req.body;

		   const categoria  = new Categoria(nome);	 		
		   const repository = new CategoriaRepository();
           let response     = null;	
		   
		   
		   const existe = await repository.consistirExiste('nome',nome);		   
		 
		   if (existe)
		   {
              
			  return  await restricaoValidation(res,'Existe categoria cadastrada com nome informado');

		   }	

			
		   response  = await repository.save(categoria);

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao gravar categoria : ' +  e);
			
		}

	}

}


export default CategoriaController;