import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/profile/profile.controller.js';
import { protect } from '../middlewares/auth.js';
import upload from '../middlewares/upload.js';
import { validate } from '../middlewares/validate.js';
import { profileRules } from '../validators/profile.validator.js';

const router = Router();

// Setup Multi-field Form-Data Stream Parser
const profileUploadPayloadParser = upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'resume', maxCount: 1 }
]);

// GET: Public, POST: Private & Securely Validated Post-Parsing
router
  .route("/")
  .get(getProfile)
  .put(
    protect,
    profileUploadPayloadParser,
    validate(profileRules),
    updateProfile
  );
export default router;