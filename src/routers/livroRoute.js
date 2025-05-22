import express from 'express';
import LivroController from '../controllers/livroController.js';
import { postLivroValidation } from '../middlewares/livroValidation.js';
import validate from '../middlewares/handleValidation.js';

const livroRoute = express.Router();

livroRoute.post('/livro', postLivroValidation(), validate, LivroController.postLivro);
livroRoute.get('/livros', LivroController.getLivros);
livroRoute.get('/livros/:id', LivroController.getLivro);


export default livroRoute;