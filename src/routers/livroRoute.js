import express from 'express';
import LivroController from '../controllers/livroController.js';
import { postLivroValidation } from '../middlewares/livroValidation.js';
import validate from '../middlewares/handleValidation.js';

const livroRoute = express.Router();

livroRoute.post('/', postLivroValidation(), validate, LivroController.postLivro);


export default livroRoute;