import Experience from '../../models/Experience.js';
import { APIError } from '../../middlewares/errorHandler.js';

/**
 * Fetch all employment logs sorted chronologically from most recent down
 * ROUTE: GET /api/experience
 * ACCESS: Public
 */
export const getAllExperiences = async (req, res, next) => {
  try {
    // Optimized via index template mapping ({ startDate: -1 })
    const experiences = await Experience.find().sort({ startDate: -1 });
    
    res.status(200).json({
      success: true,
      count: experiences.length,
      data: experiences
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create a new employment history card entry
 * ROUTE: POST /api/experience
 * ACCESS: Private (Admin Only)
 */
export const createExperience = async (req, res, next) => {
  try {
    const experience = await Experience.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Professional employment timeline log added successfully.',
      data: experience
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Modify parameter descriptions or dates for an employment entry
 * ROUTE: PUT /api/experience/:id
 * ACCESS: Private (Admin Only)
 */
export const updateExperience = async (req, res, next) => {
  try {
    let experience = await Experience.findById(req.params.id);
    if (!experience) {
      return next(new APIError(`Employment profile log entry not found matching ID [${req.params.id}]`, 404));
    }

    experience = await Experience.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      message: 'Professional employment log updated successfully.',
      data: experience
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Remove an employment item from your professional timeline
 * ROUTE: DELETE /api/experience/:id
 * ACCESS: Private (Admin Only)
 */
export const deleteExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return next(new APIError(`Employment reference execution target not found with ID [${req.params.id}]`, 404));
    }

    await experience.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Professional employment history log deleted successfully.'
    });
  } catch (error) {
    next(error);
  }
};