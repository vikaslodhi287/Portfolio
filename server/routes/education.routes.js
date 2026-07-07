import { Router } from 'express';
import { 
  getAllEducations, 
  createEducation, 
  updateEducation, 
  deleteEducation 
} from '../controllers/education/education.controller.js';
import { protect } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { educationRules } from '../validators/education.validator.js';

const router = Router();

router.route('/')
  .get(getAllEducations)
  .post(protect, validate(educationRules), createEducation);

router.route('/:id')
  .put(protect, validate(educationRules), updateEducation)
  .delete(protect, deleteEducation);

export default router;