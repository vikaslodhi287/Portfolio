import { body } from 'express-validator';

export const blogRules = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Blog title is required')
    .isLength({ max: 150 })
    .withMessage('Title cannot exceed 150 characters'),
  body('content')
    .notEmpty()
    .withMessage('Blog content is required'),
  body('excerpt')
    .trim()
    .notEmpty()
    .withMessage('Short excerpt summary is required')
    .isLength({ max: 300 })
    .withMessage('Excerpt cannot exceed 300 characters'),
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be provided as an array of strings'),
  body('tags.*')
    .trim()
    .isString()
    .withMessage('Each individual tag must be a string'),
  body('status')
    .optional()
    .isIn(['draft', 'published'])
    .withMessage('Status must be either draft or published')
];