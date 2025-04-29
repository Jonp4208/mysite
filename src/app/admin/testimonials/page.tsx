'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaPlus, 
  FaStar, 
  FaStarHalfAlt, 
  FaRegStar, 
  FaEdit, 
  FaTrash, 
  FaEye, 
  FaSearch,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaFilter
} from 'react-icons/fa';
import { Testimonial } from '@/types/testimonial';
import { createClient } from '@/lib/supabase';

// Sample testimonials data (will be replaced with Supabase data)
const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    position: 'CEO',
    company: 'ABC Company',
    content: 'Working with Calhoun Web Creations was a game-changer for our business. Our new website has significantly increased our online presence and customer engagement.',
    rating: 5,
    image: '/images/testimonials/john-smith.jpg',
    featured: true,
    date: '2023-10-15',
    status: 'published'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'XYZ Corp',
    content: 'The website redesign exceeded our expectations. The team was professional, responsive, and delivered exactly what we needed.',
    rating: 4.5,
    image: '/images/testimonials/sarah-johnson.jpg',
    featured: true,
    date: '2023-11-20',
    status: 'published'
  },
  {
    id: '3',
    name: 'Michael Brown',
    position: 'Small Business Owner',
    company: 'Brown\'s Bakery',
    content: 'As a small business owner, I needed an affordable website that looked professional. Calhoun Web Creations delivered that and more!',
    rating: 5,
    featured: false,
    date: '2023-12-05',
    status: 'published'
  },
  {
    id: '4',
    name: 'Emily Davis',
    position: 'Freelance Photographer',
    company: 'Emily Davis Photography',
    content: 'My portfolio website is beautiful and showcases my work perfectly. I\'ve received so many compliments and new client inquiries since launching.',
    rating: 5,
    image: '/images/testimonials/emily-davis.jpg',
    featured: false,
    date: '2024-01-10',
    status: 'published'
  },
  {
    id: '5',
    name: 'Robert Wilson',
    position: 'Owner',
    company: 'Wilson Plumbing',
    content: 'The website has helped us reach new customers in Calhoun and surrounding areas. The SEO work has been particularly effective.',
    rating: 4,
    featured: false,
    date: '2024-02-15',
    status: 'draft'
  }
];

