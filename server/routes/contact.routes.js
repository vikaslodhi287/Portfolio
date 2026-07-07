import { Router } from 'express';
import { 
  submitMessage, 
  getAllMessages, 
  toggleReadStatus, 
  deleteMessage 
} from '../controllers/contact/contact.controller.js';
import { protect } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { contactRules } from '../validators/contact.validator.js';

const router = Router();

// Public transmission gateway + Secure administrative fetching route endpoints
router.route('/')
  .post(validate(contactRules), submitMessage)
  .get(protect, getAllMessages);

router.route('/:id/read')
  .put(protect, toggleReadStatus);

router.route('/:id')
  .delete(protect, deleteMessage);

export default router;