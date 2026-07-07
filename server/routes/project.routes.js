import { Router } from 'express';
import { 
  getAllProjects, 
  getProjectById, 
  createProject, 
  updateProject, 
  deleteProject 
} from '../controllers/project/project.controller.js';
import { protect } from '../middlewares/auth.js';
import upload from '../middlewares/upload.js';
import { validate } from '../middlewares/validate.js';
import { projectRules } from '../validators/project.validator.js';

const router = Router();

// Configure field array tracking rules for Multer form streams
const projectUploadPayloadParser = upload.fields([
  { name: 'thumbnail', maxCount: 1 },
  { name: 'images', maxCount: 10 }
]);

router.route('/')
  .get(getAllProjects)
  .post(protect, projectUploadPayloadParser, validate(projectRules), createProject);

router.route('/:id')
  .get(getProjectById)
  .put(protect, projectUploadPayloadParser, validate(projectRules), updateProject)
  .delete(protect, deleteProject);

export default router;