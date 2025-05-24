import express from 'express';
import EstadoController from '../controllers/estadoController.js';
import { postEstadoValidation } from '../middlewares/estadoValidation.js';
import validate from '../middlewares/handleValidation.js';

const estadoRoute = express.Router();

estadoRoute.post('/estado', postEstadoValidation(), validate, EstadoController.postEstado);

export default estadoRoute;