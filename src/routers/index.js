import express from 'express';
import autorRoute from './autorRoute.js';
import categoriaRoute from './categoriaRoute.js';
import livroRoute from './livroRoute.js';
const router = express.Router();

router.use('/autor', autorRoute);
router.use('/categoria',categoriaRoute);
router.use('/livro',livroRoute);

export default router;