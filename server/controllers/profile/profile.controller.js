import Profile from "../../models/Profile.js";
import { APIError } from "../../middlewares/errorHandler.js";
import cloudinary from "../../config/cloudinary.js";
import fs from "fs";

/**
 * ==========================================================
 * GET PROFILE
 * ROUTE: GET /api/profile
 * ACCESS: Public
 * ==========================================================
 */
export const getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne().lean();

    if (!profile) {
      return next(
        new APIError("Biographical developer profile record not found.", 404)
      );
    }

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * ==========================================================
 * UPDATE PROFILE
 * ROUTE: PUT /api/profile
 * ACCESS: Private (Admin)
 * ==========================================================
 */
export const updateProfile = async (req, res, next) => {
  try {
    
    let profile = await Profile.findOne();

    const updateData = {
  fullName: req.body.fullName,
  title: req.body.title,
  tagline: req.body.tagline,
  bio: req.body.bio,
  availability: req.body.availability,
  location: req.body.location,
  email: req.body.email,
  yearsOfExperience: req.body.yearsOfExperience,
  projectsCompleted: req.body.projectsCompleted,
  technologiesKnown: req.body.technologiesKnown,
};

    /* =====================================================
       SOCIAL LINKS
    ===================================================== */

    updateData.socialLinks = {
  github:
    req.body["socialLinks.github"] ??
    profile?.socialLinks?.github ??
    "",

  linkedin:
    req.body["socialLinks.linkedin"] ??
    profile?.socialLinks?.linkedin ??
    "",

  leetcode:
    req.body["socialLinks.leetcode"] ??
    profile?.socialLinks?.leetcode ??
    "",

  twitter:
    req.body["socialLinks.twitter"] ??
    profile?.socialLinks?.twitter ??
    "",

  portfolio:
    req.body["socialLinks.portfolio"] ??
    profile?.socialLinks?.portfolio ??
    "",
};

    /* =====================================================
       TECH STACK
    ===================================================== */

    if (req.body.techStack) {
      try {
        updateData.techStack = JSON.parse(req.body.techStack);
      } catch {
        updateData.techStack = profile?.techStack || [];
      }
    }

    /* =====================================================
       CTA
    ===================================================== */

    if (req.body.cta) {
      try {
        updateData.cta = JSON.parse(req.body.cta);
      } catch {
        updateData.cta = profile?.cta || {};
      }
    }

    /* =====================================================
       AVATAR
    ===================================================== */

    if (req.files?.avatar?.length) {
      const avatarFile = req.files.avatar[0];

      if (profile?.avatarPublicId) {
        await cloudinary.uploader.destroy(profile.avatarPublicId);
      }

      const uploadedAvatar = await cloudinary.uploader.upload(
        avatarFile.path,
        {
          folder: "portfolio/profile",
          transformation: [
            {
              width: 600,
              height: 600,
              crop: "limit",
            },
          ],
        }
      );

      updateData.avatar = uploadedAvatar.secure_url;
      updateData.avatarPublicId = uploadedAvatar.public_id;

      fs.unlinkSync(avatarFile.path);
    }

    /* =====================================================
       RESUME
    ===================================================== */

    if (req.files?.resume?.length) {
      const resumeFile = req.files.resume[0];

      if (profile?.resumePublicId) {
        await cloudinary.uploader.destroy(profile.resumePublicId, {
          resource_type: "raw",
        });
      }

      const uploadedResume = await cloudinary.uploader.upload(
        resumeFile.path,
        {
          folder: "portfolio/resume",
          resource_type: "raw",
        }
      );

      updateData.resumeUrl = uploadedResume.secure_url;
      updateData.resumePublicId = uploadedResume.public_id;

      fs.unlinkSync(resumeFile.path);
    }

    /* =====================================================
       UPDATE / CREATE
    ===================================================== */

    if (profile) {
      profile = await Profile.findByIdAndUpdate(
        profile._id,
        updateData,
        {
          new: true,
          runValidators: true,
        }
      );
    } else {
      profile = await Profile.create(updateData);
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      data: profile,
    });
  } catch (error) {
    /* =====================================================
       CLEANUP TEMP FILES
    ===================================================== */

    if (req.files?.avatar?.length) {
      const avatarPath = req.files.avatar[0].path;

      if (fs.existsSync(avatarPath)) {
        fs.unlinkSync(avatarPath);
      }
    }

    if (req.files?.resume?.length) {
      const resumePath = req.files.resume[0].path;

      if (fs.existsSync(resumePath)) {
        fs.unlinkSync(resumePath);
      }
    }

    next(error);
  }
};