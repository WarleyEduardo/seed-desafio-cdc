import express from 'express';
import autorRoute from './autorRoute.js';
import categoriaRoute from './categoriaRoute.js';
import livroRoute from './livroRoute.js';
import paisRoute from './paisRoute.js';
import estadoRoute from './estadoRoute.js';

const router = express.Router();

router.use('/autor', autorRoute);
router.use('/categoria',categoriaRoute);
router.use('/',livroRoute);
router.use('/pais',paisRoute);
router.use('/estado',estadoRoute)

export default router;