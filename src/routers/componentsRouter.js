import express from 'express';
import { getComponents } from '../controllers/componentsController.js';

const router = express.Router();

router.get('/', getComponents);

export default router;