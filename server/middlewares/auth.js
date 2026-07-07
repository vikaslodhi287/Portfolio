import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import { APIError } from './errorHandler.js';

// Protect routes against unauthenticated requests
export const protect = async (req, res, next) => {
  try {
    let token;

    // Read token from authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    // Verify token exists
    if (!token) {
      return next(new APIError('Not authorized to access this route resource. Token missing.', 401));
    }

    // Cryptographically decode token signature
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the target administrator profile from the database matching the token payload data ID
    const currentAdmin = await Admin.findById(decoded.id);
    if (!currentAdmin) {
      return next(new APIError('The admin account associated with this login token no longer exists.', 401));
    }

    // Grant access and assign profile context data to processing thread context request references
    req.admin = currentAdmin;
    next();
  } catch (error) {
    next(error);
  }
};

// Restrict access conditionally to specific role permissions rules
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.admin || !roles.includes(req.admin.role)) {
      return next(
        new APIError(
          `User role [${req.admin?.role || 'none'}] is not permitted permissions to execute this task action.`,
          403
        )
      );
    }
    next();
  };
};