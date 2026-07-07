import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
    },
    position: {
      type: String,
      required: [true, 'Job position or title is required'],
      trim: true,
    },
    location: {
      type: String,
      trim: true, // E.g., "San Francisco, CA" or "Remote"
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: Date,
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    description: [
      {
        type: String,
        required: [true, 'At least one key responsibility or achievement statement is required'],
        trim: true,
      }
    ],
    skillsUsed: [
      {
        type: String,
        trim: true,
      }
    ],
  },
  {
    timestamps: true,
  }
);

// Safety validation logic to prevent temporal data conflicts
experienceSchema.pre('save', function (next) {
  if (this.isCurrent) {
    this.endDate = undefined;
  } else if (!this.endDate) {
    return next(new Error('End date is required if this is not your current job position'));
  }
  
  if (this.endDate && this.startDate && this.endDate < this.startDate) {
    return next(new Error('End date must occur chronologically after the employment start date'));
  }
  next();
});

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;