import express from 'express';
import { updateDevice } from '../controllers/devicesController.js';

const router = express.Router();

router.put('/', updateDevice);

export default router;