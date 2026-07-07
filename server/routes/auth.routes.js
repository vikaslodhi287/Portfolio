import { Router } from 'express';
import { login, getCurrentUser, logout } from '../controllers/admin/auth.controller.js';
import { protect } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { loginRules } from '../validators/auth.validator.js';

const router = Router();

// Mount endpoints with their validation chains and controllers
router.post('/login', validate(loginRules), login);
router.post('/logout', protect, logout);
router.get('/me', protect, getCurrentUser);

export default router;