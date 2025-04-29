'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaSave, FaArrowLeft, FaImage, FaTimes, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the rich text editor to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function NewBlogPost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  // Set isClient to true on component mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate slug from title
  useEffect(() => {
    if (title) {
      setSlug(title.toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
      );
    }
  }, [title]);

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentTag) {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSave = async (publish: boolean = false) => {
    setIsSaving(true);
    
    try {
      // In a real app, this would send data to an API endpoint
      // For now, we'll just simulate a successful save
      
      // Validate required fields
      if (!title || !content || !excerpt) {
        alert('Please fill in all required fields: title, content, and excerpt.');
        setIsSaving(false);
        return;
      }
      
      // Create post object
      const post = {
        title,
        slug,
        content,
        excerpt,
        coverImage,
        tags,
        published: publish,
        date: new Date().toISOString(),
      };
      
      console.log('Saving post:', post);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to blog management page
      router.push('/admin/blog');
    } catch (error) {
      console.error('Error saving post:', error);
      alert('An error occurred while saving the post. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  // Rich text editor modules configuration
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  if (!isClient) {
    return null; // Prevent hydration errors
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex items-center">
          <Link 
            href="/admin/blog" 
            className="mr-4 p-2 rounded-full hover:bg-gray-200"
          >
            <FaArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create New Blog Post</h1>
            <p className="text-gray-600 mt-1">Write and publish a new blog post.</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button
            type="button"
            onClick={() => setPreviewMode(!previewMode)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FaEye className="mr-2 -ml-1 h-4 w-4" />
            {previewMode ? 'Edit' : 'Preview'}
          </button>
          <button
            type="button"
            onClick={() => handleSave(false)}
            disabled={isSaving}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FaSave className="mr-2 -ml-1 h-4 w-4" />
            {isSaving ? 'Saving...' : 'Save Draft'}
          </button>
          <button
            type="button"
            onClick={() => handleSave(true)}
            disabled={isSaving}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isSaving ? (
              <span className="flex items-center">
                <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Publishing...
              </span>
            ) : (
              <>
                <FaSave className="mr-2 -ml-1 h-4 w-4" />
                Publish
              </>
            )}
          </button>
        </div>
      </div>

      {previewMode ? (
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-4">{title || 'Untitled Post'}</h1>
          {coverImage && (
            <img 
              src={coverImage} 
              alt={title} 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="mb-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                  Slug
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    /blog/
                  </span>
                  <input
                    type="text"
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-none rounded-r-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="post-slug"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  The slug is used in the URL of your post. It is automatically generated from the title, but you can edit it.
                </p>
              </div>

              <div className="mb-6">
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                  Excerpt *
                </label>
                <textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Write a brief excerpt for your post"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  The excerpt is displayed on the blog index page and in search results.
                </p>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Content *
                </label>
                {isClient && (
                  <ReactQuill
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    className="h-64 mb-12"
                    placeholder="Write your blog post content here..."
                  />
                )}
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">Post Settings</h3>
              
              <div className="mb-6">
                <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Image URL
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="coverImage"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="https://example.com/image.jpg"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r-md hover:bg-gray-100"
                  >
                    <FaImage className="h-4 w-4" />
                  </button>
                </div>
                {coverImage && (
                  <div className="mt-2">
                    <img 
                      src={coverImage} 
                      alt="Cover preview" 
                      className="h-32 w-full object-cover rounded-md"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Invalid+Image+URL';
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="tags"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Add a tag"
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r-md hover:bg-gray-100"
                  >
                    Add
                  </button>
                </div>
                {tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-600 focus:outline-none"
                        >
                          <FaTimes className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center">
                <input
                  id="published"
                  name="published"
                  type="checkbox"
                  checked={isPublished}
                  onChange={(e) => setIsPublished(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
                  Publish immediately
                </label>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">SEO Settings</h3>
              
              <div className="mb-4">
                <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Title
                </label>
                <input
                  type="text"
                  id="metaTitle"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="SEO title (defaults to post title)"
                />
              </div>

              <div>
                <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Description
                </label>
                <textarea
                  id="metaDescription"
                  rows={3}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="SEO description (defaults to excerpt)"
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
