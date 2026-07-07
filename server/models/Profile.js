import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'Professional working title or headline is required'],
      trim: true, // e.g., "Full Stack Developer & Cloud Engineer"
    },
    bio: {
      type: String,
      required: [true, 'Biographical description text is required'],
      trim: true,
    },
    avatar: {
      type: String,
      required: [true, 'Avatar image URL resource is required'],
    },
    avatarPublicId: {
      type: String,
      required: [true, 'Avatar Cloudinary asset public ID is required'],
    },
    resumeUrl: {
      type: String,
      trim: true,
    },
    resumePublicId: {
      type: String,
      trim: true,
    },
    socialLinks: {
      github: {
        type: String,
        trim: true,
        match: [/^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/, 'Provide a valid GitHub profile link']
      },
      linkedin: {
        type: String,
        trim: true,
        match: [/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/, 'Provide a valid LinkedIn profile link']
      },
      twitter: {
        type: String,
        trim: true,
      }
    }
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;