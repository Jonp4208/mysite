'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPhone, FaMapMarkerAlt, FaClock, FaWrench, FaShower, FaSink, FaToilet, FaWater, FaTools, FaStar } from 'react-icons/fa';
import { Project } from '@/data/portfolio-demos';

export default function PlumbingDemoPage({ project }: { project: Project }) {
  const router = useRouter();
  
  // Sample services
  const services = [
    {
      id: 1,
      title: 'Emergency Repairs',
      description: 'Fast response to leaks, burst pipes, and other plumbing emergencies. Available 24/7.',
      icon: <FaWrench className="text-3xl text-blue-600" />,
      price: 'Starting at $89'
    },
    {
      id: 2,
      title: 'Bathroom Plumbing',
      description: 'Installation and repair of toilets, showers, bathtubs, and bathroom fixtures.',
      icon: <FaShower className="text-3xl text-blue-600" />,
      price: 'Starting at $120'
    },
    {
      id: 3,
      title: 'Kitchen Plumbing',
      description: 'Sink installation, garbage disposal repair, and kitchen fixture services.',
      icon: <FaSink className="text-3xl text-blue-600" />,
      price: 'Starting at $110'
    },
    {
      id: 4,
      title: 'Toilet Services',
      description: 'Toilet installation, repair, and unclogging services for all types of toilets.',
      icon: <FaToilet className="text-3xl text-blue-600" />,
      price: 'Starting at $95'
    },
    {
      id: 5,
      title: 'Water Heater Services',
      description: 'Installation, repair, and maintenance for all types of water heaters.',
      icon: <FaWater className="text-3xl text-blue-600" />,
      price: 'Starting at $150'
    },
    {
      id: 6,
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning services to remove clogs and prevent future blockages.',
      icon: <FaTools className="text-3xl text-blue-600" />,
      price: 'Starting at $75'
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
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&h=600&auto=format&fit=crop"
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        {/* Logo Only - Navigation Hidden */}
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center">
            <div className="text-white font-bold text-2xl">CALHOUN</div>
            <div className="text-blue-400 font-bold text-2xl ml-2">PLUMBING</div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              Professional <br />Plumbing Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Reliable, affordable plumbing services for residential and commercial properties in Calhoun and surrounding areas.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors flex items-center"
              >
                Our Services <span className="ml-2">»</span>
              </motion.a>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors flex items-center"
              >
                <FaPhone className="mr-2" /> Emergency Service
              </motion.button>
            </div>
            
            {/* Emergency Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 bg-red-600 p-4 rounded-lg inline-block"
            >
              <p className="text-white font-medium flex items-center">
                <FaPhone className="mr-2" /> 24/7 Emergency Service: <span className="font-bold ml-2">(555) 123-4567</span>
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/10 backdrop-blur-md py-4">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center text-white">
                <FaMapMarkerAlt className="mr-3 text-blue-400 text-2xl" />
                <div>
                  <div className="font-bold">Serving Calhoun, GA</div>
                  <div className="text-blue-200">And surrounding areas</div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <FaClock className="mr-3 text-blue-400 text-2xl" />
                <div>
                  <div className="font-bold">Available 24/7</div>
                  <div className="text-blue-200">For emergency services</div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <FaTools className="mr-3 text-blue-400 text-2xl" />
                <div>
                  <div className="font-bold">Licensed & Insured</div>
                  <div className="text-blue-200">Professional plumbers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Portfolio Button - Already at the top */}
      
      {/* Demo Notice */}
      <div className="bg-blue-600 text-white py-3">
        <div className="container mx-auto px-4">
          <p className="text-center">
            This is a demo website showcasing my web design capabilities for service businesses. 
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
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop" 
                alt="Plumber at work" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">About Calhoun Plumbing</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2005, Calhoun Plumbing has been providing top-quality plumbing services to residential and commercial customers in Calhoun and the surrounding areas. Our team of licensed, experienced plumbers is committed to delivering exceptional service at fair prices.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We take pride in our work and stand behind it with our satisfaction guarantee. From minor repairs to major installations, we have the expertise and equipment to handle all your plumbing needs quickly and efficiently.
              </p>
              <div className="flex items-center">
                <div className="flex space-x-1 text-yellow-400 mr-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-gray-600">Rated 4.9/5 based on 350+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of plumbing services for both residential and commercial properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">{service.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's why homeowners and businesses in Calhoun trust us with all their plumbing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTools className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Licensed & Insured</h3>
              <p className="text-gray-600">
                Our team consists of fully licensed and insured plumbing professionals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClock className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Availability</h3>
              <p className="text-gray-600">
                Plumbing emergencies don't wait, and neither do we. Available any time, day or night.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaStar className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Workmanship</h3>
              <p className="text-gray-600">
                We take pride in our work and stand behind it with our satisfaction guarantee.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaWrench className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees or surprises. We provide upfront pricing before any work begins.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Emergency Call Section */}
      <div className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Plumbing Emergency?</h2>
              <p className="text-xl">We're available 24/7 for urgent plumbing issues.</p>
            </div>
            <a href="tel:5551234567" className="mt-6 md:mt-0 bg-white text-red-600 px-8 py-4 rounded-md font-bold text-xl hover:bg-gray-100 transition-colors flex items-center">
              <FaPhone className="mr-2" /> (555) 123-4567
            </a>
          </div>
        </div>
      </div>
      
      {/* Request Service Form */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Request Service</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below to schedule a service appointment or request a free estimate.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Service Needed</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                    <option>Select a service</option>
                    <option>Emergency Repair</option>
                    <option>Bathroom Plumbing</option>
                    <option>Kitchen Plumbing</option>
                    <option>Toilet Services</option>
                    <option>Water Heater Services</option>
                    <option>Drain Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-32"
                    placeholder="Please describe your plumbing issue or service needed"
                  ></textarea>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-bold">
                Submit Request
              </button>
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
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt={project.testimonial?.author} 
                  className="w-32 h-32 rounded-full mx-auto border-4 border-blue-600"
                />
              </div>
              <div className="md:w-2/3 md:pl-10">
                <div className="flex text-yellow-400 mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <blockquote className="text-xl italic mb-6">
                  "{project.testimonial?.quote}"
                </blockquote>
                <div className="font-bold text-xl">{project.testimonial?.author}</div>
                <div className="text-blue-600">{project.testimonial?.position}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Solve Your Plumbing Problems?</h2>
            <p className="text-xl mb-8 text-white">
              Contact us today for fast, reliable plumbing services at competitive rates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition-colors"
              >
                Schedule Service
              </a>
              <a
                href="tel:5551234567"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors flex items-center"
              >
                <FaPhone className="mr-2" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-white font-bold text-xl">CALHOUN</div>
                <div className="text-blue-400 font-bold text-xl ml-2">PLUMBING</div>
              </div>
              <p className="text-gray-400 mb-4">
                Professional plumbing services for residential and commercial properties in Calhoun, Georgia.
              </p>
              <div className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2 text-blue-400" />
                <span>123 Main St, Calhoun, GA</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Emergency Repairs</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Bathroom Plumbing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Kitchen Plumbing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Water Heater Services</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Drain Cleaning</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-blue-400" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <FaWrench className="mr-2 text-blue-400" />
                  <span>info@calhounplumbing.com</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Request Service
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2023 Calhoun Plumbing Services. All rights reserved. License #PL12345
          </div>
        </div>
      </footer>
    </div>
  );
}
