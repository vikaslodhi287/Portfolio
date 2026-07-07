import { Router } from 'express';
import { 
  getAllSkills, 
  createSkill, 
  updateSkill, 
  deleteSkill 
} from '../controllers/skill/skill.controller.js';
import { protect } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { skillRules } from '../validators/skill.validator.js';

const router = Router();

router.route('/')
  .get(getAllSkills)
  .post(protect, validate(skillRules), createSkill);

router.route('/:id')
  .put(protect, validate(skillRules), updateSkill)
  .delete(protect, deleteSkill);

export default router;