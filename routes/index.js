import { Router } from 'express';
import { getStats, getStatus } from '../controllers/AppController';
import addUser from '../controllers/UsersController';
import {
  getConnect,
  getDisconnect,
  getMe,
} from '../controllers/AuthController';

const router = Router();

router.get('/status', getStatus);
router.get('/stats', getStats);
router.post('/users', addUser);
router.get('/connect', getConnect);
router.get('/disconnect', getDisconnect);
router.get('/users/me', getMe);

export default router;
