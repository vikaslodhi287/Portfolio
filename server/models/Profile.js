import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    /* ==========================================
       BASIC INFORMATION
    ========================================== */

    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      maxlength: 100,
    },

    title: {
      type: String,
      required: [true, "Professional title is required"],
      trim: true,
      maxlength: 100,
    },

    tagline: {
      type: String,
      trim: true,
      maxlength: 150,
      default: "Building scalable web applications with modern technologies.",
    },

    bio: {
      type: String,
      required: [true, "Biographical description is required"],
      trim: true,
      maxlength: 600,
    },

    /* ==========================================
       PROFILE IMAGE
    ========================================== */

    avatar: {
      type: String,
      required: true,
      trim: true,
    },

    avatarPublicId: {
      type: String,
      required: true,
      trim: true,
    },

    /* ==========================================
       RESUME
    ========================================== */

    resumeUrl: {
      type: String,
      trim: true,
    },

    resumePublicId: {
      type: String,
      trim: true,
    },

    /* ==========================================
       HERO SECTION
    ========================================== */

    availability: {
      type: Boolean,
      default: true,
    },

    location: {
      type: String,
      trim: true,
      default: "India",
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },

    /* ==========================================
       HERO STATS
    ========================================== */

    yearsOfExperience: {
      type: Number,
      default: 1,
      min: 0,
    },

    projectsCompleted: {
      type: Number,
      default: 20,
      min: 0,
    },

    technologiesKnown: {
      type: Number,
      default: 15,
      min: 0,
    },

    /* ==========================================
       SOCIAL LINKS
    ========================================== */

    socialLinks: {
      github: {
        type: String,
        trim: true,
      },

      linkedin: {
        type: String,
        trim: true,
      },

      leetcode: {
        type: String,
        trim: true,
      },

      twitter: {
        type: String,
        trim: true,
      },

      portfolio: {
        type: String,
        trim: true,
      },

    },
    techStack: {
  type: [
    {
      type: String,
      trim: true,
    },
  ],
  default: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "Git",
  ],
},
/* ==========================================
   CTA BUTTONS
========================================== */

cta: {
  hireMeText: {
    type: String,
    required: true,
    trim: true,
    default: "Hire Me",
    maxlength: 30,
  },

  resumeText: {
    type: String,
    required: true,
    trim: true,
    default: "Download Resume",
    maxlength: 40,
  },
},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;