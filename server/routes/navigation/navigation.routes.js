import express from 'express';
const router = express.Router();

import { 
  getNavigationItems, 
  createNavigationItem, 
  updateNavigationItem, 
  deleteNavigationItem 
} from '../../controllers/navigation/navigation.controller.js';

// Using exact name verified by your folder layout diagram
import { protect } from '../../middlewares/auth.js'; 

router.route('/')
  .get(getNavigationItems)
  .post(protect, createNavigationItem);

router.route('/:id')
  .put(protect, updateNavigationItem)
  .delete(protect, deleteNavigationItem);

export default router;