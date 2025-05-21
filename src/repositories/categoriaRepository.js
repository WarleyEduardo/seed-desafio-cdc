
import fs from 'fs';
import Response from '../helpers/response.js'
import unique from '../helpers/consistirUnique.js';


var listaCategoria = [];

 const arquivo = './src/data/Categorias.json';



class CategoriaRepository {

	
   
	async save (categoria) {
	
      const  response = new Response();
	   

	  response.success = 'true';
	  response.message = 'Salvo com sucesso';


	  response.data.push(categoria);
	  
	  this.listSave(categoria);

	  return response;       


	}


	listSave (categoria) {


		listaCategoria.push(categoria);

		const jsonString = JSON.stringify(listaCategoria);
     

		if (fs.existsSync(arquivo)) {

			fs.unlinkSync(arquivo);
		}

		

		fs.writeFile(arquivo, jsonString, (err) => {
        
			if (err) {
           console.error("Erro ao escrever o arquivo:", err);
          } else {
            console.log("Array salvo em categorias.json");
          }
       
		});

	}



     async loadList() {
       	

		if (fs.existsSync(arquivo)) {

			
           const  _arquivo = fs.readFileSync(arquivo, 'utf8')

		   if (_arquivo != '')
		   {
              listaCategoria  =  JSON.parse(_arquivo);

		   }

			 
		}	
	


	} 
	

	async find (chave,valor) {

        let lista = []
     	
		if (listaCategoria.length >  0)
		{

           listaCategoria.forEach(categoria => {


			
			   Object.keys(categoria).forEach(key => {

                

				if (key.toUpperCase() == chave.toUpperCase() && categoria[key].toUpperCase() == valor.toUpperCase())
				{
					
					lista.push(categoria);
				}	

                

             });
		   })

          


		}	

	
		
		return lista;
	 }



	  async ConsistirUnico (chave,valor) {
		return await unique(listaCategoria,chave,valor);
	 }


	

	constructor () {

      this.loadList();	 
   }


}


export default CategoriaRepository;