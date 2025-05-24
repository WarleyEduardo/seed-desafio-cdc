import removerCampos from './removerCampos.js';



const findRegistro = (listaRegistros, chave, valor, campos) => 
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



export default findRegistro;

