import fs from 'fs';
import Response from '../helpers/response.js'
import consistirExiste from '../helpers/consistirExiste.js';
import salvarArquivo from '../helpers/salvarArquivo.js';
import carregarArquivo from '../helpers/carregarArquivo.js';
import findRegistro from '../helpers/findRegistro.js';

var listaLivros = [];

const arquivo = './src/data/Livros.json';

class LivroRepository {	
	
   
	async save (livro) 
	{
	
    	const  response = new Response();
	    
		
	    response.data.push(livro);
	  
	    this.listSave(livro);
	    
		response.success = 'true';
	    response.message = 'Salvo com sucesso';
		
		return response;      


	}


	listSave (livro) {

    	listaLivros.push(livro);
     	salvarArquivo(listaLivros,arquivo);

	}


	

	carregarArquivo2 (arquivo) {
	
		let lista = [];
	
		 if (fs.existsSync(arquivo)) {
	
				
			const  _arquivo =   fs.readFileSync(arquivo, 'utf8')
	
			if (_arquivo != '')
			{
				lista  =   JSON.parse(_arquivo);
	
				
			}
				 
		}	
	
	
		return lista;
		
	}



    async loadList() 	{
	
		 listaLivros =  carregarArquivo(arquivo);   	

		// listaLivros =  this.carregarArquivo2(arquivo);
	} 
	

	async find (chave,valor,campos) {

	    const lista = await findRegistro(listaLivros,chave,valor,campos);
		
		let response = new Response();

		response.success  = lista.length > 0 ? true : false;
		response.message  = 'Consulta realizada ';
		response.data     = lista;
		return response;
		
	 }


	 async consistirExiste (chave,valor) {

		return await consistirExiste(listaLivros,chave,valor);
	 }

	

	constructor  () {

        this.loadList();	 
   }


}


export default LivroRepository;