import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

// /api/v1/user
router.post("/", UserController.createCurrentUser);

export default router;