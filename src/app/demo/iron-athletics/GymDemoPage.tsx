'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPlay, FaStar } from 'react-icons/fa';
import { Project } from '@/data/portfolio-demos';

export default function GymDemoPage({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
            <div className="text-orange-500 font-bold text-2xl mr-2">FFL</div>
            <div className="h-6 w-6 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="h-2 w-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Push Your <br />Limits with Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              From beginner to advanced, experience workouts designed to help you achieve peak performance and exceed your fitness goals.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 transition-colors flex items-center"
              >
                Join Now <span className="ml-2">»</span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors flex items-center"
              >
                <FaPlay className="mr-2" /> Watch Video
              </motion.button>
            </div>

            {/* Testimonial Avatars */}
            <div className="mt-12">
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Member" className="w-12 h-12 rounded-full border-2 border-orange-500" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Member" className="w-12 h-12 rounded-full border-2 border-orange-500" />
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Member" className="w-12 h-12 rounded-full border-2 border-orange-500" />
                  <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-orange-500 flex items-center justify-center text-sm">+</div>
                </div>
                <div className="ml-4">
                  <div className="flex text-orange-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="text-sm text-gray-400">174 reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              <button className="bg-gray-800/80 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition-colors">
                Personal Training
              </button>
              <button className="bg-gray-800/80 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition-colors">
                Strength
              </button>
              <button className="bg-gray-800/80 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition-colors">
                Group Classes
              </button>
              <button className="bg-gray-800/80 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition-colors">
                Swimming
              </button>
              <button className="bg-gray-800/80 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition-colors">
                Cardio Equipment
              </button>
              <button className="bg-gray-800/80 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition-colors">
                Functional Workouts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Portfolio Button - Already at the top */}

      {/* Demo Notice */}
      <div className="bg-orange-500 text-white py-3">
        <div className="container mx-auto px-4">
          <p className="text-center">
            This is a demo website showcasing my web design capabilities for fitness businesses.
            <a href="/contact" className="underline ml-2 font-bold">Contact me</a> to create a similar site for your business.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience state-of-the-art equipment and expert training in a motivating environment designed to help you reach your fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature}</h3>
                <p className="text-gray-400">
                  Our {feature.toLowerCase()} are designed to maximize your results and provide an exceptional fitness experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Take a look at our modern, well-equipped gym designed to inspire and motivate you on your fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.gallery.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} gallery ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt={project.testimonial?.author}
                  className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500"
                />
              </div>
              <div className="md:w-2/3 md:pl-10">
                <div className="flex text-orange-500 mb-4">
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
                <div className="text-orange-500">{project.testimonial?.position}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-500 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
            <p className="text-xl mb-8">
              Join our community today and experience the difference of training with professionals who care about your success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 bg-white text-orange-500 font-bold rounded-md hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
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
              <div className="text-orange-500 font-bold text-2xl mr-2">FFL</div>
              <div className="h-6 w-6 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="h-2 w-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-gray-400">
              © 2023 FitLife Fitness. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
