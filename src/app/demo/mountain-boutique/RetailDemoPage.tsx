'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaShoppingBag, FaHeart, FaRegHeart, FaTruck, FaUndo, FaLock } from 'react-icons/fa';
import { Project } from '@/data/portfolio-demos';
import { useState, useEffect } from 'react';

// Helper function to get category images
const getCategoryImage = (categoryName: string): string => {
  switch (categoryName.toLowerCase()) {
    case 'women':
      return 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=600&auto=format&fit=crop';
    case 'men':
      return 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=600&auto=format&fit=crop';
    case 'accessories':
      return 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop';
    case 'footwear':
      return 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop';
    case 'home':
      return 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop';
    default:
      return 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop';
  }
};

export default function RetailDemoPage({ project }: { project: Project }) {
  const router = useRouter();
  // Use useEffect to initialize state after hydration
  const [favorited, setFavorited] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Mountain Sunset Sweater',
      price: '$89.99',
      originalPrice: '$119.99',
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Alpine Hiking Boots',
      price: '$149.99',
      category: 'Footwear',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Wilderness Backpack',
      price: '$79.99',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Cozy Cabin Scarf',
      price: '$34.99',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=600&auto=format&fit=crop'
    }
  ];

  // Sample categories
  const categories = [
    { name: 'Women', count: 42 },
    { name: 'Men', count: 38 },
    { name: 'Accessories', count: 24 },
    { name: 'Footwear', count: 16 },
    { name: 'Home', count: 20 }
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
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&h=600&auto=format&fit=crop"
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Logo Only - Navigation Hidden */}
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center">
            <div className="text-white font-bold text-2xl">MOUNTAIN</div>
            <div className="text-pink-400 font-bold text-2xl ml-2">BOUTIQUE</div>
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
              Fall Collection <br />2023
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Discover our new mountain-inspired collection, featuring cozy knits, rugged accessories, and timeless pieces for your mountain lifestyle.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-pink-600 text-white px-8 py-4 rounded-md hover:bg-pink-700 transition-colors flex items-center"
              >
                Shop Now <span className="ml-2">»</span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors flex items-center"
              >
                <FaShoppingBag className="mr-2" /> View Catalog
              </motion.button>
            </div>

            {/* Promo Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block"
            >
              <p className="text-white font-medium">
                <span className="text-pink-400 font-bold">FREE SHIPPING</span> on orders over $75 • Use code <span className="font-bold">FALL23</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
                New Arrivals
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
                Women
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
                Men
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
                Accessories
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
                Sale
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Portfolio Button - Already at the top */}

      {/* Demo Notice */}
      <div className="bg-pink-600 text-white py-3">
        <div className="container mx-auto px-4">
          <p className="text-center">
            This is a demo website showcasing my web design capabilities for retail businesses.
            <a href="/contact" className="underline ml-2 font-bold">Contact me</a> to create a similar site for your business.
          </p>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our handpicked selection of mountain-inspired clothing and accessories for your next adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Sale
                    </div>
                  )}
                  <button
                    className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-gray-700 hover:text-pink-600 hover:bg-white transition-colors"
                    onClick={() => setFavorited(!favorited)}
                  >
                    {isClient && (favorited ? <FaHeart className="text-pink-600" /> : <FaRegHeart />)}
                  </button>
                </div>
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-1">{product.category}</div>
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-lg font-bold text-pink-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="ml-2 text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-pink-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-md hover:bg-gray-900 hover:text-white transition-colors font-bold">
              View All Products
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our collections by category to find exactly what you're looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={getCategoryImage(category.name)}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-pink-300">{category.count} Products</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTruck className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Free Shipping</h3>
              <p className="text-gray-600">
                Free shipping on all orders over $75. Fast delivery to your doorstep.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUndo className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Easy Returns</h3>
              <p className="text-gray-600">
                30-day hassle-free returns. If you're not satisfied, we'll make it right.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLock className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Secure Checkout</h3>
              <p className="text-gray-600">
                Your payment information is always secure with our encrypted checkout.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Newsletter</h2>
            <p className="text-xl mb-8 text-gray-300">
              Subscribe to receive updates on new arrivals, special offers, and seasonal style tips.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-900"
              />
              <button className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
            </p>
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
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt={project.testimonial?.author}
                  className="w-32 h-32 rounded-full mx-auto border-4 border-pink-600"
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
                <div className="text-pink-600">{project.testimonial?.position}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-pink-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Elevate Your Mountain Style?</h2>
            <p className="text-xl mb-8 text-white">
              Explore our collections and find the perfect pieces for your mountain lifestyle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 bg-white text-pink-600 font-bold rounded-md hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors"
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-white font-bold text-xl">MOUNTAIN</div>
                <div className="text-pink-400 font-bold text-xl ml-2">BOUTIQUE</div>
              </div>
              <p className="text-gray-400 mb-4">
                Your destination for mountain-inspired fashion and accessories in Calhoun, Georgia.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Women</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Men</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Sale</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Size Guide</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2023 Mountain Boutique. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
