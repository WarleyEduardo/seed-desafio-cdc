
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
	

	async find (chave,valor) {

        let lista = []
     	
		if (listaLivros.length >  0)
		{

           listaLivros.forEach(livro => {

			
			   Object.keys(livro).forEach(key => {

                

				if (key.toUpperCase() == chave.toUpperCase() && livro[key].toUpperCase() == valor.toUpperCase())
				{					
					lista.push(livro);
				}	

                

             });
		   })
          

		}	

	
		
		return lista;
	 }


	 async consistirExiste (chave,valor) {

		return await consistirExiste(listaLivros,chave,valor);
	 }

	

	constructor () {

      this.loadList();	 
   }


}


export default LivroRepository;