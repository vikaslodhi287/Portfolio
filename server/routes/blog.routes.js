import express from 'express';
const router = express.Router();

import {
  getAllBlogs,      // Synchronized naming alignment export matching
  getBlogBySlug,    // Restored slug reader parameter mapping function
  createBlog,
  updateBlog,
  deleteBlog
} from '../controllers/blog/blog.controller.js';

import { protect } from '../middlewares/auth.js';
import upload from '../middlewares/upload.js';

// Base collection endpoint mappings
router.route('/')
  .get(getAllBlogs)
  .post(protect, upload.single('coverImage'), createBlog);

// Unique public lookup channel mapped via the post's text slug identifier
router.route('/slug/:slug')
  .get(getBlogBySlug);

// Targeted resource data manipulation mappings
router.route('/:id')
  .put(protect, upload.single('coverImage'), updateBlog)
  .delete(protect, deleteBlog);

export default router;