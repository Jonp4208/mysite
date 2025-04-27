import { blogPosts } from '@/data/blog-posts';
import { redirect } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

type Props = {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(p => p.id === params.slug);

  if (!post) {
    redirect('/blog');
  }

  return <BlogPostClient post={post} />;
}
