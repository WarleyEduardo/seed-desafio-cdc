import express from 'express';
import AutorController from '../controllers/autorController.js';
import { postAutorValidation } from '../middlewares/autorValidation.js';
import validate from '../middlewares/handleValidation.js';

const autorRoute = express.Router();

autorRoute.post('/autor', postAutorValidation(), validate, AutorController.postAutor);
autorRoute.get('/autores', postAutorValidation(), validate, AutorController.getAutores);


export default autorRoute;