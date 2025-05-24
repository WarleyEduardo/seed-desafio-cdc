
import fs from 'fs';
import Response from '../helpers/response.js'
import consistirExiste from '../helpers/consistirExiste.js';


var listaUsuarios = [];

const arquivo = './src/data/Usuarios.json';

class UsuarioRepository {

	
   
	async save (usuario) {
	
      const  response = new Response();
	   

	  response.success = 'true';
	  response.message = 'Salvo com sucesso';


	  response.data.push(usuario);
	  
	  this.listSave(usuario);

	  return response;       


	}


	listSave (usuario) {


		listaUsuarios.push(usuario);

		const jsonString = JSON.stringify(listaUsuarios);
     

		if (fs.existsSync(arquivo)) {

			fs.unlinkSync(arquivo);
		}

		

		fs.writeFile(arquivo, jsonString, (err) => {
        
			if (err) {
           console.error("Erro ao escrever o arquivo:", err);
          } else {
            console.log("Array salvo em usuarios.json");
          }
       
		});

	}



     async loadList() {
       	

		if (fs.existsSync(arquivo)) {

			
           const  _arquivo = fs.readFileSync(arquivo, 'utf8')

		   if (_arquivo != '')
		   {
              listaUsuarios  =  JSON.parse(_arquivo);

		   }

			 
		}	
	


	} 
	

	async find (chave,valor) {

        let lista = []
     	
		if (listaUsuarios.length >  0)
		{

           listaAutores.forEach(usuario => {

			
			   Object.keys(usuario).forEach(key => {

                

				if (key.toUpperCase() == chave.toUpperCase() && usuario[key].toUpperCase() == valor.toUpperCase())
				{					
					lista.push(usuario);
				}	

                

             });
		   })
          

		}	

	
		
		return lista;
	 }


	 async consistirExiste (chave,valor) {

		return await consistirExiste(listaUsuarios,chave,valor);
	 }	

	constructor () {

      this.loadList();	 
   }


}


export default UsuarioRepository;