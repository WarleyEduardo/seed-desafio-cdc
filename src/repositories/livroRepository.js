
import fs from 'fs';
import Response from '../helpers/response.js'
import consistirExiste from '../helpers/consistirExiste.js';


var listaLivros = [];

 const arquivo = './src/data/Livros.json';



class LivroRepository {

	
   
	async save (livro) {
	
      const  response = new Response();
	   

	  response.success = 'true';
	  response.message = 'Salvo com sucesso';


	  response.data.push(livro);
	  
	  this.listSave(livro);



	  return response;
       


	}


	listSave (livro) {


		listaLivros.push(livro);

		const jsonString = JSON.stringify(listaLivros);
     

		if (fs.existsSync(arquivo)) {

			fs.unlinkSync(arquivo);
		}

		

		fs.writeFile(arquivo, jsonString, (err) => {
        
			if (err) {
           console.error("Erro ao escrever o arquivo:", err);
          } else {
            console.log("Array salvo em livros.json");
          }
       
		});

	}



     async loadList() {
       	

		if (fs.existsSync(arquivo)) {

			
           const  _arquivo = fs.readFileSync(arquivo, 'utf8')

		   if (_arquivo != '')
		   {
              listaLivros  =  JSON.parse(_arquivo);

		   }

			 
		}	
	


	} 
	

	async find (chave,valor,campos) {

        let lista = []
		let _lista = []

		let response = new Response();
		     	
		if (listaLivros.length >  0  && chave !== '' && valor !== '' && chave !==  undefined && valor !== undefined )
		{

           listaLivros.forEach(livro => {

			
			   Object.keys(livro).forEach(key => {

               
				if (key.toUpperCase() == chave.toUpperCase() && livro[key].toUpperCase() == valor.toUpperCase())
				{			
					 
					_lista.push(livro);
					
				}	

                            
			

             });
		   })
          

		}	

         if ( chave == '' || valor == ''  || chave == undefined || valor == undefined)
		 {
             _lista = listaLivros;

		 }	


         if (campos == undefined) 
		 {
            lista = _lista;
		 }


		 if (_lista.length >  0 && campos !== undefined )
		 {

			 _lista.forEach(livro => {


                 
				Object.keys(livro).forEach(key => {

				
				   if(campos.indexOf(key) < 0)
                   {  
                      
					  delete livro[key]
                   }

                });
				

				lista.push(livro);

				
		   })


		   


		 }	


		 response.success = lista.length > 0 ? true : false;
		 response.message = 'Consulta realizada dados';
		 response.data = lista;	
		
		return response;
	 }


	 async consistirExiste (chave,valor) {

		return await consistirExiste(listaLivros,chave,valor);
	 }

	

	constructor () {

      this.loadList();	 
   }


}


export default LivroRepository;