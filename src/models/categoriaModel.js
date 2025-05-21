
import gerarId from '../helpers/gerarId.js';

class Categoria {

   id  =  ''
   nome = '';
   data = null;


   constructor (nome) {


      this.id        = gerarId();
	  this.nome      = nome;
	  this.data      = new Date();
	  
	 
   }


}


export default Categoria;