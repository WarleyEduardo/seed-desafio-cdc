import Response from '../helpers/response.js';
import { validationResult } from 'express-validator';

const validate  = (req,res, next) => 
{

	const errors = validationResult(req)



	if (errors.isEmpty()) {

		
		return next();
		
	}


	let erros = '| '

	errors.array().map( (err) => 
	{

        
		erros += err.msg  +  ' |';

	} )


	const response = new Response()

	response.sucess  =  false
	response.msg     = erros
	
	return res.status(422).send(response);

}

export default validate;