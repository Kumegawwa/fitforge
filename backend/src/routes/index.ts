import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { WorkoutController } from '../controllers/WorkoutController';
import { RunController } from '../controllers/RunController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Rotas Públicas
router.post('/register', UserController.register);
router.post('/login', UserController.login);

// Rotas Protegidas (Exigem o Token JWT que você implementou)
router.post('/workouts', authMiddleware, WorkoutController.create);
router.get('/workouts/:userId', authMiddleware, WorkoutController.listByUser);

router.post('/runs', authMiddleware, RunController.create);
router.get('/runs/:userId', authMiddleware, RunController.listByUser);

export default router;