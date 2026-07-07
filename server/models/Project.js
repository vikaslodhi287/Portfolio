import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title parameter is required'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Detailed project description summary is required'],
      trim: true,
    },
    thumbnail: {
      type: String,
      required: [true, 'Main project thumbnail image URL is required'],
    },
    thumbnailPublicId: {
      type: String,
      required: [true, 'Main thumbnail Cloudinary asset public ID is required'],
    },
    images: [
      {
        url: { type: String, required: true },
        publicId: { type: String, required: true }
      }
    ],
    technologies: [
      {
        type: String,
        required: [true, 'Technology classification framework flags are required'],
        trim: true,
      }
    ],
    githubUrl: {
      type: String,
      trim: true,
    },
    liveUrl: {
      type: String,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    sortOrder: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

// Index configurations to accelerate sorting priorities inside public dashboard listings
projectSchema.index({ featured: -1, sortOrder: 1, createdAt: -1 });

const Project = mongoose.model('Project', projectSchema);
export default Project;