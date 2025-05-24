import express from 'express';
import CategoriaController from '../controllers/categoriaController.js';
import { postCategoriaValidation } from '../middlewares/categoriaValidation.js';
import validate from '../middlewares/handleValidation.js';

const categoriaRoute = express.Router();

categoriaRoute.post('/categoria', postCategoriaValidation(), validate, CategoriaController.postCategoria);

export default categoriaRoute;