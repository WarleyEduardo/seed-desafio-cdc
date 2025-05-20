
import Response from '../helpers/response.js'

class AutorRepository {


   
	async salve (autor) {



      const  response = new Response();

	  response.success = 'true';
	  response.message = 'Salvo com sucesso';
	  response.data.push(autor);

	  return response;
       


	}


}


export default AutorRepository;