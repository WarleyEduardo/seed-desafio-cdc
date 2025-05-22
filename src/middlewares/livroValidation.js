import { body } from 'express-validator';

export const postLivroValidation = () => 
{
	return [
		body('titulo').isString().withMessage('campo titulo deve ser informado no body').notEmpty().withMessage('campo titulo não pode ficar vazio'),
		body('resumo').isString().withMessage('campo resumo  deve ser informado no body').notEmpty().withMessage('campo resumo não pode ficar vazio').isLength({max:500}).withMessage('campo resumo deve conter no máximo 500 caracteres'),
		body('paginas').isInt().withMessage('campo paginas deve ser informado no body').isInt({min:100}).withMessage('campo pagina deve ter no mínino 100'),
		body('preco').isCurrency().withMessage('campo preco deve ser informado no body').isFloat({min:20}).withMessage('campo preço deve ter no mínino 20'),
		body('isbn').isString().withMessage('campo isbn deve ser informado no body').notEmpty().withMessage('campo isbn não pode ficar vazio'),
		body('categoria').isString().withMessage('campo categoria deve ser informado no body').notEmpty().withMessage('campo categoria não pode ficar vazio'),
		body('autor').isString().withMessage('campo autor deve ser informado no body').notEmpty().withMessage('campo autor não pode ficar vazio'),
		body('datapublicacao').optional().isDate({ format: 'DD/MM/YYYY' }).withMessage('datapulicacao deve estar no formato : DD/MM/YYYY')
	];
};

export default postLivroValidation

