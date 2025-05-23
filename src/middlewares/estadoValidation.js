import { body } from 'express-validator';

export const postEstadoValidation = () => 
{
	return [
		body('nome').isString().withMessage('campo nome deve ser informado no body').notEmpty().withMessage('campo nome não pode ficar vazio'),
		body('pais').isString().withMessage('campo pais deve ser informado no body').notEmpty().withMessage('campo pais não pode ficar vazio')			
	];
};

export default postEstadoValidation

