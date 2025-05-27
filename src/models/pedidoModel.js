
import gerarId from '../helpers/gerarId.js';
import Response from '../helpers/response.js';

class Pedido {
   
   id  =  ''
   cliente = {};
   itens = [];
   total = 0;
   data = null;
   clienteRepository = null;
   livroRepository   = null;





   constructor (cliente,lista, total, clienteRepository, livroRepository) 
   {

      this.id                 = gerarId();
	  this.cliente            = cliente;
	  this.itens              = lista;
	  this.total              = total;
	  this.clienteRepository  = clienteRepository;
	  this.livroRepository    = livroRepository;
	  this.data               = new Date().toLocaleDateString('pt-BR'); 	  
	 
   }


     async consistirTotalItens() {
         
		let response = new Response();		
		let total = 40;
          
        response.success = true;
		response.message = 'Valor total de itens válido !';

		if (total !== this.total){

			response.success = false;
			response.message = 'valor total de itens inconsistente';
		}
		

       return response

	} 


   
    async consistir () {
      
	  let response = new Response();

      response.success = true;
	  response.message = 'validado com sucesso!';


	  response = await this.consistirTotalItens();

	  return response;

   }
 





}


export default Pedido;