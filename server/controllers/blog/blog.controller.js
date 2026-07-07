import Blog from '../../models/Blog.js';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// @desc    Get all blog posts
// @route   GET /api/blogs
// @access  Public
export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get a single blog post by text slug
// @route   GET /api/blogs/slug/:slug
// @access  Public
export const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug.toLowerCase() });
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'No matching blog publication found with that slug index.'
      });
    }

    res.status(200).json({
      success: true,
      data: blog
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create a new blog post
// @route   POST /api/blogs
// @access  Private (Admin)
export const createBlog = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Blog cover image file payload is required.' });
    }

    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: 'portfolio/blogs',
      resource_type: 'image'
    });

    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    const blogPayload = {
      ...req.body,
      slug: req.body.slug ? req.body.slug.toLowerCase() : req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      coverImage: uploadResult.secure_url,
      coverImagePublicId: uploadResult.public_id
    };

    const newBlog = await Blog.create(blogPayload);

    res.status(201).json({
      success: true,
      data: newBlog
    });
  } catch (err) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(err);
  }
};

// @desc    Update an existing blog post
// @route   PUT /api/blogs/:id
// @access  Private (Admin)
export const updateBlog = async (req, res, next) => {
  try {
    let currentBlog = await Blog.findById(req.params.id);
    if (!currentBlog) {
      if (req.file && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
      return res.status(404).json({ success: false, message: 'Target blog post item not found.' });
    }

    let updatedData = { ...req.body };
    if (req.body.slug) updatedData.slug = req.body.slug.toLowerCase();

    if (req.file) {
      if (currentBlog.coverImagePublicId) {
        await cloudinary.uploader.destroy(currentBlog.coverImagePublicId);
      }

      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: 'portfolio/blogs',
        resource_type: 'image'
      });

      if (fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }

      updatedData.coverImage = uploadResult.secure_url;
      updatedData.coverImagePublicId = uploadResult.public_id;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: updatedBlog
    });
  } catch (err) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(err);
  }
};

// @desc    Delete a blog post
// @route   DELETE /api/blogs/:id
// @access  Private (Admin)
export const deleteBlog = async (req, res, next) => {
  try {
    const targetBlog = await Blog.findById(req.params.id);
    if (!targetBlog) {
      return res.status(404).json({ success: false, message: 'Target blog post missing.' });
    }

    if (targetBlog.coverImagePublicId) {
      await cloudinary.uploader.destroy(targetBlog.coverImagePublicId);
    }

    await targetBlog.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Blog post tracking node and cloud graphics purged successfully.'
    });
  } catch (err) {
    next(err);
  }
};