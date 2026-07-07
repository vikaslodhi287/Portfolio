import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name parameter is required'],
      trim: true,
      unique: true,
    },
    category: {
      type: String,
      required: [true, 'Skill group category classification is required'],
      enum: {
        values: ['frontend', 'backend', 'devops', 'database', 'mobile', 'ui-ux', 'other'],
        message: 'Invalid classification: category must be frontend, backend, devops, database, mobile, ui-ux, or other',
      },
      lowercase: true,
    },
    proficiency: {
      type: Number,
      required: [true, 'Proficiency percentage value is required'],
      min: [0, 'Proficiency value cannot fall below 0%'],
      max: [100, 'Proficiency metrics cannot exceed 100%'],
    },
    icon: {
      type: String, // String reference identifier for custom components or raw svg assets
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes optimizing categorization filter processing
skillSchema.index({ category: 1, proficiency: -1 });

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;