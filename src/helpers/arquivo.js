import fs from 'fs';

import removerCampos from './removerCampos.js';

export const saveArquivo = async (registro,arquivo) =>
{
	var lista = await loadArquivo(arquivo);

	lista.push(registro);
	
	
	const jsonString = JSON.stringify(lista);
     

	if (fs.existsSync(arquivo))
	{
	   fs.unlinkSync(arquivo);
	}

	fs.writeFile(arquivo, jsonString, (err) =>
    {
        
		if (err) 
		{
            console.error("Erro ao salvar o arquivo: " +  arquivo, err);
        } else 
		{
            console.log("arquivo salvo em : " +  arquivo);
        }
       
	});

}


export const loadArquivo = async (arquivo) =>{

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




export const findRegistro = (listaRegistros, chave, valor, campos) => 
{

   let lista = [];

   lista = listaRegistros;

   const filtrarItens = (chave !== '' && valor !== '' && chave !==  undefined && valor !== undefined )
   const removerkey  = campos != undefined;


   // filtrando os registros

   if (listaRegistros.length >  0 &&  ( filtrarItens || removerkey)  )
   {        
	    lista = [];
	
	    for (const item of listaRegistros) 
		{  
			
			
			if (filtrarItens)
			{
				for (const key in item) 			
			    {
  
              
					if (key.toUpperCase() == chave.toUpperCase() && item[key].toUpperCase() == valor.toUpperCase())
				    {			
							
					  lista.push(removerCampos(item,campos));					   
					
				    }	


				}; 

  
            } else
			{
                lista.push(removerCampos(item,campos));

			}
				


		}
    	
		
   };	

 
   return lista;


}

 
