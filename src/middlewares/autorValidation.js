import { body } from 'express-validator';

export const postAutorValidation = () => 
{
	return [
		body('nome').isString().withMessage('campo nome deve ser informado no body').notEmpty().withMessage('campo nome não pode ficar vazio'),
		body('email').isString().withMessage('campo email  deve ser informado no body').isEmail().withMessage("informe um e-mail válido"),		
		body('descricao').isString().withMessage('campo descricao  deve ser informado no body').notEmpty().withMessage('campo descrição não pode ficar vazio').isLength({max:400}).withMessage('campo descricao deve conter no máximo 400 caracteres')
	];
};

export default postAutorValidation

