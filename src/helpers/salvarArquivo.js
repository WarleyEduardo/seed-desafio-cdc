import fs from 'fs';

const salvarArquivo = (lista,arquivo) =>
{
	
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
 
export default salvarArquivo;