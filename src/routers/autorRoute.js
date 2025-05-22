import express from 'express';
import AutorController from '../controllers/autorController.js';
import { postAutorValidation } from '../middlewares/autorValidation.js';
import validate from '../middlewares/handleValidation.js';

const autorRoute = express.Router();

autorRoute.post('/', postAutorValidation(), validate, AutorController.postAutor);
autorRoute.get('/', postAutorValidation(), validate, AutorController.getAutores);


export default autorRoute;