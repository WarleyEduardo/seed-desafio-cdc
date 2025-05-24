import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';
import { postUsuarioValidation } from '../middlewares/usuarioValidation.js';
import validate from '../middlewares/handleValidation.js';

const usuarioRoute = express.Router();

usuarioRoute.post('/usuario', postUsuarioValidation(), validate, UsuarioController.postUsuario);

export default usuarioRoute;