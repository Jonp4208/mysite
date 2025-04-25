'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUtensils, FaPhone, FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa';
import { Project } from '@/data/portfolio-demos';

export default function RestaurantDemoPage({ project }: { project: Project }) {
  const router = useRouter();
  
  // Sample menu items
  const menuItems = [
    {
      id: 1,
      name: 'Southern Fried Chicken',
      description: 'Crispy fried chicken with our secret blend of spices, served with mashed potatoes and collard greens.',
      price: '$18.95',
      category: 'Main Dishes',
      image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Shrimp & Grits',
      description: 'Creamy stone-ground grits topped with sautéed shrimp, bacon, and our signature gravy.',
      price: '$21.95',
      category: 'Main Dishes',
      image: 'https://images.unsplash.com/photo-1600891963935-9e7b76c0d6a5?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Bourbon Glazed Pork Chops',
      description: 'Thick-cut pork chops with a sweet bourbon glaze, served with sweet potato casserole and green beans.',
      price: '$23.95',
      category: 'Main Dishes',
      image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Peach Cobbler',
      description: 'Warm peach cobbler with a flaky crust, topped with vanilla ice cream.',
      price: '$8.95',
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=400&auto=format&fit=crop'
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
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&h=600&auto=format&fit=crop"
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        {/* Logo Only - Navigation Hidden */}
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center">
            <div className="text-white font-bold text-2xl">SOUTHERN</div>
            <div className="text-green-400 font-bold text-2xl ml-2">SPICE</div>
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
              Southern Comfort <br />Food With Soul
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Experience authentic Southern cuisine made with locally-sourced ingredients and generations of family recipes.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 transition-colors flex items-center"
              >
                View Menu <span className="ml-2">»</span>
              </motion.button>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors flex items-center"
              >
                <FaPhone className="mr-2" /> Reserve a Table
              </motion.button>
            </div>
            
            {/* Restaurant Info */}
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center text-white">
                <FaMapMarkerAlt className="mr-2 text-green-400" />
                <span>123 Main St, Calhoun, GA</span>
              </div>
              <div className="flex items-center text-white">
                <FaClock className="mr-2 text-green-400" />
                <span>Tue-Sun: 11am-10pm</span>
              </div>
              <div className="flex items-center text-white">
                <FaPhone className="mr-2 text-green-400" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Portfolio Button - Already at the top */}
      
      {/* Demo Notice */}
      <div className="bg-green-600 text-white py-3">
        <div className="container mx-auto px-4">
          <p className="text-center">
            This is a demo website showcasing my web design capabilities for restaurant businesses. 
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
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop" 
                alt="Restaurant Interior" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Southern Spice was founded in 2010 by Chef Sarah Williams, who wanted to share her family's treasured recipes with the Calhoun community. Growing up in rural Georgia, Sarah learned the art of Southern cooking from her grandmother, who emphasized the importance of fresh ingredients and cooking with love.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, Southern Spice continues this tradition, serving up authentic Southern comfort food made from scratch daily. We source our ingredients from local farmers and producers whenever possible, ensuring the freshest flavors and supporting our community.
              </p>
              <div className="flex items-center">
                <div className="flex space-x-1 text-yellow-400 mr-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-gray-600">Rated 4.9/5 based on 250+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Menu Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Menu</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A taste of our most popular dishes, crafted with love and the finest ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-green-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-md hover:bg-green-50 transition-colors font-bold">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
      
      {/* Gallery Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Restaurant</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a peek inside our warm, inviting space where Southern hospitality meets delicious cuisine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop" 
                alt="Restaurant Interior"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop" 
                alt="Restaurant Bar"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop" 
                alt="Restaurant Food"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Reservation Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Make a Reservation</h2>
            <p className="text-xl mb-8 text-gray-300">
              Reserve your table today and experience the best of Southern cuisine in a warm, welcoming atmosphere.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Time</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500">
                    <option>Select a time</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Party Size</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500">
                    <option>Select party size</option>
                    <option>1-2 people</option>
                    <option>3-4 people</option>
                    <option>5-6 people</option>
                    <option>7+ people</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-bold">
                Reserve Now
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
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt={project.testimonial?.author} 
                  className="w-32 h-32 rounded-full mx-auto border-4 border-green-600"
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
                <div className="text-green-600">{project.testimonial?.position}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-green-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Experience Southern Comfort?</h2>
            <p className="text-xl mb-8 text-white">
              Join us for a memorable dining experience filled with delicious food, warm hospitality, and Southern charm.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 bg-white text-green-600 font-bold rounded-md hover:bg-gray-100 transition-colors"
              >
                Reserve a Table
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors"
              >
                Order Online
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
                <div className="text-white font-bold text-xl">SOUTHERN</div>
                <div className="text-green-400 font-bold text-xl ml-2">SPICE</div>
              </div>
              <p className="text-gray-400 mb-4">
                Authentic Southern cuisine made with love and the finest ingredients.
              </p>
              <div className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2 text-green-400" />
                <span>123 Main St, Calhoun, GA</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Monday</span>
                  <span>Closed</span>
                </li>
                <li className="flex justify-between">
                  <span>Tuesday - Thursday</span>
                  <span>11am - 9pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>11am - 10pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>11am - 8pm</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-green-400" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <FaUtensils className="mr-2 text-green-400" />
                  <span>info@southernspice.com</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                  Reserve a Table
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2023 Southern Spice Restaurant. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
