import mongoose from 'mongoose';

export interface ISubmission {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const SubmissionSchema = new mongoose.Schema<ISubmission>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Please provide a phone number'],
    },
    service: {
      type: String,
      required: [true, 'Please provide a service'],
    },
    message: {
      type: String,
      required: [true, 'Please provide a message'],
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied', 'archived'],
      default: 'new',
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

// Check if model exists before creating a new one (for Next.js hot reloading)
const Submission = mongoose.models.Submission || mongoose.model<ISubmission>('Submission', SubmissionSchema);

export default Submission;
