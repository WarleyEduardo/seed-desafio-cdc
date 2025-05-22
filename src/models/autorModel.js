
import gerarId from '../helpers/gerarId.js';

class Autor {
   
   id  =  ''
   nome = '';
   email = '';
   descricao = ''
   data = null;


   constructor (nome,email,descricao) 
   {

      this.id        = gerarId();
	  this.nome      = nome;
	  this.email     = email;
	  this.descricao = descricao
	  this.data      = new Date().toLocaleDateString('pt-BR'); ;
	  
	 
   }


}


export default Autor;