import express from 'express';
import UserController from '../controllers/UserController';
import { jwtCheck } from '../middleware/auth';

const router = express.Router();

// /api/v1/user
router.post("/", jwtCheck, UserController.createCurrentUser);

export default router;