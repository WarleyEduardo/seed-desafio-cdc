
import gerarId from '../helpers/gerarId.js';

class Pais {
   
   id  =  ''
   nome = '';
   data = null;
 


   constructor (nome) 
   {

      this.id        = gerarId();
	  this.nome      = nome;
	  this.data      = new Date().toLocaleDateString('pt-BR'); 	  
	 
   }


}


export default Pais;