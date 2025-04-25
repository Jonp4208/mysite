'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-red-400 mb-6 flex justify-center">
            <FaExclamationTriangle className="text-7xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Something went wrong!</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-blue-200 text-lg mb-8">
            We apologize for the inconvenience. Please try again or return to the home page.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-100 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Try Again
            </button>
            <Link href="/" className="inline-flex items-center justify-center gap-2 bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              <FaHome className="text-blue-300" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
