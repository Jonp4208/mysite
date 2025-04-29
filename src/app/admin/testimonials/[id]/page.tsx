'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaEdit, 
  FaTrash, 
  FaStar, 
  FaStarHalfAlt, 
  FaRegStar,
  FaSpinner,
  FaCheck,
  FaTimes,
  FaQuoteLeft,
  FaQuoteRight
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

export default function TestimonialDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        // In a real application, you would fetch from Supabase
        // const supabase = createClient();
        // const { data, error } = await supabase
        //   .from('testimonials')
        //   .select('*')
        //   .eq('id', id)
        //   .single();
        
        // if (error) throw error;
        // if (!data) throw new Error('Testimonial not found');
        
        // setTestimonial(data);

        // For now, use sample data
        const testimonialData = sampleTestimonials.find(t => t.id === id);
        if (!testimonialData) {
          throw new Error('Testimonial not found');
        }
        
        setTestimonial(testimonialData);
      } catch (error) {
        console.error('Error fetching testimonial:', error);
        alert('Failed to load testimonial. Redirecting to testimonials list.');
        router.push('/admin/testimonials');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonial();
  }, [id, router]);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      // In a real application, you would delete from Supabase
      // const supabase = createClient();
      // const { error } = await supabase
      //   .from('testimonials')
      //   .delete()
      //   .eq('id', id);
      
      // if (error) throw error;

      // For now, just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      router.push('/admin/testimonials');
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      alert('Failed to delete testimonial. Please try again.');
      setIsDeleting(false);
      setDeleteConfirm(false);
    }
  };

  // Render star rating
  const renderStarRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 h-5 w-5" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 h-5 w-5" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 h-5 w-5" />);
      }
    }
    
    return <div className="flex">{stars}</div>;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <FaSpinner className="animate-spin text-blue-600 h-12 w-12" />
      </div>
    );
  }

  if (!testimonial) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <p className="text-gray-500 text-lg">Testimonial not found.</p>
        <button
          onClick={() => router.push('/admin/testimonials')}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <FaArrowLeft className="mr-2 -ml-1 h-4 w-4" />
          Back to Testimonials
        </button>
      </div>
    );
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <button
              onClick={() => router.push('/admin/testimonials')}
              className="mr-4 text-gray-600 hover:text-gray-900"
            >
              <FaArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Testimonial Details</h1>
              <p className="text-gray-600 mt-1">View testimonial information</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => router.push(`/admin/testimonials/${id}/edit`)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaEdit className="mr-2 -ml-1 h-4 w-4" />
              Edit
            </button>
            {deleteConfirm ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isDeleting ? (
                    <FaSpinner className="animate-spin mr-2 -ml-1 h-4 w-4" />
                  ) : (
                    <FaCheck className="mr-2 -ml-1 h-4 w-4" />
                  )}
                  Confirm
                </button>
                <button
                  onClick={() => setDeleteConfirm(false)}
                  disabled={isDeleting}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaTimes className="mr-2 -ml-1 h-4 w-4" />
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setDeleteConfirm(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <FaTrash className="mr-2 -ml-1 h-4 w-4" />
                Delete
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                <div className="flex flex-col items-center">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-48 w-48 rounded-full object-cover mb-4"
                    />
                  ) : (
                    <div className="h-48 w-48 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-gray-500">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-gray-900 text-center">{testimonial.name}</h2>
                  <p className="text-gray-600 text-center">{testimonial.position}</p>
                  <p className="text-gray-800 font-medium text-center mt-1">{testimonial.company}</p>
                  <div className="mt-3">
                    {renderStarRating(testimonial.rating)}
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Details</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Date Added</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {new Date(testimonial.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Status</dt>
                      <dd className="mt-1">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            testimonial.status === 'published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {testimonial.status === 'published' ? 'Published' : 'Draft'}
                        </span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Featured</dt>
                      <dd className="mt-1">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            testimonial.featured
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {testimonial.featured ? 'Yes' : 'No'}
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="md:w-2/3 md:border-l md:border-gray-200 md:pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Testimonial Content</h3>
                <div className="bg-gray-50 p-6 rounded-lg relative">
                  <FaQuoteLeft className="absolute top-4 left-4 text-gray-300 h-6 w-6 opacity-50" />
                  <div className="pl-8 pr-8">
                    <p className="text-gray-800 text-lg leading-relaxed">{testimonial.content}</p>
                  </div>
                  <FaQuoteRight className="absolute bottom-4 right-4 text-gray-300 h-6 w-6 opacity-50" />
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
                  <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-lg font-bold text-gray-500">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="mb-1">{renderStarRating(testimonial.rating)}</div>
                        <p className="text-gray-800 text-sm mb-2">{testimonial.content}</p>
                        <p className="text-gray-900 font-medium text-sm">{testimonial.name}</p>
                        <p className="text-gray-600 text-xs">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
