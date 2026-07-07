import mongoose from 'mongoose';

const NavigationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Navigation display title is required'],
      trim: true
    },
    slug: {
      type: String,
      required: [true, 'Navigation item slug identification index is required'],
      lowercase: true,
      trim: true
    },
    path: {
      type: String,
      required: [true, 'Navigation URI destination target path is required'],
      trim: true
    },
    displayOrder: {
      type: Number,
      default: 0
    },
    isVisible: {
      type: Boolean,
      default: true
    },
    openInNewTab: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: '',
      trim: true
    }
  },
  { 
    timestamps: true 
  }
);

NavigationSchema.index({ displayOrder: 1, isVisible: 1 });

const Navigation = mongoose.model('Navigation', NavigationSchema);
export default Navigation; // Correct default ES module export