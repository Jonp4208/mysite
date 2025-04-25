'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/forms/ContactForm';
import LocalBusiness from '@/components/sections/LocalBusiness';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContactPage() {
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
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Get in touch with our team to discuss your web design project. We're here to help your business succeed online.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. We look forward to hearing from you!
                </p>
                <ContactForm />
              </motion.div>
            </div>

            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-700 mb-8">
                  We're located in Calhoun, Georgia, and serve clients throughout the region. Feel free to reach out to us through any of the following methods.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <FaMapMarkerAlt className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Our Location</h3>
                      <p className="text-gray-700">123 Main Street, Calhoun, GA 30701</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <FaPhone className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Phone Number</h3>
                      <p className="text-gray-700">
                        <a href="tel:+17065551234" className="hover:text-blue-600 transition-colors duration-200">
                          (706) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <FaEnvelope className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Email Address</h3>
                      <p className="text-gray-700">
                        <a href="mailto:info@calhounwebcreations.com" className="hover:text-blue-600 transition-colors duration-200">
                          info@calhounwebcreations.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <FaClock className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-700">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com/calhounwebcreations" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com/calhounweb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com/calhounwebcreations" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-3 rounded-full hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-colors duration-200"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com/company/calhoun-web-creations" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're conveniently located in downtown Calhoun, Georgia. Feel free to stop by during business hours!
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="h-[450px] bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Map placeholder - In a real implementation, this would be an embedded Google Map</p>
            </div>
          </div>
        </div>
      </section>

      {/* LocalBusiness Schema for SEO */}
      <LocalBusiness />
    </>
  );
}
