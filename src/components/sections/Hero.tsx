'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import ImageBackground from './ImageBackground';
import AnimatedText from '@/components/ui/AnimatedText';

type HeroProps = {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
};

const Hero = ({
  title = "Hi, I'm John - Web Designer in Calhoun",
  subtitle = "I create engaging, conversion-focused websites with personality for small businesses in Georgia.",
  backgroundImage = "/images/hero-bg.jpg",
}: HeroProps) => {
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

  const benefits = [
    "Personalized service with direct communication",
    "Dedicated attention to your project from start to finish",
    "Mobile-optimized designs that look great on all devices",
    "Collaborative process with revisions until you're thrilled",
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <ImageBackground category="creative,design,professional" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-purple-300"
                staggerChildren={0.02}
                duration={0.5}
              />
            </div>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl relative"
            >
              <p>{subtitle}</p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mt-2"
              />
            </motion.div>

            <motion.ul variants={itemVariants} className="mb-10 space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, color: '#93c5fd' }}
                  className="flex items-center text-blue-100 transition-all duration-300"
                >
                  <div className="mr-3 bg-blue-600 p-2 rounded-full">
                    <FaCheck className="text-white" />
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
                size="lg"
                icon={<FaArrowRight />}
                iconPosition="right"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none"
              >
                Get a Free Quote
              </Button>
              <Button
                href="/portfolio"
                variant="outline"
                size="lg"
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white p-8 rounded-lg shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 text-center">
                  Let's Chat About Your Project
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Drop me a quick message and I'll get back to you within 24 hours.
                </p>

                <form className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none"
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

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[50px] md:h-[70px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
