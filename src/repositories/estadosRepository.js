
import fs from 'fs';
import Response from '../helpers/response.js'
import consistirExiste from '../helpers/consistirExiste.js';


var listaEstados = [];

 const arquivo = './src/data/Estados.json';



class EstadoRepository {

	
   
	async save (estado) {
	
      const  response = new Response();
	   

	  response.success = 'true';
	  response.message = 'Salvo com sucesso';


	  response.data.push(estado);
	  
	  this.listSave(estado);

	  return response;       


	}


	listSave (estado) {


		listaEstados.push(estado);

		const jsonString = JSON.stringify(listaEstados);
     

		if (fs.existsSync(arquivo)) {

			fs.unlinkSync(arquivo);
		}

		

		fs.writeFile(arquivo, jsonString, (err) => {
        
			if (err) {
           console.error("Erro ao escrever o arquivo:", err);
          } else {
            console.log("Array salvo em Estados.json");
          }
       
		});

	}


     async loadList() {
       	

		if (fs.existsSync(arquivo)) {

			
           const  _arquivo = fs.readFileSync(arquivo, 'utf8')

		   if (_arquivo != '')
		   {
              listaEstados  =  JSON.parse(_arquivo);

		   }

			 
		}	
	


	} 
	

	async find (chave,valor) {

        let lista = []
     	
		if (listaEstados.length >  0)
		{

           listaEstados.forEach(estado => {


			
			   Object.keys(pais).forEach(key => {

                

				if (key.toUpperCase() == chave.toUpperCase() && estado[key].toUpperCase() == valor.toUpperCase())
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
		return await consistirExiste(listaEstados,chave,valor);
	 }

	

	constructor () {

      this.loadList();	 
   }


}


export default EstadoRepository;