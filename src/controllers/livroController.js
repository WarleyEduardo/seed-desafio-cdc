import Livro from '../models/livroModel.js';
import LivroRepository from '../repositories/livroRepository.js';
import AutorRepository from '../repositories/autorRepository.js';
import CategoriaRepository from '../repositories/categoriaRepository.js'
import restricaoValidation from '../middlewares/restricaoValidation.js';

class LivroController {


	static async postLivro(req, res, next) {


		try {

			
		   let httpStatus = 200;

		   let { titulo,resumo, sumario, preco, paginas, isbn, datapublicacao, categoria, autor  } = req.body;

		   const livro           = new Livro(titulo,resumo,preco,isbn,paginas,categoria,autor);	
		   livro.dataPublicacao  = datapublicacao == undefined ? null : datapublicacao ;
		   livro.sumario         = sumario == undefined ? '' : sumario ;
		   
		   const livrorepository  = new LivroRepository();
           let response           = null;       

		   
		   
		   const existeTitulo = await livrorepository.consistirExiste('titulo',titulo);		   
		 
		   if (existeTitulo)
		   {
              
			 return  await restricaoValidation(res,'Existe livro cadastrado com titulo informado');

		   }	


		   const existeIsbn = await livrorepository.consistirExiste('isbn',isbn);		
		   
		   if (existeIsbn)
		   {
               
             return  await restricaoValidation(res,'Existe livro cadastrado com isbn informado');

		   }

            const categoriaRepository = new CategoriaRepository();
		    
		    const existeCategoria = await categoriaRepository.consistirExiste('id',categoria);		   
		 
		   if (!existeCategoria)		  
		   {
              
			 return  await restricaoValidation(res,'Categoria informada não consta');

		   }	


		    const autorRepository = new AutorRepository();
		    
		    const existeAutor = await autorRepository.consistirExiste('id',autor);		   
		 
		   if (!existeAutor)		  
		   {
              
			 return await restricaoValidation(res,'autor informado não consta ');

		   }	



		   response  = livro.consistirCampos();

		   if (!response.success)
		   {
              httpStatus = 400; 

		      return res.status(httpStatus).send(response)
		   }
			
		   response  = await livrorepository.save(livro);

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao gravar livro : ' +  e);
			
		}
	}



	static async getLivros(req, res, next) {


		try {

			
		   let httpStatus = 200;

		   
		   const livrorepository  = new LivroRepository();
           let response           = null;   

			
		   response  = await livrorepository.find('','',['id','titulo']);

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao consultar livro : ' +  e);
			
		}
	}


	static async getLivro(req, res, next) {


		try {


		   const {id}  = req.params;
		 		
		   let httpStatus = 200;
		   
		   const livrorepository  = new LivroRepository();
           let response           = null

			
		   response  = await livrorepository.find('id',id);

		   if (!response.success) httpStatus = 404; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao consultar livro : ' +  e);
			
		}
	}


}

export default LivroController;