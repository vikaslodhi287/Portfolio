import { body } from 'express-validator';

export const skillRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Skill name parameter is required'),
  body('category')
    .trim()
    .notEmpty()
    .withMessage('Skill group category classification is required')
    .toLowerCase()
    .isIn(['frontend', 'backend', 'devops', 'database', 'mobile', 'ui-ux', 'other'])
    .withMessage('Category must be frontend, backend, devops, database, mobile, ui-ux, or other'),
  body('proficiency')
    .notEmpty()
    .withMessage('Proficiency value metric is required')
    .isInt({ min: 0, max: 100 })
    .withMessage('Proficiency metrics must be an integer score value between 0 and 100'),
  body('icon')
    .optional({ checkFalsy: true })
    .trim()
    .isString()
    .withMessage('Icon handle vector key descriptor must be a string')
];