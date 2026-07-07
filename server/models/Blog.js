import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
      maxlength: [150, 'Title cannot exceed 150 characters'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: [true, 'Blog content is required'],
    },
    excerpt: {
      type: String,
      required: [true, 'Short excerpt summary is required'],
      trim: true,
      maxlength: [300, 'Excerpt cannot exceed 300 characters'],
    },
    coverImage: {
      type: String,
      required: [true, 'Cover image URL is required'],
    },
    coverImagePublicId: {
      type: String,
      required: [true, 'Cloudinary public ID is required for asset management'],
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft',
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Auto-generate URL slugs from titles before saving
blogSchema.pre('validate', function (next) {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')       // Replace spaces with hyphens
      .replace(/[^\w\-]+/g, '')   // Remove all non-word characters
      .replace(/\-\-+/g, '-')     // Replace multiple hyphens with single hyphen
      .replace(/^-+/, '')         // Trim hyphens from start
      .replace(/-+$/, '');        // Trim hyphens from end
  }
  next();
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;