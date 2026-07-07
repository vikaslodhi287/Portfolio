import Skill from '../../models/Skill.js';
import { APIError } from '../../middlewares/errorHandler.js';

/**
 * Fetch all technological skills ordered by their classification group and proficiency
 * ROUTE: GET /api/skills
 * ACCESS: Public
 */
export const getAllSkills = async (req, res, next) => {
  try {
    // Leverages schema index optimization strategy ({ category: 1, proficiency: -1 })
    const skills = await Skill.find().sort({ category: 1, proficiency: -1 });
    
    res.status(200).json({
      success: true,
      count: skills.length,
      data: skills
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Register a new technological capability stack item 
 * ROUTE: POST /api/skills
 * ACCESS: Private (Admin Only)
 */
export const createSkill = async (req, res, next) => {
  try {
    const { name, category, proficiency, icon } = req.body;

    const skill = await Skill.create({
      name,
      category,
      proficiency,
      icon
    });

    res.status(201).json({
      success: true,
      message: 'Technical capability registered successfully.',
      data: skill
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update technical skill parameter values or proficiency metrics
 * ROUTE: PUT /api/skills/:id
 * ACCESS: Private (Admin Only)
 */
export const updateSkill = async (req, res, next) => {
  try {
    let skill = await Skill.findById(req.params.id);
    if (!skill) {
      return next(new APIError(`Technical skill entry not found matching reference ID [${req.params.id}]`, 404));
    }

    skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      message: 'Technical skill record modified successfully.',
      data: skill
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Remove a technological item from your profile stack
 * ROUTE: DELETE /api/skills/:id
 * ACCESS: Private (Admin Only)
 */
export const deleteSkill = async (req, res, next) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return next(new APIError(`Technical skill reference execution target not found with ID [${req.params.id}]`, 404));
    }

    await skill.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Technological stack skill parameter tracking dropped successfully.'
    });
  } catch (error) {
    next(error);
  }
};