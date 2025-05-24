import Usuario from '../models/usuarioModel.js';
import UsuarioRepository from '../repositories/usuarioRepository.js';
import restricaoValidation from '../middlewares/restricaoValidation.js';



class UsuarioController {


	static async postUsuario(req, res, next) {



		try {
			
		
		   let httpStatus = 200;

		   let { nome, sobrenome,email, documento,endereco,complemento,cidade,pais,estado, telefone,cep } = req.body;

		   const usuario  = new Usuario(nome, sobrenome,email, documento,endereco,complemento,cidade,pais,estado, telefone,cep );	 		
		   const repository = new UsuarioRepository();
           let response     = null;	
		   
		   
		   const existe = await repository.consistirExiste('email',email);		   
		 
		   if (existe)
		   {
              
			  return  await restricaoValidation(res,'Existe usuário cadastrado com email informado');

		   }	

			
		   response  = await repository.save(usuario);

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao gravar usuário : ' +  e );
			
		}

	}

}


export default UsuarioController;