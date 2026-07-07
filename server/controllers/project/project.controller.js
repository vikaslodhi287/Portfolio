import Project from '../../models/Project.js';
import { APIError } from '../../middlewares/errorHandler.js';
import cloudinary from '../../config/cloudinary.js';
import fs from 'fs';

/**
 * Fetch all cataloged projects with optimized priority index ordering sorting rules
 * ROUTE: GET /api/projects
 * ACCESS: Public
 */
export const getAllProjects = async (req, res, next) => {
  try {
    // Leverages the custom schema compound index compound properties ({ featured: -1, sortOrder: 1, createdAt: -1 })
    const projects = await Project.find().sort({ featured: -1, sortOrder: 1, createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Fetch a single detailed project entry by its Object ID
 * ROUTE: GET /api/projects/:id
 * ACCESS: Public
 */
export const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return next(new APIError(`Project not found with the target identity ID of [${req.params.id}]`, 404));
    }

    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create a new project entry with a cover thumbnail and optional carousel screenshots
 * ROUTE: POST /api/projects
 * ACCESS: Private (Admin Only)
 */
export const createProject = async (req, res, next) => {
  try {
    const projectData = { ...req.body };

    // 1. Verify that the required primary showcase thumbnail image asset is included
    if (!req.files || !req.files.thumbnail) {
      return next(new APIError('A primary thumbnail image asset file is required to create a project showcase.', 400));
    }

    // 2. Upload the cover thumbnail file to the cloud
    const thumbnailFile = req.files.thumbnail[0];
    const uploadedThumbnail = await cloudinary.uploader.upload(thumbnailFile.path, {
      folder: 'portfolio/projects/thumbnails'
    });
    projectData.thumbnail = uploadedThumbnail.secure_url;
    projectData.thumbnailPublicId = uploadedThumbnail.public_id;
    fs.unlinkSync(thumbnailFile.path);

    // 3. Process optional carousel screenshot asset files if provided
    projectData.images = [];
    if (req.files.images && req.files.images.length > 0) {
      for (const file of req.files.images) {
        const uploadedImg = await cloudinary.uploader.upload(file.path, {
          folder: 'portfolio/projects/carousel'
        });
        projectData.images.push({
          url: uploadedImg.secure_url,
          publicId: uploadedImg.public_id
        });
        fs.unlinkSync(file.path);
      }
    }

    // 4. Save to the database
    const project = await Project.create(projectData);

    res.status(201).json({
      success: true,
      message: 'Project workspace created successfully.',
      data: project
    });
  } catch (error) {
    // Make sure local storage temp files get swept clean on an operation catch error block
    if (req.files) {
      if (req.files.thumbnail && fs.existsSync(req.files.thumbnail[0].path)) fs.unlinkSync(req.files.thumbnail[0].path);
      if (req.files.images) {
        req.files.images.forEach(file => {
          if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
        });
      }
    }
    next(error);
  }
};

/**
 * Update an existing project entry and swap out tracking assets on Cloudinary
 * ROUTE: PUT /api/projects/:id
 * ACCESS: Private (Admin Only)
 */
export const updateProject = async (req, res, next) => {
  try {
    let project = await Project.findById(req.params.id);
    if (!project) {
      return next(new APIError(`Project resource context not found with ID [${req.params.id}]`, 404));
    }

    const updateData = { ...req.body };

    // 1. Handle primary cover thumbnail file switch updates
    if (req.files && req.files.thumbnail) {
      const thumbnailFile = req.files.thumbnail[0];
      
      // Clean up previous image asset resource from Cloudinary
      await cloudinary.uploader.destroy(project.thumbnailPublicId);

      const uploadedThumbnail = await cloudinary.uploader.upload(thumbnailFile.path, {
        folder: 'portfolio/projects/thumbnails'
      });
      updateData.thumbnail = uploadedThumbnail.secure_url;
      updateData.thumbnailPublicId = uploadedThumbnail.public_id;
      fs.unlinkSync(thumbnailFile.path);
    }

    // 2. Handle additional gallery screenshot asset files if provided
    if (req.files && req.files.images && req.files.images.length > 0) {
      // Clean up any historical screenshot files tracked inside this project context from Cloudinary
      if (project.images && project.images.length > 0) {
        for (const img of project.images) {
          await cloudinary.uploader.destroy(img.publicId);
        }
      }

      updateData.images = [];
      for (const file of req.files.images) {
        const uploadedImg = await cloudinary.uploader.upload(file.path, {
          folder: 'portfolio/projects/carousel'
        });
        updateData.images.push({
          url: uploadedImg.secure_url,
          publicId: uploadedImg.public_id
        });
        fs.unlinkSync(file.path);
      }
    }

    // 3. Save the changes
    project = await Project.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      message: 'Project configurations updated successfully.',
      data: project
    });
  } catch (error) {
    if (req.files) {
      if (req.files.thumbnail && fs.existsSync(req.files.thumbnail[0].path)) fs.unlinkSync(req.files.thumbnail[0].path);
      if (req.files.images) {
        req.files.images.forEach(file => {
          if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
        });
      }
    }
    next(error);
  }
};

/**
 * Remove a project entry from the database and wipe its uploaded assets from Cloudinary
 * ROUTE: DELETE /api/projects/:id
 * ACCESS: Private (Admin Only)
 */
export const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return next(new APIError(`Project execution target not found with ID [${req.params.id}]`, 404));
    }

    // 1. Wipe out cover thumbnail file tracking blocks on Cloudinary
    await cloudinary.uploader.destroy(project.thumbnailPublicId);

    // 2. Loop through and wipe out all gallery screenshots from Cloudinary
    if (project.images && project.images.length > 0) {
      for (const img of project.images) {
        await cloudinary.uploader.destroy(img.publicId);
      }
    }

    // 3. Remove entry document from the database
    await project.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Project grid document and related Cloud assets dropped successfully.'
    });
  } catch (error) {
    next(error);
  }
};