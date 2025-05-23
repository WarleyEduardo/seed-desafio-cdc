
import fs from 'fs';
import Response from '../helpers/response.js'
import consistirExiste from '../helpers/consistirExiste.js';


var listaPaises = [];

 const arquivo = './src/data/Paises.json';



class PaisRepository {

	
   
	async save (pais) {
	
      const  response = new Response();
	   

	  response.success = 'true';
	  response.message = 'Salvo com sucesso';


	  response.data.push(pais);
	  
	  this.listSave(pais);

	  return response;       


	}


	listSave (pais) {


		listaPaises.push(pais);

		const jsonString = JSON.stringify(listaPaises);
     

		if (fs.existsSync(arquivo)) {

			fs.unlinkSync(arquivo);
		}

		

		fs.writeFile(arquivo, jsonString, (err) => {
        
			if (err) {
           console.error("Erro ao escrever o arquivo:", err);
          } else {
            console.log("Array salvo em Paises.json");
          }
       
		});

	}


     async loadList() {
       	

		if (fs.existsSync(arquivo)) {

			
           const  _arquivo = fs.readFileSync(arquivo, 'utf8')

		   if (_arquivo != '')
		   {
              listaPaises  =  JSON.parse(_arquivo);

		   }

			 
		}	
	


	} 
	

	async find (chave,valor) {

        let lista = []
     	
		if (listaPaises.length >  0)
		{

           listaPaises.forEach(pais => {


			
			   Object.keys(pais).forEach(key => {

                

				if (key.toUpperCase() == chave.toUpperCase() && pais[key].toUpperCase() == valor.toUpperCase())
				{
					
					lista.push(pais);
				}	

                

             });
		   })

          


		}	

	
		
		return lista;
	 }



	 async consistirExiste (chave,valor) 
	 {
		return await consistirExiste(listaPaises,chave,valor);
	 }

	

	constructor () {

      this.loadList();	 
   }


}


export default PaisRepository;