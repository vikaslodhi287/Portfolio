import { body } from 'express-validator';

export const profileRules = [
  body('fullName')
    .trim()
    .notEmpty()
    .withMessage('Full name string property is required'),
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Professional sub-headline profile working title is required'),
  body('bio')
    .trim()
    .notEmpty()
    .withMessage('Biographical profile introduction summary text is required'),
  body('socialLinks.github')
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage('GitHub account address must be a valid URL link resource')
    .matches(/^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/)
    .withMessage('GitHub URL does not match a valid profile handle destination structure'),
  body('socialLinks.linkedin')
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage('LinkedIn profile address must be a valid URL link resource')
    .matches(/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/)
    .withMessage('LinkedIn URL does not match a valid profile handle destination structure'),
  body('socialLinks.twitter')
    .optional({ checkFalsy: true })
    .trim()
    .isString()
    .withMessage('Twitter link metadata handle must be a string')
];