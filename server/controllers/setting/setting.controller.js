import Setting from '../../models/Setting.js';
import { APIError } from '../../middlewares/errorHandler.js';

/**
 * Fetch the active application settings document configuration mapping profile
 * ROUTE: GET /api/settings
 * ACCESS: Public
 */
export const getSettings = async (req, res, next) => {
  try {
    let setting = await Setting.findOne();
    
    // Seed an initial system default template automatically if none exists in database
    if (!setting) {
      setting = await Setting.create({
        siteName: 'Developer Portfolio Dashboard Platform',
        seo: {
          metaTitle: 'Professional Developer Portfolio Framework Showcase',
          metaDescription: 'Production engineering showcase displaying specialized full-stack architectures, systems, and modular frameworks.',
          keywords: ['Full-Stack Developer', 'Software Architect', 'Node.js', 'Portfolio Platform']
        },
        maintenanceMode: false,
        enableBlog: true,
        enableContactForm: true
      });
    }

    res.status(200).json({
      success: true,
      data: setting
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Modify global layout parameters or change runtime system configuration modifiers
 * ROUTE: PUT /api/settings
 * ACCESS: Private (Admin Only)
 */
export const updateSettings = async (req, res, next) => {
  try {
    let setting = await Setting.findOne();

    if (!setting) {
      setting = await Setting.create(req.body);
    } else {
      setting = await Setting.findByIdAndUpdate(setting._id, req.body, {
        new: true,
        runValidators: true
      });
    }

    res.status(200).json({
      success: true,
      message: 'Global architecture core configuration properties adjusted successfully.',
      data: setting
    });
  } catch (error) {
    next(error);
  }
};