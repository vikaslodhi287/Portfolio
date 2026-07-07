import { body } from 'express-validator';

export const certificateRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Certification name parameter is required'),
  body('issuingOrganization')
    .trim()
    .notEmpty()
    .withMessage('Issuing organization designation is required'),
  body('issueDate')
    .notEmpty()
    .withMessage('Issue date parameter is required')
    .isISO8601()
    .withMessage('Issue date must use a valid calendar date standard format (YYYY-MM-DD)'),
  body('expirationDate')
    .optional({ checkFalsy: true })
    .isISO8601()
    .withMessage('Expiration date must use a valid calendar date standard format (YYYY-MM-DD)')
    .custom((value, { req }) => {
      if (value && req.body.issueDate && new Date(value) < new Date(req.body.issueDate)) {
        throw new Error('Expiration date must occur chronologically after the certification issue date');
      }
      return true;
    }),
  body('credentialId')
    .optional({ checkFalsy: true })
    .trim()
    .isString()
    .withMessage('Credential ID must be a valid alphanumeric string descriptor'),
  body('credentialUrl')
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage('Credential verification address parameter must link to a valid URL resource endpoint')
];