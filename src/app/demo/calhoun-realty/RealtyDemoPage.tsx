'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaSearch, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Project } from '@/data/portfolio-demos';
import { useState } from 'react';

export default function RealtyDemoPage({ project }: { project: Project }) {
  const router = useRouter();
  const [favorited, setFavorited] = useState(false);

  // Sample featured properties
  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      address: '123 Highland Drive, Calhoun',
      price: '$1,250,000',
      beds: 5,
      baths: 4.5,
      sqft: '4,200',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Elegant Waterfront Estate',
      address: '456 Lakeview Road, Calhoun',
      price: '$2,850,000',
      beds: 6,
      baths: 5.5,
      sqft: '6,800',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Contemporary Mountain Retreat',
      address: '789 Summit View, Calhoun',
      price: '$1,750,000',
      beds: 4,
      baths: 3.5,
      sqft: '3,900',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db3d?q=80&w=600&auto=format&fit=crop'
    }
  ];

  // Sample agents
  const agents = [
    {
      id: 1,
      name: 'Elizabeth Parker',
      title: 'Principal Broker',
      image: 'https://randomuser.me/api/portraits/women/23.jpg',
      properties: 42,
      specialization: 'Luxury Estates'
    },
    {
      id: 2,
      name: 'Michael Reynolds',
      title: 'Senior Agent',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      properties: 38,
      specialization: 'Waterfront Properties'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      title: 'Luxury Specialist',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      properties: 29,
      specialization: 'Historic Homes'
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
            src={project.images.main}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Logo Only - Navigation Hidden */}
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center">
            <div className="text-white font-bold text-2xl">CALHOUN</div>
            <div className="text-blue-400 font-light text-2xl ml-2">LUXURY REALTY</div>
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
              Find Your <br />Dream Home
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Discover exceptional properties in Calhoun's most desirable neighborhoods. Experience luxury living at its finest.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg mb-8"
            >
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option>All Neighborhoods</option>
                      <option>Highland Estates</option>
                      <option>Lakeview Heights</option>
                      <option>Riverside Manor</option>
                      <option>Summit Ridge</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Price Range</label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option>Any Price</option>
                      <option>$500,000 - $1,000,000</option>
                      <option>$1,000,000 - $2,000,000</option>
                      <option>$2,000,000 - $5,000,000</option>
                      <option>$5,000,000+</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center min-w-[120px] self-end">
                  <FaSearch className="mr-2" /> Search
                </button>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors flex items-center"
              >
                View Properties <span className="ml-2">»</span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors flex items-center"
              >
                <FaMapMarkerAlt className="mr-2" /> Explore Areas
              </motion.button>
            </div>
          </div>
        </div>

        {/* Property Stats */}
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <div className="text-3xl font-bold text-white">250+</div>
                <div className="text-blue-300">Luxury Properties</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-blue-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-blue-300">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <div className="text-3xl font-bold text-white">12</div>
                <div className="text-blue-300">Expert Agents</div>
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
            This is a demo website showcasing my web design capabilities for real estate businesses.
            <a href="/contact" className="underline ml-2 font-bold">Contact me</a> to create a similar site for your business.
          </p>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our handpicked selection of exceptional properties, each offering luxury, comfort, and prestige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                  <button
                    className="absolute top-4 left-4 bg-white/80 p-2 rounded-full text-red-500 hover:bg-white transition-colors"
                    onClick={() => setFavorited(!favorited)}
                  >
                    {favorited ? <FaHeart /> : <FaRegHeart />}
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapMarkerAlt className="mr-2 text-blue-600" />
                    {property.address}
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="text-blue-600 font-bold text-xl">{property.price}</div>
                  </div>
                  <div className="flex justify-between text-gray-600 mb-6">
                    <div className="flex items-center">
                      <FaBed className="mr-1" /> {property.beds}
                    </div>
                    <div className="flex items-center">
                      <FaBath className="mr-1" /> {property.baths}
                    </div>
                    <div className="flex items-center">
                      <FaRulerCombined className="mr-1" /> {property.sqft} sq ft
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors font-bold">
              View All Properties
            </button>
          </div>
        </div>
      </div>

      {/* Areas Section */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore Neighborhoods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Calhoun's most prestigious neighborhoods and find the perfect location for your dream home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop"
                alt="Highland Estates"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Highland Estates</h3>
                <p className="text-blue-300 mb-4">Starting at $1.2M</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  View Properties
                </button>
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?q=80&w=600&auto=format&fit=crop"
                alt="Lakeview Heights"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Lakeview Heights</h3>
                <p className="text-blue-300 mb-4">Starting at $1.5M</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  View Properties
                </button>
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop"
                alt="Riverside Manor"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Riverside Manor</h3>
                <p className="text-blue-300 mb-4">Starting at $2.2M</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  View Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agents Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Agents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experienced luxury real estate professionals is dedicated to providing exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{agent.name}</h3>
                  <div className="text-blue-600 mb-4">{agent.title}</div>
                  <div className="flex justify-between text-gray-600 mb-6">
                    <div>Specialization: {agent.specialization}</div>
                    <div>{agent.properties} Properties</div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                    Contact Agent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <img
                  src="https://randomuser.me/api/portraits/women/23.jpg"
                  alt={project.testimonial?.author}
                  className="w-32 h-32 rounded-full mx-auto border-4 border-blue-600"
                />
              </div>
              <div className="md:w-2/3 md:pl-10">
                <div className="flex text-yellow-500 mb-4">
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
                <div className="text-blue-600">{project.testimonial?.position}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Find Your Dream Home?</h2>
            <p className="text-xl mb-8 text-blue-200">
              Contact our team today to schedule a private showing or to discuss your real estate needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 bg-white text-blue-900 font-bold rounded-md hover:bg-gray-100 transition-colors"
              >
                Schedule a Showing
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-white font-bold text-xl">CALHOUN</div>
              <div className="text-blue-400 font-light text-xl ml-2">LUXURY REALTY</div>
            </div>
            <div className="text-gray-400">
              © 2023 Calhoun Luxury Realty. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
