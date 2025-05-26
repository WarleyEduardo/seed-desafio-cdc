
import Response from '../helpers/response.js'
import consistirExiste from '../helpers/consistirExiste.js';
import {saveArquivo,loadArquivo,findRegistro} from '../helpers/arquivo.js'





class CategoriaRepository {

    arquivo = './src/data/Categorias.json';
	
   
	async save (categoria) {
	
      const  response = new Response();
	   

	  response.success = 'true';
	  response.message = 'Salvo com sucesso';


	  response.data.push(categoria);
	  
	  this.listSave(categoria);

	  return response;       


	}


	listSave (categoria) {


		 saveArquivo(categoria,this.arquivo);

	}


     async loadList() {
       	

		return  await loadArquivo(this.arquivo); 	
	


	} 
	

	async find (chave,valor,campos) {

      	const _lista = await this.loadList();	

	    const lista = await findRegistro(_lista,chave,valor,campos);

		let response = new Response();

		response.success  = lista.length > 0 ? true : false;
		response.message  = 'Consulta realizada ';
		response.data     = lista;
		return response;
	 }



	  async consistirExiste (chave,valor) {
			const _lista = await this.loadList();

		return await consistirExiste(_lista,chave,valor);
	 }

}


export default CategoriaRepository;