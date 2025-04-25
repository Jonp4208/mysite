'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPlay, FaStar, FaSearch, FaCar, FaTools, FaMoneyBillWave, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { Project } from '@/data/portfolio-demos';

export default function CarDemoPage({ project }: { project: Project }) {
  const router = useRouter();

  // Sample featured cars
  const featuredCars = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      price: '$89,900',
      year: '2023',
      mileage: '1,200 mi',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'BMW 7 Series',
      price: '$84,500',
      year: '2023',
      mileage: '950 mi',
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Audi A8',
      price: '$78,200',
      year: '2023',
      mileage: '1,450 mi',
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        {/* Logo Only - Navigation Hidden */}
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center">
            <div className="text-red-600 font-bold text-2xl">PRESTIGE</div>
            <div className="text-white font-light text-2xl ml-2">AUTO</div>
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
              Luxury Redefined
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Experience the pinnacle of automotive excellence with our curated selection of premium vehicles. Discover your dream car today.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-4 rounded-lg shadow-lg mb-8"
            >
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Make & Model</label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option>Any Make</option>
                      <option>Mercedes-Benz</option>
                      <option>BMW</option>
                      <option>Audi</option>
                      <option>Lexus</option>
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
                      <option>$30,000 - $50,000</option>
                      <option>$50,000 - $70,000</option>
                      <option>$70,000 - $100,000</option>
                      <option>$100,000+</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center min-w-[120px] self-end">
                  <FaSearch className="mr-2" /> Search
                </button>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-colors flex items-center"
              >
                View Inventory <span className="ml-2">»</span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors flex items-center"
              >
                <FaPlay className="mr-2" /> Virtual Tour
              </motion.button>
            </div>

            {/* Testimonial */}
            <div className="mt-12">
              <div className="flex items-center">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="ml-4 text-white">
                  <span className="font-bold">4.9/5</span> <span className="text-sm text-gray-400">(128 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              <button className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
                New Vehicles
              </button>
              <button className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
                Pre-Owned
              </button>
              <button className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
                Luxury Sedans
              </button>
              <button className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
                SUVs
              </button>
              <button className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
                Sports Cars
              </button>
              <button className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
                Electric Vehicles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Portfolio Button - Already at the top */}

      {/* Demo Notice */}
      <div className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4">
          <p className="text-center">
            This is a demo website showcasing my web design capabilities for automotive businesses.
            <a href="/contact" className="underline ml-2 font-bold">Contact me</a> to create a similar site for your business.
          </p>
        </div>
      </div>

      {/* Featured Vehicles Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Vehicles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our handpicked selection of premium vehicles, each offering exceptional performance, luxury, and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                  <div className="flex justify-between mb-4">
                    <div className="text-gray-600">{car.year} • {car.mileage}</div>
                    <div className="text-red-600 font-bold text-xl">{car.price}</div>
                  </div>
                  <div className="flex space-x-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">Leather Seats</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">Navigation</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">Bluetooth</span>
                  </div>
                  <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-md hover:bg-red-50 transition-colors font-bold">
              View All Inventory
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of services to ensure your vehicle ownership experience is nothing short of exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <FaCar className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Vehicle Sales</h3>
              <p className="text-gray-600 mb-4">
                Browse our extensive inventory of new and pre-owned luxury vehicles, each meticulously inspected to meet our rigorous standards.
              </p>
              <a href="#" className="text-red-600 font-bold hover:text-red-700 transition-colors">Learn More »</a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <FaMoneyBillWave className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Financing Options</h3>
              <p className="text-gray-600 mb-4">
                Our finance experts work with multiple lenders to secure competitive rates and flexible terms tailored to your specific needs.
              </p>
              <a href="#" className="text-red-600 font-bold hover:text-red-700 transition-colors">Learn More »</a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <FaTools className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Service & Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Our certified technicians use state-of-the-art equipment and genuine parts to keep your vehicle performing at its best.
              </p>
              <a href="#" className="text-red-600 font-bold hover:text-red-700 transition-colors">Learn More »</a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Extended Warranties</h3>
              <p className="text-gray-600 mb-4">
                Protect your investment with our comprehensive warranty options, providing peace of mind for years to come.
              </p>
              <a href="#" className="text-red-600 font-bold hover:text-red-700 transition-colors">Learn More »</a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <FaUsers className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Concierge Services</h3>
              <p className="text-gray-600 mb-4">
                Experience white-glove treatment with our concierge services, including vehicle delivery, pickup for service, and more.
              </p>
              <a href="#" className="text-red-600 font-bold hover:text-red-700 transition-colors">Learn More »</a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <FaCar className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Trade-In Appraisal</h3>
              <p className="text-gray-600 mb-4">
                Get a fair and competitive offer for your current vehicle with our transparent trade-in appraisal process.
              </p>
              <a href="#" className="text-red-600 font-bold hover:text-red-700 transition-colors">Learn More »</a>
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
                  className="w-32 h-32 rounded-full mx-auto border-4 border-red-600"
                />
              </div>
              <div className="md:w-2/3 md:pl-10">
                <div className="flex text-yellow-500 mb-4">
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
                <div className="text-red-600">{project.testimonial?.position}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Find Your Dream Car?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Visit our showroom today or schedule a personalized consultation with one of our automotive experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors"
              >
                Schedule Test Drive
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
              <div className="text-red-600 font-bold text-2xl">PRESTIGE</div>
              <div className="text-white font-light text-2xl ml-2">AUTO</div>
            </div>
            <div className="text-gray-400">
              © 2023 Prestige Auto Group. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
