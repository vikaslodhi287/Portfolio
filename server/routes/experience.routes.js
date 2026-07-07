import { Router } from 'express';
import { 
  getAllExperiences, 
  createExperience, 
  updateExperience, 
  deleteExperience 
} from '../controllers/experience/experience.controller.js';
import { protect } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { experienceRules } from '../validators/experience.validator.js';

const router = Router();

router.route('/')
  .get(getAllExperiences)
  .post(protect, validate(experienceRules), createExperience);

router.route('/:id')
  .put(protect, validate(experienceRules), updateExperience)
  .delete(protect, deleteExperience);

export default router;