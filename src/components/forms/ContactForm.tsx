'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>('Your message has been sent successfully. We\'ll get back to you as soon as possible.');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFormError(null);

    try {
      // Send data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      // Handle success
      setSuccessMessage(result.message || 'Your message has been sent successfully. We\'ll get back to you as soon as possible.');
      setIsSubmitted(true);
      reset();

      // Reset success message after 8 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 8000);
    } catch (error) {
      // Handle error
      setFormError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = 'w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200';
  const errorClasses = 'text-red-500 text-sm mt-1';

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
            <FaCheck size={24} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600">
            {successMessage}
          </p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className={`${inputClasses} ${errors.name ? 'border-red-500' : ''}`}
              placeholder="John Doe"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
                placeholder="john@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className={`${inputClasses} ${errors.phone ? 'border-red-500' : ''}`}
                placeholder="(123) 456-7890"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                    message: 'Invalid phone number'
                  }
                })}
              />
              {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
              Service Interested In
            </label>
            <select
              id="service"
              className={`${inputClasses} ${errors.service ? 'border-red-500' : ''}`}
              {...register('service', { required: 'Please select a service' })}
            >
              <option value="">Select a service</option>
              <option value="web-design">Web Design</option>
              <option value="web-development">Web Development</option>
              <option value="ecommerce">E-Commerce Solutions</option>
              <option value="seo">SEO Optimization</option>
              <option value="content">Content Creation</option>
              <option value="maintenance">Website Maintenance</option>
            </select>
            {errors.service && <p className={errorClasses}>{errors.service.message}</p>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              className={`${inputClasses} ${errors.message ? 'border-red-500' : ''}`}
              placeholder="Tell us about your project..."
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
          </motion.div>

          {formError && (
            <motion.div
              variants={itemVariants}
              className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md"
            >
              {formError}
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={isSubmitting}
              icon={isSubmitting ? null : <FaPaperPlane />}
              className="relative"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </Button>
          </motion.div>
        </motion.form>
      )}
    </div>
  );
};

export default ContactForm;
