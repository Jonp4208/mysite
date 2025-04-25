'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaInstagram, FaFacebook, FaPinterest, FaCalendarAlt } from 'react-icons/fa';
import { Project } from '@/data/portfolio-demos';

export default function PhotographyDemoPage({ project }: { project: Project }) {
  const router = useRouter();

  // Sample gallery images
  const galleryImages = [
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551854838-212c50b4c184?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=600&auto=format&fit=crop',
  ];

  // Sample services
  const services = [
    {
      id: 1,
      title: 'Wedding Photography',
      description: 'Capture every magical moment of your special day with our comprehensive wedding photography packages.',
      image: 'https://images.unsplash.com/photo-1537907510278-a4d35a3de11d?q=80&w=600&auto=format&fit=crop',
      price: 'Starting at $2,500'
    },
    {
      id: 2,
      title: 'Engagement Sessions',
      description: 'Celebrate your engagement with a romantic photoshoot that tells your unique love story.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
      price: 'Starting at $500'
    },
    {
      id: 3,
      title: 'Bridal Portraits',
      description: 'Elegant and timeless bridal portraits that capture your beauty and the details of your bridal look.',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=600&auto=format&fit=crop',
      price: 'Starting at $750'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Portfolio Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push('/portfolio')}
          className="flex items-center px-5 py-3 bg-black/50 text-white rounded-md hover:bg-black/70 transition-colors font-medium"
        >
          <FaArrowLeft className="mr-2" /> Back to Portfolio
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&h=600&auto=format&fit=crop"
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Logo Only - Navigation Hidden */}
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center">
            <div className="text-white font-light italic text-2xl">Eternal</div>
            <div className="text-white font-bold text-2xl ml-2">Moments</div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-light italic mb-6 text-white"
            >
              Capturing <br /><span className="font-bold not-italic">Timeless Moments</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Specializing in wedding and engagement photography that tells your unique love story with elegance and emotion.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors flex items-center"
              >
                View Portfolio <span className="ml-2">»</span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors flex items-center"
              >
                <FaCalendarAlt className="mr-2" /> Book a Session
              </motion.button>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-purple-400 transition-colors">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-red-400 transition-colors">
                  <FaPinterest className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Portfolio Button - Already at the top */}

      {/* Demo Notice */}
      <div className="bg-purple-600 text-white py-3">
        <div className="container mx-auto px-4">
          <p className="text-center">
            This is a demo website showcasing my web design capabilities for photography businesses.
            <a href="/contact" className="underline ml-2 font-bold">Contact me</a> to create a similar site for your business.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Photographer"
                className="w-64 h-64 object-cover rounded-full mx-auto border-8 border-gray-100 shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-light italic mb-6">About <span className="font-bold not-italic">Emily</span></h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 10 years of experience capturing life's most precious moments, I bring a unique blend of artistic vision and technical expertise to every photoshoot. My passion is creating authentic, emotional images that tell your story.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                I believe that the best photographs happen when you feel comfortable and can truly be yourself. My approach is relaxed and unobtrusive, allowing me to capture genuine moments of joy, love, and connection.
              </p>
              <div className="flex items-center">
                <div className="flex space-x-1 text-yellow-400 mr-3">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                </div>
                <span className="text-gray-600">Based on 120+ client reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light italic mb-4">Featured <span className="font-bold not-italic">Gallery</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into the beautiful moments I've had the privilege to capture for my wonderful clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden ${
                  index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-md hover:bg-gray-900 hover:text-white transition-colors font-medium">
              View Full Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light italic mb-4">My <span className="font-bold not-italic">Services</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored photography packages designed to capture your most precious moments with elegance and authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-purple-600 font-bold">{service.price}</div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light italic mb-4">The <span className="font-bold not-italic">Process</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our first conversation to the delivery of your final images, here's what you can expect when working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Consultation</h3>
              <p className="text-gray-600">
                We'll discuss your vision, preferences, and what makes your story unique.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Planning</h3>
              <p className="text-gray-600">
                Together we'll plan the perfect locations, timing, and details for your photoshoot.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Photoshoot</h3>
              <p className="text-gray-600">
                Relax and enjoy the experience while I capture authentic, beautiful moments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Delivery</h3>
              <p className="text-gray-600">
                Receive your carefully edited images in a beautiful online gallery to share and download.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <img
                  src="https://randomuser.me/api/portraits/women/33.jpg"
                  alt="Client"
                  className="w-32 h-32 rounded-full mx-auto border-4 border-purple-600"
                />
              </div>
              <div className="md:w-2/3 md:pl-10">
                <div className="flex text-yellow-400 mb-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                </div>
                <blockquote className="text-xl italic mb-6">
                  "{project.testimonial?.quote}"
                </blockquote>
                <div className="font-bold text-xl">{project.testimonial?.author}</div>
                <div className="text-purple-600">{project.testimonial?.position}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light italic mb-6 text-white">Ready to <span className="font-bold not-italic">Capture Your Story?</span></h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's create beautiful, timeless images that you'll cherish for generations to come.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-md hover:bg-gray-100 transition-colors"
              >
                Book a Session
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="text-white font-light italic text-xl">Eternal</div>
              <div className="text-white font-bold text-xl ml-2">Moments</div>
            </div>
            <div className="flex space-x-4 mb-6 md:mb-0">
              <a href="#" className="text-white hover:text-purple-400 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-red-400 transition-colors">
                <FaPinterest className="w-6 h-6" />
              </a>
            </div>
            <div className="text-gray-400">
              © 2023 Eternal Moments Photography. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