type SortField = 'name' | 'company' | 'rating' | 'date';
type SortDirection = 'asc' | 'desc';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // In a real application, you would fetch from Supabase
        // const supabase = createClient();
        // const { data, error } = await supabase
        //   .from('testimonials')
        //   .select('*')
        //   .order('date', { ascending: false });
        
        // if (error) throw error;
        // setTestimonials(data || []);

        // For now, use sample data
        setTestimonials(sampleTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      // In a real application, you would delete from Supabase
      // const supabase = createClient();
      // const { error } = await supabase
      //   .from('testimonials')
      //   .delete()
      //   .eq('id', id);
      
      // if (error) throw error;

      // For now, just update the state
      setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
      setDeleteConfirmId(null);
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'published' | 'draft') => {
    try {
      // In a real application, you would update in Supabase
      // const supabase = createClient();
      // const { error } = await supabase
      //   .from('testimonials')
      //   .update({ status: newStatus })
      //   .eq('id', id);
      
      // if (error) throw error;

      // For now, just update the state
      setTestimonials(testimonials.map(testimonial => 
        testimonial.id === id ? { ...testimonial, status: newStatus } : testimonial
      ));
    } catch (error) {
      console.error('Error updating testimonial status:', error);
    }
  };

  const handleFeaturedToggle = async (id: string, featured: boolean) => {
    try {
      // In a real application, you would update in Supabase
      // const supabase = createClient();
      // const { error } = await supabase
      //   .from('testimonials')
      //   .update({ featured })
      //   .eq('id', id);
      
      // if (error) throw error;

      // For now, just update the state
      setTestimonials(testimonials.map(testimonial => 
        testimonial.id === id ? { ...testimonial, featured } : testimonial
      ));
    } catch (error) {
      console.error('Error updating testimonial featured status:', error);
    }
  };

  // Filter and sort testimonials
  const filteredTestimonials = testimonials
    .filter(testimonial => {
      const matchesSearch = 
        testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.content.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = 
        statusFilter === 'all' || 
        testimonial.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let comparison = 0;
      
      switch (sortField) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'company':
          comparison = a.company.localeCompare(b.company);
          break;
        case 'rating':
          comparison = a.rating - b.rating;
          break;
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });

  // Render star rating
  const renderStarRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return <div className="flex">{stars}</div>;
  };

  // Render sort icon
  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) return <FaSort className="ml-1 text-gray-400" />;
    return sortDirection === 'asc' ? 
      <FaSortUp className="ml-1 text-blue-600" /> : 
      <FaSortDown className="ml-1 text-blue-600" />;
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Testimonials</h1>
            <p className="text-gray-600 mt-1">Manage customer testimonials and reviews</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/admin/testimonials/new"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaPlus className="mr-2 -ml-1 h-4 w-4" />
              Add Testimonial
            </Link>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FaFilter className="mr-2 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="all">All Status</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {filteredTestimonials.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-gray-500 text-lg">No testimonials found.</p>
                <p className="text-gray-500 mt-2">Add a new testimonial to get started.</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <button 
                            className="flex items-center focus:outline-none"
                            onClick={() => handleSort('name')}
                          >
                            Client {renderSortIcon('name')}
                          </button>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <button 
                            className="flex items-center focus:outline-none"
                            onClick={() => handleSort('company')}
                          >
                            Company {renderSortIcon('company')}
                          </button>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <button 
                            className="flex items-center focus:outline-none"
                            onClick={() => handleSort('rating')}
                          >
                            Rating {renderSortIcon('rating')}
                          </button>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <button 
                            className="flex items-center focus:outline-none"
                            onClick={() => handleSort('date')}
                          >
                            Date {renderSortIcon('date')}
                          </button>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Featured
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredTestimonials.map((testimonial) => (
                        <tr key={testimonial.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                {testimonial.image ? (
                                  <img 
                                    className="h-10 w-10 rounded-full object-cover" 
                                    src={testimonial.image} 
                                    alt={testimonial.name} 
                                  />
                                ) : (
                                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                    {testimonial.name.charAt(0)}
                                  </div>
                                )}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.position}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{testimonial.company}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {renderStarRating(testimonial.rating)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {new Date(testimonial.date).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <select
                              value={testimonial.status}
                              onChange={(e) => handleStatusChange(testimonial.id, e.target.value as 'published' | 'draft')}
                              className={`text-sm rounded-full px-3 py-1 font-medium ${
                                testimonial.status === 'published' 
                                  ? 'bg-green-100 text-green-800 border border-green-200' 
                                  : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                              }`}
                            >
                              <option value="published">Published</option>
                              <option value="draft">Draft</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <label className="inline-flex items-center cursor-pointer">
                              <input 
                                type="checkbox" 
                                className="sr-only peer"
                                checked={testimonial.featured}
                                onChange={() => handleFeaturedToggle(testimonial.id, !testimonial.featured)}
                              />
                              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <Link
                                href={`/admin/testimonials/${testimonial.id}`}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                <FaEye className="h-5 w-5" />
                              </Link>
                              <Link
                                href={`/admin/testimonials/${testimonial.id}/edit`}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                <FaEdit className="h-5 w-5" />
                              </Link>
                              {deleteConfirmId === testimonial.id ? (
                                <div className="flex items-center space-x-2">
                                  <button
                                    onClick={() => handleDelete(testimonial.id)}
                                    className="text-red-600 hover:text-red-900"
                                  >
                                    Confirm
                                  </button>
                                  <button
                                    onClick={() => setDeleteConfirmId(null)}
                                    className="text-gray-600 hover:text-gray-900"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setDeleteConfirmId(testimonial.id)}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  <FaTrash className="h-5 w-5" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}
