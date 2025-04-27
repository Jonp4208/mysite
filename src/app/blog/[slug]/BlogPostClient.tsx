'use client';

import { BlogPost, blogPosts } from '@/data/blog-posts';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaTag, FaFacebook, FaTwitter, FaLinkedin, FaArrowLeft } from 'react-icons/fa';
import LocalBusiness from '@/components/sections/LocalBusiness';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPostClient({ post }: { post: BlogPost }) {
  // Function to convert markdown to HTML
  const renderContent = () => {
    return (
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    );
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <FaArrowLeft className="mr-2" /> Back to Blog
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center text-blue-200 text-sm md:text-base gap-4 md:gap-6"
            >
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <FaTag className="mr-2" />
                <span>{post.category}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={post.image || `https://via.placeholder.com/1200x600?text=${post.title}`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  {/* Blog content */}
                  <div className="prose prose-lg max-w-none">
                    {post.content ? (
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                    ) : (
                      <p>Content not available.</p>
                    )}
                  </div>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Share */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Share This Post</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        aria-label="Share on Facebook"
                      >
                        <FaFacebook size={18} />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <FaTwitter size={18} />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <FaLinkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                {/* Author Bio */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md p-6 mb-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                      <img
                        src={`https://ui-avatars.com/api/?name=${post.author}&background=0D8ABC&color=fff`}
                        alt={post.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{post.author}</h4>
                      <p className="text-blue-600">Web Designer</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    {post.author === 'Jonathon Pope'
                      ? 'Jonathon is a web designer and developer based in Calhoun, Georgia. He specializes in creating beautiful, functional websites for small businesses.'
                      : 'A passionate writer and digital marketing expert with years of experience in the web design and development industry.'}
                  </p>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-blue-600 rounded-lg shadow-md p-6 text-white"
                >
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="mb-4">Get the latest web design tips and trends delivered straight to your inbox.</p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-blue-400 bg-blue-500 rounded-md text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                    />
                    <button className="w-full px-4 py-2 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors duration-200">
                      Subscribe
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Filter out current post and get up to 3 related posts */}
            {blogPosts
              .filter(p => p.id !== post.id && (p.category === post.category || (post.tags && p.tags && p.tags.some(tag => post.tags.includes(tag)))))
              .slice(0, 3)
              .map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedPost.image || `https://via.placeholder.com/600x400?text=${relatedPost.title}`}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{relatedPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                      <Link href={`/blog/${relatedPost.id}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      Read More
                    </Link>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      {/* LocalBusiness Schema for SEO */}
      <LocalBusiness />
    </>
  );
}
