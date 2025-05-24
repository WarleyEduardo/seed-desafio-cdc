import { body } from 'express-validator';

export const postUsuarioValidation = () => 
{
	return [
		body('nome').isString().withMessage('campo nome deve ser informado no body').notEmpty().withMessage('campo nome não pode ficar vazio'),
		body('sobrenome').isString().withMessage('campo sobrenome deve ser informado no body').notEmpty().withMessage('campo sobrenome não pode ficar vazio'),
		body('email').isString().withMessage('campo email deve ser informado no body').isEmail().withMessage("informe um e-mail válido"),		
		body('cpfcnpj').isString().withMessage('campo cpfcnpjf deve ser informado no body').notEmpty().withMessage('campo cpfcnpj não pode ficar vazio'),
		body('endereco').isString().withMessage('campo endereco deve ser informado no body').notEmpty().withMessage('campo endereco não pode ficar vazio'),
		body('complemento').isString().withMessage('campo complemento deve ser informado no body').notEmpty().withMessage('campo complemento não pode ficar vazio'),
		body('cidade').isString().withMessage('campo cidade deve ser informado no body').notEmpty().withMessage('campo cidade não pode ficar vazio'),
		body('pais').isString().withMessage('campo pais deve ser informado no body').notEmpty().withMessage('campo pais não pode ficar vazio'),
		body('estado').isString().withMessage('campo estado deve ser informado no body').optional().notEmpty().withMessage('campo estado não pode ficar vazio'),
		body('telefone').isString().withMessage('campo telefone deve ser informado no body').notEmpty().withMessage('campo telefone não pode ficar vazio'),
		body('cep').isString().withMessage('campo cep deve ser informado no body').notEmpty().withMessage('campo cep não pode ficar vazio'),
								
	];
};

export default postUsuarioValidation

