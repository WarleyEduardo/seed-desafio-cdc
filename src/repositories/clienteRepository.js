
import Response from '../helpers/response.js'
import consistirExiste from '../helpers/consistirExiste.js';
import {saveArquivo,loadArquivo, findRegistro} from '../helpers/arquivo.js';


class ClienteRepository {

	arquivo = './src/data/Clientes.json';
   
	async save (usuario) {
	
      const  response = new Response();
	   

	  response.success = 'true';
	  response.message = 'Salvo com sucesso';


	  response.data.push(usuario);
	  
	  this.listSave(usuario);

	  return response;       


	}


	listSave (usuario) {

	   saveArquivo(usuario,this.arquivo);
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


export default ClienteRepository;