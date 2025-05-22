const consistirExiste = async (lista,chave, valor) => {

	let existe = false;

	if (lista.length >  0)
	{

      
		for (const item in lista) {			
					
			
		   const dados = Object.entries(lista[item]);

           for (const [key, valorKey] of dados) {


			
			   if (key.toUpperCase() == chave.toUpperCase() && valorKey.toUpperCase() == valor.toUpperCase())
			   {			
				  
				  existe = true;
				  break
			   }	
            
			

           }


		   if (existe == true) break;
		}
		
		

	}	


   
	return  existe ;

}

export default consistirExiste;

