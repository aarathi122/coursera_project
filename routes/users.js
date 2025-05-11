import express from 'express';
import { loginUser, registerUser } from '../controllers/usersController.js';

const router = express.Router();

router.post('/register', registerUser); // Task 6
router.post('/login', loginUser); // Task 7

export default router;
