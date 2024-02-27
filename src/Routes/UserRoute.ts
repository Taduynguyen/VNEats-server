import express from 'express';
import UserController from '../controllers/UserController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateUserRequest } from '../middleware/validation';

const router = express.Router();

// /api/v1/user
router.get("/", jwtCheck, jwtParse, UserController.getCurrentUser)
router.post("/", jwtCheck, UserController.createCurrentUser);
router.put("/", jwtCheck, jwtParse, validateUserRequest, UserController.updateCurrentUser);

export default router;