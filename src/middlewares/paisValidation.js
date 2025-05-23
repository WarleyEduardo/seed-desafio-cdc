import { body } from 'express-validator';

export const postPaisValidation = () => 
{
	return [
		body('nome').isString().withMessage('campo nome deve ser informado no body').notEmpty().withMessage('campo nome não pode ficar vazio')		
	];
};

export default postPaisValidation

