import { body } from 'express-validator';

export const contactRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Sender name parameter is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Message subject parameter is required')
    .isLength({ max: 200 })
    .withMessage('Subject cannot exceed 200 characters'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message content text body is required')
    .isLength({ max: 5000 })
    .withMessage('Message content body cannot exceed 5000 characters')
];