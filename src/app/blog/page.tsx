'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import LocalBusiness from '@/components/sections/LocalBusiness';
import { blogPosts } from '@/data/blog-posts';

  // Categories for filtering
  const categories = [
    'All',
    'Web Design',
    'SEO',
    'E-Commerce',
    'Security',
    'Content Marketing',
    'Performance'
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Insights, tips, and trends in web design, development, and digital marketing.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image || `https://via.placeholder.com/600x400?text=${post.title}`}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.category}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-700 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">By {post.author}</span>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                {/* Search */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md p-6 mb-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </motion.div>

                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 mb-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center"
                        >
                          <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Recent Posts */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-md p-6 mb-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <li key={post.id} className="flex items-start">
                        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0 mr-4">
                          <img
                            src={post.image || `https://via.placeholder.com/100x100?text=${post.title}`}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200">
                            <Link href={`/blog/${post.id}`}>
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
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

      {/* LocalBusiness Schema for SEO */}
      <LocalBusiness />
    </>
  );
}
