import Education from '../../models/Education.js';
import { APIError } from '../../middlewares/errorHandler.js';

/**
 * Fetch all academic records sorted from most recent down
 * ROUTE: GET /api/education
 * ACCESS: Public
 */
export const getAllEducations = async (req, res, next) => {
  try {
    const educations = await Education.find().sort({ startDate: -1 });
    
    res.status(200).json({
      success: true,
      count: educations.length,
      data: educations
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create a new academic qualification log entry
 * ROUTE: POST /api/education
 * ACCESS: Private (Admin Only)
 */
export const createEducation = async (req, res, next) => {
  try {
    const education = await Education.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Academic record added successfully.',
      data: education
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update parameters or grade data descriptors on an academic log
 * ROUTE: PUT /api/education/:id
 * ACCESS: Private (Admin Only)
 */
export const updateEducation = async (req, res, next) => {
  try {
    let education = await Education.findById(req.params.id);
    if (!education) {
      return next(new APIError(`Academic history entry not found matching ID [${req.params.id}]`, 404));
    }

    education = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      message: 'Academic entry updated successfully.',
      data: education
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Drop an educational record from your portfolio tracking grids
 * ROUTE: DELETE /api/education/:id
 * ACCESS: Private (Admin Only)
 */
export const deleteEducation = async (req, res, next) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) {
      return next(new APIError(`Academic reference execution target not found with ID [${req.params.id}]`, 404));
    }

    await education.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Academic grid tracking documentation dropped successfully.'
    });
  } catch (error) {
    next(error);
  }
};