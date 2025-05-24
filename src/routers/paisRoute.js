import express from 'express';
import PaisController from '../controllers/paisController.js';
import { postPaisValidation } from '../middlewares/paisValidation.js';
import validate from '../middlewares/handleValidation.js';

const paisRoute = express.Router();

paisRoute.post('/pais', postPaisValidation(), validate, PaisController.postPais);

export default paisRoute;