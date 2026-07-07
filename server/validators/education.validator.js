import { body } from 'express-validator';

export const educationRules = [
  body('institution')
    .trim()
    .notEmpty()
    .withMessage('Educational institution name is required'),
  body('degree')
    .trim()
    .notEmpty()
    .withMessage('Degree or qualification name is required'),
  body('fieldOfStudy')
    .trim()
    .notEmpty()
    .withMessage('Field of study or major is required'),
  body('startDate')
    .notEmpty()
    .withMessage('Start date parameter is required')
    .isISO8601()
    .withMessage('Start date must use a valid ISO date standard format (YYYY-MM-DD)'),
  body('endDate')
    .optional({ checkFalsy: true })
    .isISO8601()
    .withMessage('End date must use a valid ISO date standard format (YYYY-MM-DD)')
    .custom((value, { req }) => {
      if (value && req.body.startDate && new Date(value) < new Date(req.body.startDate)) {
        throw new Error('End date must occur chronologically after the start date');
      }
      return true;
    }),
  body('isCurrent')
    .optional()
    .isBoolean()
    .withMessage('isCurrent flag parameter must be a boolean value'),
  body('grade')
    .optional({ checkFalsy: true })
    .trim()
    .isString()
    .withMessage('Grade metric must be a valid text string'),
  body('description')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Description summary text cannot exceed 1000 characters')
];