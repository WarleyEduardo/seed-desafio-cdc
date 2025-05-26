import fs from 'fs';


const carregarArquivo = async (arquivo) =>{

	let lista = [];

     if (fs.existsSync(arquivo)) {

			
        const  _arquivo =   fs.readFileSync(arquivo, 'utf8')

		if (_arquivo != '')
		{         
			
			lista  =   JSON.parse(_arquivo);	
			
		}
			 
	}	


	return lista
	
}


export default carregarArquivo;