'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import ContactForm from '@/components/forms/ContactForm';
import LocalBusiness from '@/components/sections/LocalBusiness';
import { FaCheck } from 'react-icons/fa';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0].id);

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
    
    // Smooth scroll to the service details section
    const detailsSection = document.getElementById('service-details');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeServiceData = services.find(service => service.id === activeService) || services[0];

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
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              We offer a comprehensive range of web design and development services to help your business succeed online in Calhoun, Georgia and beyond.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service.id}>
                      <button
                        onClick={() => handleServiceClick(service.id)}
                        className={`w-full text-left px-4 py-3 rounded-md transition-colors duration-200 flex items-center ${
                          activeService === service.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <span className="mr-3">{<service.icon size={18} />}</span>
                        {service.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Details */}
            <div id="service-details" className="md:col-span-2">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {activeServiceData.image && (
                  <div className="h-64 overflow-hidden">
                    <img
                      src={activeServiceData.image || `https://via.placeholder.com/800x400?text=${activeServiceData.title}`}
                      alt={activeServiceData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{activeServiceData.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{activeServiceData.fullDescription}</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {activeServiceData.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <a 
                      href="#contact-form" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                    >
                      Get a Quote for {activeServiceData.title}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your project and get a free quote. We're here to help your business succeed online.
            </p>
            <a 
              href="#contact-form" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible with a free quote for your project.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* LocalBusiness Schema for SEO */}
      <LocalBusiness />
    </>
  );
}
