import mongoose from 'mongoose';

export interface IBlogPost {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: mongoose.Types.ObjectId;
  tags: string[];
  published: boolean;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema = new mongoose.Schema<IBlogPost>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Please provide a slug'],
      unique: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: [true, 'Please provide content'],
    },
    excerpt: {
      type: String,
      required: [true, 'Please provide an excerpt'],
      maxlength: [300, 'Excerpt cannot be more than 300 characters'],
    },
    coverImage: {
      type: String,
      default: '',
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide an author'],
    },
    tags: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Create a text index for search functionality
BlogPostSchema.index({ title: 'text', content: 'text', excerpt: 'text' });

// Check if model exists before creating a new one (for Next.js hot reloading)
const BlogPost = mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);

export default BlogPost;
