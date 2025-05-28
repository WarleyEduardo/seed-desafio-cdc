import { body, check } from 'express-validator';

export const postPedidoValidation = () => 
{
	return [
		body('cliente').notEmpty().withMessage('campo cliente não pode ficar vazio'),
		body('cliente.email').isString().withMessage('campo email do cliente deve ser informado no body').isEmail().withMessage("informe o um e-mail válido"),
		body('cliente.nome').isString().withMessage('campo nome do cliente deve ser informado no body').notEmpty().withMessage('campo nome do cliente não pode ficar vazio'),
		body('cliente.sobrenome').isString().withMessage('campo sobrenome do cliente deve ser informado no body').notEmpty().withMessage('campo sobrenome do cliente não pode ficar vazio'),
		body('cliente.documento').isString().withMessage('campo documento do cliente deve ser informado no body').notEmpty().withMessage('campo documento do cliente não pode ficar vazio'),
		body('cliente.endereco').isString().withMessage('campo endereco do cliente deve ser informado no body').notEmpty().withMessage('campo endereco do cliente não pode ficar vazio'),
		body('cliente.complemento').isString().withMessage('campo complemento do cliente deve ser informado no body').notEmpty().withMessage('campo complemento do cliente não pode ficar vazio'),
		body('cliente.cidade').isString().withMessage('campo cidade do cliente deve ser informado no body').notEmpty().withMessage('campo cidade do cliente não pode ficar vazio'),
		body('cliente.pais').isString().withMessage('campo pais do cliente deve ser informado no body').notEmpty().withMessage('campo pais do cliente não pode ficar vazio'),
		body('cliente.estado').isString().withMessage('campo estado do cliente deve ser informado no body'),
		body('cliente.telefone').isString().withMessage('campo telefone do cliente deve ser informado no body').notEmpty().withMessage('campo telefone do cliente não pode ficar vazio'),
		body('cliente.cep').isString().withMessage('campo cep do cliente deve ser informado no body').notEmpty().withMessage('campo cep do cliente não pode ficar vazio'),
		body('itens').isArray().withMessage('campo array de itens deve ser informado no body ').isArray({min: 1}).withMessage('idLivro e quantidade não informados no array'),
	   	check("itens.*.idLivro").not().isEmpty().withMessage('idlivro deve ser informado no array de itens'),
		check("itens.*.quantidade").not().isEmpty().withMessage('quantidade deve ser informado no array de itens').isInt().withMessage('quantidade inválida'),		
		
	];
};



export default postPedidoValidation

