const unique = async (lista,chave, valor) => {

	let unico = true;

	if (lista.length >  0)
	{

      
		for (const item in lista) {			
					
			
		   const dados = Object.entries(lista[item]);

           for (const [key, valorKey] of dados) {


			
			   if (key.toUpperCase() == chave.toUpperCase() && valorKey.toUpperCase() == valor.toUpperCase())
			   {					
				  
				  unico = false;
				  break
			   }	
            
			

           }


		   if (unico == false) break;
		}
		
		

	}	


   
	return  unico ;

}

export default unique;

