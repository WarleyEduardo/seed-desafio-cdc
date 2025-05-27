import express from 'express';
import PedidoController from '../controllers/pedidoController.js';
import { postPedidoValidation } from '../middlewares/pedidoValidation.js';
import validate from '../middlewares/handleValidation.js';

const pedidoRoute = express.Router();

pedidoRoute.post('/pedido', postPedidoValidation(), validate, PedidoController.postPedido);


export default pedidoRoute;