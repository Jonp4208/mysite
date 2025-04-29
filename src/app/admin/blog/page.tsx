'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPlus, FaEdit, FaTrash, FaEye, FaSearch, FaFilter } from 'react-icons/fa';
import { blogPosts } from '@/data/blog-posts';

type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author?: string;
  published?: boolean;
};

export default function BlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');

  useEffect(() => {
    // In a real app, this would fetch from the database
    // For now, we'll use the static data
    try {
      // Convert the blog posts data to our format
      const formattedPosts = blogPosts.map(post => ({
        id: post.id,
        title: post.title,
        date: post.date,
        excerpt: post.excerpt,
        content: post.content,
        author: 'Admin',
        published: true,
      }));
      
      setPosts(formattedPosts);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Filter and search posts
  const filteredPosts = posts.filter(post => {
    // Apply search filter
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply status filter
    const matchesFilter = filter === 'all' || 
                         (filter === 'published' && post.published) ||
                         (filter === 'draft' && !post.published);
    
    return matchesSearch && matchesFilter;
  });

  const handleDeletePost = (id: string) => {
    // In a real app, this would call an API to delete the post
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600 mt-1">Create, edit, and manage your blog posts.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link 
            href="/admin/blog/new" 
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FaPlus className="mr-2 -ml-1 h-4 w-4" />
            New Post
          </Link>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <FaFilter className="mr-2 text-gray-500" />
              <span className="text-gray-700">Filter:</span>
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'all' | 'published' | 'draft')}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="all">All Posts</option>
              <option value="published">Published</option>
              <option value="draft">Drafts</option>
            </select>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {filteredPosts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPosts.map((post) => (
                    <motion.tr 
                      key={post.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{post.title}</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{post.excerpt}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{post.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          post.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {post.author || 'Admin'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <Link 
                            href={`/blog/${post.id}`} 
                            className="text-blue-600 hover:text-blue-900"
                            target="_blank"
                          >
                            <FaEye className="h-5 w-5" />
                          </Link>
                          <Link 
                            href={`/admin/blog/${post.id}/edit`} 
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <FaEdit className="h-5 w-5" />
                          </Link>
                          <button 
                            onClick={() => handleDeletePost(post.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FaTrash className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-gray-500 text-lg">
                {searchTerm || filter !== 'all' 
                  ? 'No posts match your search or filter criteria.' 
                  : 'No blog posts found. Create your first post!'}
              </p>
              {searchTerm || filter !== 'all' ? (
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setFilter('all');
                  }}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Clear Filters
                </button>
              ) : (
                <Link 
                  href="/admin/blog/new" 
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FaPlus className="mr-2 -ml-1 h-4 w-4" />
                  Create Post
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
