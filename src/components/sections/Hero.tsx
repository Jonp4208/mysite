'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaCheck, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import ImageBackground from './ImageBackground';
import AnimatedText from '@/components/ui/AnimatedText';
import { useState, useEffect } from 'react';

type HeroProps = {
  title?: string;
  subtitle?: string;
};

const Hero = ({
  title = "Hi, I'm John - Web Designer in Calhoun",
  subtitle = "I create engaging, conversion-focused websites with personality for small businesses in Georgia."
}: HeroProps) => {
  // State for mobile form visibility
  const [showMobileForm, setShowMobileForm] = useState(false);

  // Check if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Updated benefits with more outcome-focused language
  const benefits = [
    "Websites that generate more leads and increase sales",
    "Custom designs that reflect your unique brand identity",
    "Mobile-optimized sites that rank higher in Google",
    "Ongoing support to help your business grow online",
  ];

  return (
    <div className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay - Using local Calhoun imagery */}
      <ImageBackground
        category="calhoun,georgia"
        localImage={true}
        overlayColor="from-gray-900/75 to-indigo-900/70"
      />

      {/* Local Landmark Silhouette - Visual distinction for hero section */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] md:h-[200px] z-[1] opacity-40 bg-contain bg-bottom bg-no-repeat"
           style={{ backgroundImage: "url('/images/calhoun/calhoun-skyline-authentic.svg')" }}>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        {/* Local Badge - Enhancing local focus - Positioned to avoid header overlap */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8"
        >
          <FaMapMarkerAlt className="text-blue-300" />
          <span className="text-white text-sm font-medium">Proudly serving Calhoun, GA</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <div className="relative">
              <AnimatedText
                text={title}
                tag="h1"
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-purple-300"
                staggerChildren={0.02}
                duration={0.5}
              />
            </div>

            <motion.div
              variants={itemVariants}
              className="text-lg md:text-xl text-blue-100 mb-6 max-w-2xl relative"
            >
              <p>{subtitle}</p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mt-2"
              />
            </motion.div>

            {/* Client Trust Indicator */}
            <motion.div
              variants={itemVariants}
              className="mb-8 flex items-center"
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <span className="ml-2 text-blue-100 text-sm">Trusted by 20+ businesses in Calhoun</span>
            </motion.div>

            <motion.ul variants={itemVariants} className="mb-6 space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, color: '#93c5fd' }}
                  className="flex items-center text-blue-100 transition-all duration-300 text-sm md:text-base"
                >
                  <div className="mr-2 bg-blue-600 p-1.5 rounded-full">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon={<FaArrowRight />}
                iconPosition="right"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none py-2 px-4"
                onClick={() => isMobile && setShowMobileForm(true)}
              >
                Get a Free Quote
              </Button>
              <Button
                href="/portfolio"
                variant="outline"
                size="md"
                className="bg-white/10 border-white text-white hover:bg-white/20 py-2 px-4"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Desktop Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white p-6 rounded-lg shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>

              <div className="relative">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-1 text-center">
                  Let's Chat About Your Project
                </h3>
                <p className="text-gray-600 mb-4 text-center text-sm">
                  Drop me a quick message and I'll get back to you within 24 hours.
                </p>

                <form className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <select
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">What do you need help with?</option>
                      <option value="new-website">New Website Design</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="ecommerce">E-Commerce Website</option>
                      <option value="other">Other Services</option>
                    </select>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="pt-2"
                  >
                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      size="md"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none py-2"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Contact Form - Mobile Optimization */}
      {isMobile && showMobileForm && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-xl shadow-2xl p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Get a Free Quote</h3>
            <button
              onClick={() => setShowMobileForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      )}

      {/* Custom Wave Divider - Visual Distinction */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-[2]">
        <svg
          className="relative block w-full h-[30px] md:h-[40px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified wave for cleaner look */}
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
