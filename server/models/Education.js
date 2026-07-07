import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema(
  {
    institution: {
      type: String,
      required: [true, 'Educational institution name is required'],
      trim: true,
    },
    degree: {
      type: String,
      required: [true, 'Degree or qualification name is required'],
      trim: true,
    },
    fieldOfStudy: {
      type: String,
      required: [true, 'Field of study or major is required'],
      trim: true,
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
    grade: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
  },
  {
    timestamps: true,
  }
);

// Pre-validation runtime check ensuring target boundaries don't overlap
educationSchema.pre('save', function (next) {
  if (this.endDate && this.startDate && this.endDate < this.startDate) {
    return next(new Error('End date must be chronological and set after the start date'));
  }
  next();
});

const Education = mongoose.model('Education', educationSchema);
export default Education;