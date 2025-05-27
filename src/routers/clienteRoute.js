import express from 'express';
import ClienteController from '../controllers/clienteController.js';
import { postClienteValidation } from '../middlewares/clienteValidation.js';
import validate from '../middlewares/handleValidation.js';

const clienteRoute = express.Router();

clienteRoute.post('/cliente', postClienteValidation(), validate, ClienteController.postCliente);

export default clienteRoute;