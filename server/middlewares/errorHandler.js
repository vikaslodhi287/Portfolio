// Custom error class to capture specific operational status codes
export class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Global Express Error Interceptor Middleware
export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  let error = { ...err };
  error.message = err.message;

  // Log full error stack internally during development
  if (process.env.NODE_ENV === 'development') {
    console.error(' [Error Handling Middleware]:', err);
  }

  // Handle Mongoose Bad ObjectId Cast Errors (e.g. /api/projects/123invalid)
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new APIError(message, 404);
  }

  // Handle Mongoose Duplicate Key Constraints (e.g. non-unique usernames/emails)
  if (err.code === 11000) {
    const value = Object.keys(err.keyValue || {}).join(', ');
    const message = `Duplicate field value entered for [${value}]. Please use another unique value.`;
    error = new APIError(message, 400);
  }

  // Handle Mongoose Schema Validation Failures
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(el => el.message).join('. ');
    error = new APIError(message, 400);
  }

  // Handle Invalid JSON Web Tokens
  if (err.name === 'JsonWebTokenError') {
    const message = 'Invalid security authentication token. Please log in again.';
    error = new APIError(message, 401);
  }

  // Handle Expired JSON Web Tokens
  if (err.name === 'TokenExpiredError') {
    const message = 'Your login session token has expired. Please log in again.';
    error = new APIError(message, 401);
  }

  // Final Unified Response Processing
  res.status(error.statusCode).json({
    success: false,
    status: error.status,
    message: error.message || 'A critical core exception occurred internally.',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};