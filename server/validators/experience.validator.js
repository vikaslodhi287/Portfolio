import { body } from 'express-validator';

export const experienceRules = [
  body('company')
    .trim()
    .notEmpty()
    .withMessage('Company name is required'),
  body('position')
    .trim()
    .notEmpty()
    .withMessage('Job position title is required'),
  body('location')
    .optional({ checkFalsy: true })
    .trim()
    .isString()
    .withMessage('Location must be a string'),
  body('startDate')
    .notEmpty()
    .withMessage('Start date is required')
    .isISO8601()
    .withMessage('Start date must use a valid ISO date standard format (YYYY-MM-DD)'),
  body('endDate')
    .optional({ checkFalsy: true })
    .isISO8601()
    .withMessage('End date must use a valid ISO date standard format (YYYY-MM-DD)')
    .custom((value, { req }) => {
      if (value && req.body.startDate && new Date(value) < new Date(req.body.startDate)) {
        throw new Error('End date must occur chronologically after the employment start date');
      }
      return true;
    }),
  body('isCurrent')
    .optional()
    .isBoolean()
    .withMessage('isCurrent flag parameter must be a boolean value'),
  body('description')
    .isArray({ min: 1 })
    .withMessage('Description must be provided as an array containing at least one responsibility item statement'),
  body('description.*')
    .trim()
    .notEmpty()
    .withMessage('Individual bullet responsibility items cannot be empty strings'),
  body('skillsUsed')
    .optional()
    .isArray()
    .withMessage('Skills used parameter must be provided as an array format list of string labels'),
  body('skillsUsed.*')
    .trim()
    .isString()
    .withMessage('Each skill reference element must be a string label descriptor')
];