import express from 'express';
import autorRoute from './autorRoute.js';
const router = express.Router();

router.use('/autor', autorRoute);

export default router;