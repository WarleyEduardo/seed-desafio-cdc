import Response from '../helpers/response.js'


const restricaoValidation = (res,msg) => {


	const response = new Response()

	response.success  =  false
	response.message  = msg;
	
	return res.status(400).send(response);

}

export default restricaoValidation;