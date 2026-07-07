import Profile from '../../models/Profile.js';
import { APIError } from '../../middlewares/errorHandler.js';
import cloudinary from '../../config/cloudinary.js';
import fs from 'fs';

/**
 * Fetch the public biographical profile card dataset
 * ROUTE: GET /api/profile
 * ACCESS: Public
 */
export const getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return next(new APIError('Biographical developer profile record not found.', 404));
    }
    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Handle creation or modification edits for your portfolio biography dashboard
 * ROUTE: POST /api/profile
 * ACCESS: Private (Admin Only)
 */
export const updateProfile = async (req, res, next) => {
  try {
    let profile = await Profile.findOne();
    const updateData = { ...req.body };

    // Process Avatar image update stream if an image asset file is supplied
    if (req.files && req.files.avatar) {
      const avatarFile = req.files.avatar[0];
      
      // Clear previous asset resource from cloud storage if a record exists
      if (profile && profile.avatarPublicId) {
        await cloudinary.uploader.destroy(profile.avatarPublicId);
      }

      // Upload the new image asset stream to Cloudinary
      const uploadedAvatar = await cloudinary.uploader.upload(avatarFile.path, {
        folder: 'portfolio/profile',
        transformation: [{ width: 500, height: 500, crop: 'limit' }]
      });

      updateData.avatar = uploadedAvatar.secure_url;
      updateData.avatarPublicId = uploadedAvatar.public_id;

      // Clean up the local temp image stream file safely
      fs.unlinkSync(avatarFile.path);
    }

    // Process Resume document file update stream if a document asset file is supplied
    if (req.files && req.files.resume) {
      const resumeFile = req.files.resume[0];

      if (profile && profile.resumePublicId) {
        await cloudinary.uploader.destroy(profile.resumePublicId, { resource_type: 'raw' });
      }

      const uploadedResume = await cloudinary.uploader.upload(resumeFile.path, {
        folder: 'portfolio/resume',
        resource_type: 'raw'
      });

      updateData.resumeUrl = uploadedResume.secure_url;
      updateData.resumePublicId = uploadedResume.public_id;

      fs.unlinkSync(resumeFile.path);
    }

    // Perform the profile update or create a new entry if none exists
    if (profile) {
      profile = await Profile.findByIdAndUpdate(profile._id, updateData, {
        new: true,
        runValidators: true
      });
    } else {
      profile = await Profile.create(updateData);
    }

    res.status(200).json({
      success: true,
      message: 'Profile configuration updated successfully.',
      data: profile
    });
  } catch (error) {
    // Make sure local storage temp files get swept clean on an operation catch error block
    if (req.files) {
      if (req.files.avatar && fs.existsSync(req.files.avatar[0].path)) fs.unlinkSync(req.files.avatar[0].path);
      if (req.files.resume && fs.existsSync(req.files.resume[0].path)) fs.unlinkSync(req.files.resume[0].path);
    }
    next(error);
  }
};