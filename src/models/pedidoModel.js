
import gerarId from '../helpers/gerarId.js';

class Pedido {
   
   id  =  ''
   cliente = {};
   itens = [];
   total = 0;
   data = null;
   perDesconto   = 0 
   cupomDesconto = ''


   constructor (cliente,lista, total) 
   {

      this.id                 = gerarId();
	  this.cliente            = cliente;
	  this.itens              = lista;
	  this.total              = total.toFixed(2);
	  this.data               = new Date().toLocaleDateString('pt-BR'); 
	 
   }
   


}


export default Pedido;