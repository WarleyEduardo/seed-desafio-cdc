import express from 'express';
import autorRoute from './autorRoute.js';
import categoriaRoute from './categoriaRoute.js';
import livroRoute from './livroRoute.js';
import paisRoute from './paisRoute.js';
import estadoRoute from './estadoRoute.js';
import usuarioRoute from './usuarioRoute.js';

const router = express.Router();

router.use(autorRoute);
router.use(categoriaRoute);
router.use(livroRoute);
router.use(paisRoute);
router.use(estadoRoute);
router.use(usuarioRoute)

export default router;