import express from 'express';
import autorRoute from './autorRoute.js';
import categoriaRoute from './categoriaRoute.js';
const router = express.Router();

router.use('/autor', autorRoute);
router.use('/categoria',categoriaRoute);

export default router;