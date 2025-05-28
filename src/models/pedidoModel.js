
import gerarId from '../helpers/gerarId.js';

class Pedido {
   
   id  =  ''
   cliente = {};
   itens = [];
   totalItens = 0;
   desconto  = 0;
   total = 0;
   data = null;
   perDesconto   = 0 
   cupomDesconto = ''


   constructor (cliente,lista,total,desconto) 
   {

      this.id          = gerarId();
	  this.cliente     = cliente;
	  this.itens       = lista;
	  this.totalItens  = total  +  desconto;
	  this.desconto    = desconto
	  this.total       = total.toFixed(2);
	  this.data        = new Date().toLocaleDateString('pt-BR'); 
	 
   }
   


}


export default Pedido;