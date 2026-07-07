import mongoose from 'mongoose';

const settingSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      default: 'Developer Portfolio',
      trim: true,
    },
    seo: {
      metaTitle: { type: String, trim: true },
      metaDescription: { type: String, trim: true },
      keywords: [{ type: String, trim: true }],
    },
    maintenanceMode: {
      type: Boolean,
      default: false,
    },
    enableBlog: {
      type: Boolean,
      default: true,
    },
    enableContactForm: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Enforce a strict singleton constraint at the database schema tier 
// to guarantee that only one global configurations profile document can ever exist.
settingSchema.pre('save', async function (next) {
  const Setting = mongoose.model('Setting', settingSchema);
  if (this.isNew) {
    const count = await Setting.countDocuments();
    if (count > 0) {
      return next(new Error('System configuration document already exists. Only updating is permitted.'));
    }
  }
  next();
});

const Setting = mongoose.model('Setting', settingSchema);
export default Setting;