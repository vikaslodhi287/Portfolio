import express from 'express';
const router = express.Router();

// Changed to match the standard getCertificates naming convention
import {
  getCertificates, 
  createCertificate,
  updateCertificate,
  deleteCertificate
} from '../controllers/certificate/certificate.controller.js';

import { protect } from '../middlewares/auth.js';
import upload from '../middlewares/upload.js';

// Base endpoints path mappings
router.route('/')
  .get(getCertificates) // Public retrieval channel
  .post(protect, upload.single('image'), createCertificate);

// Dynamic resource identifier endpoints path mappings
router.route('/:id')
  .put(protect, upload.single('image'), updateCertificate)
  .delete(protect, deleteCertificate);

export default router;