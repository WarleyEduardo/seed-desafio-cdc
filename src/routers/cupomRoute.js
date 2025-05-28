import express from 'express';
import CupomController from '../controllers/cupomController.js';
import { postCupomValidation } from '../middlewares/cupomValidation.js';
import validate from '../middlewares/handleValidation.js';

const cupomRoute = express.Router();

cupomRoute.post('/cupom', postCupomValidation(), validate, CupomController.postCupom);
cupomRoute.get('/cupons', CupomController.getCupons);

export default cupomRoute;