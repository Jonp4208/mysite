'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaSave, FaTimes, FaStar, FaRegStar, FaUpload, FaImage, FaSpinner } from 'react-icons/fa';
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

export default function EditTestimonialPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<Testimonial>({
    id: '',
    name: '',
    position: '',
    company: '',
    content: '',
    rating: 5,
    featured: false,
    date: new Date().toISOString().split('T')[0],
    status: 'draft'
  });

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
        
        // setFormData(data);
        // if (data.image) {
        //   setImagePreview(data.image);
        // }

        // For now, use sample data
        const testimonial = sampleTestimonials.find(t => t.id === id);
        if (!testimonial) {
          throw new Error('Testimonial not found');
        }
        
        setFormData(testimonial);
        if (testimonial.image) {
          setImagePreview(testimonial.image);
        }
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleRatingChange = (newRating: number) => {
    setFormData(prev => ({ ...prev, rating: newRating }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // In a real application, you would upload this to Supabase Storage
    // and set the image URL in formData
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would update in Supabase
      // const supabase = createClient();
      
      // First upload the image if there is a new one
      // let imageUrl = formData.image;
      // if (imageFile) {
      //   const { data, error } = await supabase.storage
      //     .from('testimonials')
      //     .upload(`${Date.now()}-${imageFile.name}`, imageFile, {
      //       upsert: true
      //     });
      //   
      //   if (error) throw error;
      //   
      //   // Get the public URL
      //   const { data: { publicUrl } } = supabase.storage
      //     .from('testimonials')
      //     .getPublicUrl(data.path);
      //   
      //   imageUrl = publicUrl;
      // }
      
      // Then update the testimonial
      // const { error } = await supabase
      //   .from('testimonials')
      //   .update({ ...formData, image: imageUrl })
      //   .eq('id', id);
      
      // if (error) throw error;

      // For now, just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Navigate back to testimonials list
      router.push('/admin/testimonials');
    } catch (error) {
      console.error('Error updating testimonial:', error);
      alert('Failed to update testimonial. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderRatingInput = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={i}
          type="button"
          onClick={() => handleRatingChange(i)}
          className="focus:outline-none"
        >
          {i <= formData.rating ? (
            <FaStar className="text-yellow-400 h-6 w-6" />
          ) : (
            <FaRegStar className="text-yellow-400 h-6 w-6" />
          )}
        </button>
      );
    }
    return <div className="flex space-x-1">{stars}</div>;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <FaSpinner className="animate-spin text-blue-600 h-12 w-12" />
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
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Edit Testimonial</h1>
            <p className="text-gray-600 mt-1">Update testimonial information</p>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => router.push('/admin/testimonials')}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaTimes className="mr-2 -ml-1 h-4 w-4" />
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaSave className="mr-2 -ml-1 h-4 w-4" />
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Client Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                  Position/Title
                </label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company/Business *
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Testimonial Content *
              </label>
              <textarea
                name="content"
                id="content"
                rows={5}
                required
                value={formData.content}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter the client's testimonial here..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <div className="mt-1">
                {renderRatingInput()}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Client Photo
              </label>
              <div className="mt-1 flex items-center space-x-6">
                <div className="flex-shrink-0">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-24 w-24 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <FaImage className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="image-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                  >
                    <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                      <FaUpload className="mr-2 -ml-1 h-4 w-4" />
                      {imagePreview ? 'Change Photo' : 'Upload Photo'}
                    </span>
                    <input
                      id="image-upload"
                      name="image-upload"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleImageChange}
                    />
                  </label>
                  <p className="mt-2 text-xs text-gray-500">
                    PNG, JPG, GIF up to 2MB. Square images work best.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="flex items-center h-full pt-6">
                <input
                  id="featured"
                  name="featured"
                  type="checkbox"
                  checked={formData.featured}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
                  Feature this testimonial on the homepage
                </label>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
