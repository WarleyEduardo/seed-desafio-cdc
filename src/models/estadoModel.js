
import gerarId from '../helpers/gerarId.js';

class Estado {
   
   id  =  ''
   nome = '';
   pais = null;  
   data = null; 

   constructor (nome,pais) 
   {

      this.id        = gerarId();
	  this.nome      = nome;
	  this.pais      = pais;
	  this.data      = new Date().toLocaleDateString('pt-BR'); 	  
	 
   }

}


export default Estado;