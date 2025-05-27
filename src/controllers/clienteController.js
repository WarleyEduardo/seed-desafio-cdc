import Cliente from '../models/clienteModel.js';
import ClienteRepository from '../repositories/clienteRepository.js';
import restricaoValidation from '../middlewares/restricaoValidation.js';



class ClienteController {


	static async postCliente(req, res, next) {



		try {
			
		
		   let httpStatus = 200;

		   let { nome, sobrenome,email, documento,endereco,complemento,cidade,pais,estado, telefone,cep } = req.body;

		   const cliente    = new Cliente(nome, sobrenome,email, documento,endereco,complemento,cidade,pais,estado, telefone,cep );	 		
		   const repository = new ClienteRepository();
           let response     = null;	
		   
		   
		   const existe = await repository.consistirExiste('email',email);		   
		 
		   if (existe)
		   {
              
			  return  await restricaoValidation(res,'Existe usuário cadastrado com email informado');

		   }	

			
		   response  = await repository.save(cliente);

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao gravar usuário : ' +  e );
			
		}

	}

}


export default ClienteController;