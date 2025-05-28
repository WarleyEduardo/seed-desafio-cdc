import Cupom from '../models/cupomModel.js';
import CupomRepository from '../repositories/cupomRepository.js';
import restricaoValidation from '../middlewares/restricaoValidation.js';

class CupomController {


	static async postCupom(req, res, next) {


		try {

			
		   let httpStatus = 200;

		   let { codigo,percentual, validade  } = req.body;

		   const cupom   =  new Cupom(codigo,percentual,validade);	
				   
		   const cupomRepository  = new  CupomRepository();
           let response           = null;   		   
		   
		   const existeCupom = await cupomRepository.consistirExiste('codigo',codigo);		   
		 
		   if (existeCupom)
		   {
              
			 return  await restricaoValidation(res,'Existe cupom cadastrado com código informado');

		   }

		   response  = cupom.consistirCampos();

		   if (!response.success)
		   {
              httpStatus = 400; 

		      return res.status(httpStatus).send(response)
		   }
			
		   response  = await cupomRepository.save(cupom);

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao gravar cupom : ' +  e);
			
		}
	}



	static async getCupons(req, res, next) {


		try {

		
		   let httpStatus = 200;
	   
		   const cupomRepository  =  new CupomRepository();
		   let response           = null;   

			
		   response  = await cupomRepository.find('','');

		   if (!response.success) httpStatus = 400; 

		   return res.status(httpStatus).send(response)
			
		} catch (e) {

			restricaoValidation(res,'Erro ao consultar cupons : ' +  e);
			
		}
	}


}

export default CupomController;