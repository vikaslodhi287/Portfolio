import { Router } from 'express';
import { getSettings, updateSettings } from '../controllers/setting/setting.controller.js';
import { protect } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { settingRules } from '../validators/setting.validator.js';

const router = Router();

router.route('/')
  .get(getSettings)
  .put(protect, validate(settingRules), updateSettings);

export default router;