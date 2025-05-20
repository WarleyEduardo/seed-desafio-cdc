import Response from '../helpers/response.js';
import Autor from '../models/AutorModel.js';
import AutorRepository from '../repositories/autorRepository.js';


class AutorController {


	static async postAutor(req, res, next) {



		try {
			let httpStatus = 200;

			let { nome , email , descricao } = req.body;

		   const autor = new Autor(nome,email, descricao);	 		

		   const repository = new AutorRepository();
			
			const response  = await repository.salve(autor);

			if (response.success == false) httpStatus = 400; 

			return res.status(httpStatus).send(response)
			
		} catch (e) {



			let httpStatus = 400;

			const response = new Response();
			
			response.success = false
			response.message = 'Erro ao gravar autor ' +  e ;

			return res.status(httpStatus).send(response)
			
		}




	}

}


export default AutorController;