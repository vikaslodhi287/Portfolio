const { body, validationResult } = require('express-validator');

const validateNavigationPayload = [
  body('title')
    .notEmpty().withMessage('Navigation title field cannot be blank.')
    .isString().withMessage('Title must be parsed as a string sequence.')
    .trim(),
  body('slug')
    .notEmpty().withMessage('Slug property key is required.')
    .matches(/^[a-z0-9-_]+$/).withMessage('Slug must contain lowercase characters, numbers, dashes, or underscores only.'),
  body('path')
    .notEmpty().withMessage('Route routing target destination link path descriptor cannot be empty.'),
  body('displayOrder')
    .optional()
    .isInt({ min: 0 }).withMessage('Display order rank matrix must be a non-negative indexing integer.'),
  body('isVisible')
    .optional()
    .isBoolean().withMessage('Visibility toggle parameter value must evaluate to a strict boolean.'),
  body('openInNewTab')
    .optional()
    .isBoolean().withMessage('New tab target attribute flag option must resolve as a boolean type.'),
  body('icon')
    .optional()
    .isString().trim(),
  (req, res, next) => {
    const errorMatrix = validationResult(req);
    if (!errorMatrix.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Data schema execution pipeline failed validation check blocks.',
        errors: errorMatrix.array()
      });
    }
    next();
  }
];

module.exports = { validateNavigationPayload };