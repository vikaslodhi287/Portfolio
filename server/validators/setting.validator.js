import { body } from 'express-validator';

export const settingRules = [
  body('siteName')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Site name text descriptor cannot be submitted empty'),
  body('seo.metaTitle')
    .optional()
    .trim()
    .isLength({ max: 70 })
    .withMessage('SEO Meta Title target parameters should not exceed 70 characters for search optimization layout standards'),
  body('seo.metaDescription')
    .optional()
    .trim()
    .isLength({ max: 160 })
    .withMessage('SEO Meta Description target boundaries should stay under 160 characters for search optimization visibility layouts'),
  body('seo.keywords')
    .optional()
    .isArray()
    .withMessage('SEO Meta keywords must be submitted formatted inside a clean array list of string references'),
  body('seo.keywords.*')
    .trim()
    .isString()
    .withMessage('Each meta keyword reference must map to a clean text string element descriptor'),
  body('maintenanceMode')
    .optional()
    .isBoolean()
    .withMessage('Maintenance mode configuration modifier flag requires a valid true/false boolean value'),
  body('enableBlog')
    .optional()
    .isBoolean()
    .withMessage('Enable Blog configuration flag requires a valid true/false boolean value'),
  body('enableContactForm')
    .optional()
    .isBoolean()
    .withMessage('Enable Contact Form configuration flag requires a valid true/false boolean value')
];