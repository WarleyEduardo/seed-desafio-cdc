
import gerarId from '../helpers/gerarId.js';
import Response from '../helpers/response.js';

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
	  this.dataCadastro   = new Date().toLocaleDateString('pt-BR'); 

	  this.isbn           = isbn;
	  this.categoria      = categoria;
	  this.autor          = autor;
	  
	 
   }


   consistirCampos() {

     
	  let dataAtual = new Date(); 
      dataAtual = dataAtual.toLocaleDateString('pt-BR'); 	
	
	  const response = new Response();
	 response.success = true;
	 response.message = 'Validado com sucesso';

	 if (this.dataPublicacao != null)
	 {
       
		if  (this.dataPublicacao <= dataAtual)
	   {
	      response.success = false;
		  response.message = 'Data de publicação deve ser maior do que a data atual';

	   }	

	 }	


	 return response;
  

   }


}


export default Livro;