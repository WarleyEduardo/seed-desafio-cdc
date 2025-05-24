
const removerCampos = (item,campos) =>{



    if (campos != undefined )
	{

	   for (const key in item) 
	   {
				
		  if(campos.indexOf(key) < 0)
          {                        
			 delete item[key]
          }

       };
	   
	}	 



	return item;


}



export default removerCampos;