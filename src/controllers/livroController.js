import Response from '../helpers/response.js';
import Livro from '../models/livroModel.js';
import LivroRepository from '../repositories/livroRepository.js';


class LivroController {


	static async postLivro(req, res, next) {


		try {

			
		   let httpStatus = 200;

		   let { titulo,resumo, preco, paginas, isbn, datapublicacao, categoria, autor  } = req.body;

		   const livro  = new Livro(titulo,resumo,preco,isbn,paginas,categoria,autor);	
		   livro.dataPublicacao = datapublicacao;
		   
		   const repository = new LivroRepository();
           let response     = new Response();	
		   
		   
		   const tituloUnico = await repository.ConsistirUnico('titulo',titulo);		   
		 
		   if (!tituloUnico)
		   {
               
              response.success = false;
			  response.message = 'Existe livro cadastrado com titulo informado';

			  httpStatus = 400;
			  return res.status(httpStatus).send(response)

		   }	


		   const isbnUnico = await repository.ConsistirUnico('isbn',isbn);		
		    if (!isbnUnico)
		   {
               
              response.success = false;
			  response.message = 'Existe livro cadastrado com isbn informado';

			  httpStatus = 400;
			  return res.status(httpStatus).send(response)

		   }

			
		   response  = await repository.save(livro);

		   if (response.success == false) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			let httpStatus = 400;

			const response = new Response();
			
			response.success = false
			response.message = 'Erro ao gravar livro : ' +  e ;

			return res.status(httpStatus).send(response)
			
		}

	}

}


export default LivroController;