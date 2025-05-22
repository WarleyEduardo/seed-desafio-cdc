
import fs from 'fs';
import Response from '../helpers/response.js'
import consistirExiste from '../helpers/consistirExiste.js';


var listaAutores = [];

 const arquivo = './src/data/Autores.json';



class AutorRepository {

	
   
	async save (autor) {
	
      const  response = new Response();
	   

	  response.success = 'true';
	  response.message = 'Salvo com sucesso';


	  response.data.push(autor);
	  
	  this.listSave(autor);



	  return response;
       


	}


	listSave (autor) {


		listaAutores.push(autor);

		const jsonString = JSON.stringify(listaAutores);
     

		if (fs.existsSync(arquivo)) {

			fs.unlinkSync(arquivo);
		}

		

		fs.writeFile(arquivo, jsonString, (err) => {
        
			if (err) {
           console.error("Erro ao escrever o arquivo:", err);
          } else {
            console.log("Array salvo em autores.json");
          }
       
		});

	}



     async loadList() {
       	

		if (fs.existsSync(arquivo)) {

			
           const  _arquivo = fs.readFileSync(arquivo, 'utf8')

		   if (_arquivo != '')
		   {
              listaAutores  =  JSON.parse(_arquivo);

		   }

			 
		}	
	


	} 
	

	async find (chave,valor) {

        let lista = []
     	
		if (listaAutores.length >  0)
		{

           listaAutores.forEach(autor => {

			
			   Object.keys(autor).forEach(key => {

                

				if (key.toUpperCase() == chave.toUpperCase() && autor[key].toUpperCase() == valor.toUpperCase())
				{					
					lista.push(autor);
				}	

                

             });
		   })
          

		}	

	
		
		return lista;
	 }


	 async consistirExiste (chave,valor) {

		return await consistirExiste(listaAutores,chave,valor);
	 }

	

	constructor () {

      this.loadList();	 
   }


}


export default AutorRepository;