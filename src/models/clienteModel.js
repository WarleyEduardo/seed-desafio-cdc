
import gerarId from '../helpers/gerarId.js';

class Cliente {
   
   id          = '';
   nome        = '';
   sobreNome   = ''
   email       = '';
   documento   = '';
   endereco    = '';
   complemento = '';
   cidade      = '';
   pais        = null
   estado      = null;
   telefone    = '';
   cep         = '';
   data        = null;

 
   constructor (nome,email,documento,sobreNome,endereco,complemento,cidade,pais,estado,telefone,cep) 
   {

      this.id          = gerarId();
	  this.nome        = nome;
	  this.sobreNome   = sobreNome;
	  this.email       = email;
	  this.documento   = documento;
	  this.endereco    = endereco;
	  this.complemento = complemento;
	  this.cidade      = cidade;
	  this.pais        = pais;
	  this.estado      = estado;
	  this.telefone    = telefone;
	  this.cep         = cep;
	  this.data        = new Date().toLocaleDateString('pt-BR'); 	  
	 
   }


}


export default Cliente;