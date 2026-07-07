import { body } from 'express-validator';

export const projectRules = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Project title parameter is required'),
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Project description detail is required'),
  body('technologies')
    .isArray({ min: 1 })
    .withMessage('Technologies stack framework list must be provided as an array'),
  body('technologies.*')
    .trim()
    .notEmpty()
    .withMessage('Technology tag items cannot be empty strings'),
  body('githubUrl')
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage('GitHub URL provided is not a valid address'),
  body('liveUrl')
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage('Live project production URL provided is not a valid address'),
  body('featured')
    .optional()
    .isBoolean()
    .withMessage('Featured flag must be a boolean value'),
  body('sortOrder')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Sort order must be a positive integer index')
];