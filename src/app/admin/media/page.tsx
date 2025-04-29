'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUpload, 
  FaTrash, 
  FaSearch, 
  FaFolder, 
  FaImage, 
  FaFile,
  FaLink,
  FaCopy,
  FaCheck
} from 'react-icons/fa';

type MediaItem = {
  id: string;
  name: string;
  type: 'image' | 'document' | 'other';
  url: string;
  size: number;
  dimensions?: {
    width: number;
    height: number;
  };
  uploadedAt: string;
};

export default function MediaManagement() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // In a real app, this would fetch from the database or storage service
    // For now, we'll use mock data
    const mockMediaItems: MediaItem[] = [
      {
        id: '1',
        name: 'hero-image.jpg',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
        size: 1024000, // 1MB
        dimensions: {
          width: 1920,
          height: 1080,
        },
        uploadedAt: '2023-04-15T10:30:00Z',
      },
      {
        id: '2',
        name: 'about-us.jpg',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
        size: 2048000, // 2MB
        dimensions: {
          width: 1600,
          height: 900,
        },
        uploadedAt: '2023-04-10T14:45:00Z',
      },
      {
        id: '3',
        name: 'brochure.pdf',
        type: 'document',
        url: '/documents/brochure.pdf',
        size: 3072000, // 3MB
        uploadedAt: '2023-04-05T09:15:00Z',
      },
      {
        id: '4',
        name: 'portfolio-1.jpg',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
        size: 1536000, // 1.5MB
        dimensions: {
          width: 1800,
          height: 1200,
        },
        uploadedAt: '2023-04-01T16:20:00Z',
      },
      {
        id: '5',
        name: 'portfolio-2.jpg',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf',
        size: 1228800, // 1.2MB
        dimensions: {
          width: 1800,
          height: 1200,
        },
        uploadedAt: '2023-03-28T11:10:00Z',
      },
    ];

    setMediaItems(mockMediaItems);
    setIsLoading(false);
  }, []);

  // Filter media items based on search term
  const filteredMediaItems = mediaItems.filter(item => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // Simulate file upload completion
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);

      // Create new media items from the uploaded files
      const newMediaItems: MediaItem[] = Array.from(files).map((file, index) => {
        const isImage = file.type.startsWith('image/');
        const isDocument = file.type === 'application/pdf' || 
                          file.type.includes('word') || 
                          file.type.includes('excel') || 
                          file.type.includes('powerpoint');
        
        return {
          id: `new-${Date.now()}-${index}`,
          name: file.name,
          type: isImage ? 'image' : isDocument ? 'document' : 'other',
          url: isImage ? URL.createObjectURL(file) : '/placeholder.svg',
          size: file.size,
          dimensions: isImage ? { width: 800, height: 600 } : undefined, // Placeholder dimensions
          uploadedAt: new Date().toISOString(),
        };
      });

      setMediaItems([...newMediaItems, ...mediaItems]);
      setIsUploading(false);
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 3000);
  };

  const handleSelectItem = (id: string) => {
    setSelectedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(itemId => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedItems.length === filteredMediaItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredMediaItems.map(item => item.id));
    }
  };

  const handleDeleteSelected = () => {
    if (selectedItems.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ${selectedItems.length} selected item(s)? This action cannot be undone.`)) {
      setMediaItems(mediaItems.filter(item => !selectedItems.includes(item.id)));
      setSelectedItems([]);
    }
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <FaImage className="h-6 w-6 text-blue-500" />;
      case 'document':
        return <FaFile className="h-6 w-6 text-yellow-500" />;
      default:
        return <FaFile className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Media Library</h1>
          <p className="text-gray-600 mt-1">Manage your images and files.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            multiple
            accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isUploading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isUploading ? (
              <>
                <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Uploading...
              </>
            ) : (
              <>
                <FaUpload className="mr-2 -ml-1 h-4 w-4" />
                Upload Files
              </>
            )}
          </button>
        </div>
      </div>

      {/* Upload Progress */}
      {isUploading && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Uploading files...</span>
            <span className="text-sm font-medium text-gray-700">{uploadProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Search and Actions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleSelectAll}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {selectedItems.length === filteredMediaItems.length ? 'Deselect All' : 'Select All'}
            </button>
            {selectedItems.length > 0 && (
              <button
                onClick={handleDeleteSelected}
                className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <FaTrash className="mr-2 -ml-1 h-4 w-4" />
                Delete Selected
              </button>
            )}
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 ${viewMode === 'list' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          {filteredMediaItems.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {filteredMediaItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`relative group rounded-lg overflow-hidden border ${
                      selectedItems.includes(item.id) ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <div className="absolute top-2 left-2 z-10">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    
                    <div className="aspect-w-1 aspect-h-1 bg-gray-100 overflow-hidden">
                      {item.type === 'image' ? (
                        <img
                          src={item.url}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/400?text=Image+Not+Found';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          {getFileIcon(item.type)}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-900 truncate" title={item.name}>
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(item.size)}
                        {item.dimensions && ` • ${item.dimensions.width}×${item.dimensions.height}`}
                      </p>
                    </div>
                    
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleCopyUrl(item.url)}
                          className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600"
                          title="Copy URL"
                        >
                          {copiedUrl === item.url ? <FaCheck className="h-4 w-4 text-green-500" /> : <FaLink className="h-4 w-4" />}
                        </button>
                        <button
                          onClick={() => {
                            setSelectedItems([item.id]);
                            handleDeleteSelected();
                          }}
                          className="p-2 bg-white rounded-full text-gray-700 hover:text-red-600"
                          title="Delete"
                        >
                          <FaTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input
                          type="checkbox"
                          checked={selectedItems.length === filteredMediaItems.length}
                          onChange={handleSelectAll}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        File
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Size
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Dimensions
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Uploaded
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredMediaItems.map((item) => (
                      <motion.tr 
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`hover:bg-gray-50 ${selectedItems.includes(item.id) ? 'bg-blue-50' : ''}`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(item.id)}
                            onChange={() => handleSelectItem(item.id)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded overflow-hidden">
                              {item.type === 'image' ? (
                                <img
                                  src={item.url}
                                  alt={item.name}
                                  className="h-10 w-10 object-cover"
                                  onError={(e) => {
                                    e.currentTarget.src = 'https://via.placeholder.com/40?text=Error';
                                  }}
                                />
                              ) : (
                                <div className="h-10 w-10 flex items-center justify-center">
                                  {getFileIcon(item.type)}
                                </div>
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{item.name}</div>
                              <div className="text-sm text-gray-500 truncate max-w-xs">{item.url}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">{formatFileSize(item.size)}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            {item.dimensions ? `${item.dimensions.width}×${item.dimensions.height}` : '-'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            {new Date(item.uploadedAt).toLocaleDateString()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={() => handleCopyUrl(item.url)}
                              className="text-blue-600 hover:text-blue-900"
                              title="Copy URL"
                            >
                              {copiedUrl === item.url ? <FaCheck className="h-5 w-5 text-green-500" /> : <FaLink className="h-5 w-5" />}
                            </button>
                            <button
                              onClick={() => {
                                setSelectedItems([item.id]);
                                handleDeleteSelected();
                              }}
                              className="text-red-600 hover:text-red-900"
                              title="Delete"
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
            )
          ) : (
            <div className="py-12 text-center">
              <div className="mx-auto h-12 w-12 text-gray-400">
                <FaFolder className="h-12 w-12" />
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No files found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm ? 'No files match your search criteria.' : 'Get started by uploading a file.'}
              </p>
              <div className="mt-6">
                {searchTerm ? (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Clear Search
                  </button>
                ) : (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <FaUpload className="mr-2 -ml-1 h-4 w-4" />
                    Upload Files
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
