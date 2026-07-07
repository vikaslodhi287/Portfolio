import { validationResult } from 'express-validator';
import { APIError } from './errorHandler.js';

/**
 * Universal validation middleware that checks express-validator rules
 */
export const validate = (validations) => {
  return async (req, res, next) => {
    // Run all validation rules sequentially
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    // Format errors cleanly for the client
    const extractedErrors = errors.array().map(err => `${err.path}: ${err.msg}`).join('. ');
    
    return next(new APIError(`Validation Failed: ${extractedErrors}`, 400));
  };
};