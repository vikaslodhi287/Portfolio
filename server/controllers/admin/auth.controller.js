import jwt from 'jsonwebtoken';
import Admin from '../../models/Admin.js';
import { APIError } from '../../middlewares/errorHandler.js';

/**
 * Helper utility to cryptographically construct JWT session strings
 * @param {String} id - Administrative user record object identifier
 */
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

/**
 * Handle administrative system login credentials matching authentication
 * ROUTE: POST /api/auth/login
 * ACCESS: Public
 */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Fetch account from database, explicitly including the select-shielded password field
    const admin = await Admin.findOne({ email }).select('+password');
    if (!admin) {
      return next(new APIError('Invalid administrative account login credentials matching email.', 401));
    }

    // Match typed string against hashed database record values
    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return next(new APIError('Invalid administrative account login credentials matching password.', 401));
    }

    // Generate cryptographic validation token
    const token = signToken(admin._id);

    // Update login timestamp counter record profile parameters
    admin.lastLogin = new Date();
    await admin.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Fetch authentication context payload profiling data for active sessions
 * ROUTE: GET /api/auth/me
 * ACCESS: Private (Requires protect middleware verification)
 */
export const getCurrentUser = async (req, res, next) => {
  try {
    // req.admin context payload is automatically supplied by the protect gatekeeper middleware layer
    const admin = await Admin.findById(req.admin.id);
    
    if (!admin) {
      return next(new APIError('Active administrator session verification mismatch context.', 404));
    }

    res.status(200).json({
      success: true,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Handle session token invalidation routines (Client interface utility wrapper)
 * ROUTE: POST /api/auth/logout
 * ACCESS: Private
 */
export const logout = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Administrative profile logout workflow cleared successfully.'
    });
  } catch (error) {
    next(error);
  }
};