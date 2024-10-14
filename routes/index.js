import { Router } from 'express';
import { getStats, getStatus } from '../controllers/AppController';
import addUser from '../controllers/UsersController';

const router = Router();

router.get('/status', getStatus);
router.get('/stats', getStats);
router.post('/users', addUser);

export default router;
