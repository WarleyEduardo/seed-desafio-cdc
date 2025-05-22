
import gerarId from '../helpers/gerarId.js';

class Livro {

   id       = ''
   titulo   = '';
   resumo   = '';
   sumario  = '';
   preco    = 0.00;
   paginas  = 0; 
   isbn     = '' 
   dataCadastro   = null;
   dataPublicacao = null;
   categoria      = null;
   autor          = null;


   constructor (titulo,resumo,preco,isbn,paginas,categoria,autor) 
   {


      this.id             = gerarId();
	  this.titulo         = titulo;
	  this.resumo         = resumo;
	  this.paginas        = paginas;
	  this.preco          = preco;
	  this.dataCadastro   = new Date();
	  this.isbn           = isbn;
	  this.categoria      = categoria;
	  this.autor          = autor;
	  
	 
   }


}


export default Livro;