import { body } from 'express-validator';

export const postCupomValidation = () => 
{
	return [
		body('codigo').isString().withMessage('campo codigo deve ser informado no body').notEmpty().withMessage('campo codigo não pode ficar vazio'),
		body('percentual').isCurrency().withMessage('campo percentual deve ser informado no body').isFloat({min:1}).withMessage('campo  percentual deve ter no mínino 1'),
		body('validade').isDate({ format: 'DD/MM/YYYY' }).withMessage('validade deve estar no formato : DD/MM/YYYY')
	];
};

export default postCupomValidation

