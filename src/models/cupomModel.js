import gerarId from '../helpers/gerarId.js';
import Response from '../helpers/response.js';

class Cupom {

   id  =  ''
   codigo = '';
   percentual = 0
   dataValidade = null
   data = null;

   constructor (codigo,percentual,validade) {


      this.id           = gerarId();
	  this.codigo       = codigo;
	  this.percentual   = percentual;
	  this.dataValidade = validade;
	  this.data         = new Date().toLocaleDateString('pt-BR'); 
	 
   }




   
    async consistirValidade() {

     
	  let dataAtual = new Date(); 
      dataAtual = dataAtual.toLocaleDateString('pt-BR'); 	
	
	   const response = new Response();
	   response.success = true;
	   response.message = 'cupom dentro da validade';

	   if (this.dataValidade != null)
	  {
       
		if  (this.dataValidade < dataAtual)
	    {
	       response.success = false;
		   response.message = 'validade do cupom expirada';

	    }	

	  }	


	 return response;
  

   }




    consistirCampos() {

     
	  let dataAtual = new Date(); 
      dataAtual = dataAtual.toLocaleDateString('pt-BR'); 	
	
	   const response = new Response();
	   response.success = true;
	   response.message = 'Validado com sucesso';

	   if (this.dataValidade != null)
	  {
       
		if  (this.dataValidade <= dataAtual)
	    {
	       response.success = false;
		   response.message = 'Data validade deve ser maior do que a data atual';

	    }	

	  }	


	 return response;
  

   }



}


export default Cupom;