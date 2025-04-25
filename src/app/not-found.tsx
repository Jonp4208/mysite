'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaSearch } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-6">404</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-100 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              <FaHome className="text-blue-600" />
              Back to Home
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              <FaSearch className="text-blue-300" />
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
