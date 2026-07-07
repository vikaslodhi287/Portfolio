import Certificate from '../../models/Certificate.js';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// @desc    Get all certificates
// @route   GET /api/certificates
// @access  Public
export const getCertificates = async (req, res, next) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: certificates.length,
      data: certificates
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create a new certificate record
// @route   POST /api/certificates
// @access  Private (Admin)
export const createCertificate = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Certificate file image payload is required.' });
    }

    // Upload temporary file to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: 'portfolio/certificates',
      resource_type: 'image'
    });

    // Automatically purge local file from temp disk allocation memory
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    const certificatePayload = {
      ...req.body,
      image: uploadResult.secure_url,
      imagePublicId: uploadResult.public_id
    };

    const newCertificate = await Certificate.create(certificatePayload);

    res.status(201).json({
      success: true,
      data: newCertificate
    });
  } catch (err) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(err);
  }
};

// @desc    Update an existing certificate record
// @route   PUT /api/certificates/:id
// @access  Private (Admin)
export const updateCertificate = async (req, res, next) => {
  try {
    let currentCertificate = await Certificate.findById(req.params.id);
    if (!currentCertificate) {
      if (req.file && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
      return res.status(404).json({ success: false, message: 'Target certificate item not found.' });
    }

    let updatedData = { ...req.body };

    if (req.file) {
      // Purge previous asset from Cloudinary
      if (currentCertificate.imagePublicId) {
        await cloudinary.uploader.destroy(currentCertificate.imagePublicId);
      }

      // Stream new asset metadata layer
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: 'portfolio/certificates',
        resource_type: 'image'
      });

      if (fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }

      updatedData.image = uploadResult.secure_url;
      updatedData.imagePublicId = uploadResult.public_id;
    }

    const updatedCertificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: updatedCertificate
    });
  } catch (err) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(err);
  }
};

// @desc    Delete a certificate record
// @route   DELETE /api/certificates/:id
// @access  Private (Admin)
export const deleteCertificate = async (req, res, next) => {
  try {
    const targetCertificate = await Certificate.findById(req.params.id);
    if (!targetCertificate) {
      return res.status(404).json({ success: false, message: 'Target certificate data row missing.' });
    }

    if (targetCertificate.imagePublicId) {
      await cloudinary.uploader.destroy(targetCertificate.imagePublicId);
    }

    await targetCertificate.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Certificate tracking node and cloud graphics purged successfully.'
    });
  } catch (err) {
    next(err);
  }
};