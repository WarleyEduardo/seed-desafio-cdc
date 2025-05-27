
import gerarId from '../helpers/gerarId.js';
import Response from '../helpers/response.js';

class Pedido {
   
   id  =  ''
   cliente = {};
   itens = [];
   total = 0;
   data = null;




    consistir () {
      
	  let response = new Response();

      response.success = true;
	  response.message = 'validado com sucesso!';


	  return response;

   }
 


   constructor (cliente,lista, total) 
   {

      this.id        = gerarId();
	  this.cliente   = cliente;
	  this.itens     = lista;
	  this.total     = total;
	  this.data      = new Date().toLocaleDateString('pt-BR'); 	  
	 
   }





}


export default Pedido;