
import gerarId from '../helpers/gerarId.js';
import Response from '../helpers/response.js';

class Pedido {
   
   id  =  ''
   cliente = {};
   itens = [];
   total = 0;
   data = null;
   #clienteRepository = null;
   #livroRepository   = null;

 

   constructor (cliente,lista, total, clienteRepository, livroRepository) 
   {

      this.id                 = gerarId();
	  this.cliente            = cliente;
	  this.itens              = lista;
	  this.total              = total.toFixed(2);
	  this.#clienteRepository  = clienteRepository;
	  this.#livroRepository    = livroRepository;
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

	  let totalItem = 0	
      
	  let response = new Response();

      response.success = true;
	  response.message = 'validado com sucesso!';

	  for (const item of this.itens) {
		 
		  response = await this.#livroRepository.find('id',item.idlivro)


		  

		  if (!response.success) 
		  {

                response.message = 'idlivro ' + item.idlivro + ' não consta ';
				
				break
		  } 
		  
		  
        const {preco} =  response.data[0] ;
		totalItem +=   item.quantidade *   preco.toFixed(2);
		  
	  }


      response.data = [];

	  if (response.success)
      {

         if (this.total != totalItem)
	     {

           response.success = false;
		   response.message = 'Total não confere com o total dos itens'

	     }		  
	  }
  

	  return response;

   }
   
}


export default Pedido;