import mongoose from 'mongoose';

export interface ISetting {
  key: string;
  value: any;
  category: 'general' | 'seo' | 'contact' | 'social' | 'appearance';
  createdAt: Date;
  updatedAt: Date;
}

const SettingSchema = new mongoose.Schema<ISetting>(
  {
    key: {
      type: String,
      required: [true, 'Please provide a key'],
      unique: true,
    },
    value: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, 'Please provide a value'],
    },
    category: {
      type: String,
      enum: ['general', 'seo', 'contact', 'social', 'appearance'],
      default: 'general',
    },
  },
  { timestamps: true }
);

// Check if model exists before creating a new one (for Next.js hot reloading)
const Setting = mongoose.models.Setting || mongoose.model<ISetting>('Setting', SettingSchema);

export default Setting;
