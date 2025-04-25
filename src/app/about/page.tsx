'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import LocalBusiness from '@/components/sections/LocalBusiness';
import { FaCheck, FaQuoteLeft } from 'react-icons/fa';

export default function AboutPage() {
  // Skills for the About page
  const skills = [
    { name: 'Web Design', level: 95 },
    { name: 'Web Development', level: 90 },
    { name: 'Responsive Design', level: 98 },
    { name: 'SEO Optimization', level: 85 },
    { name: 'WordPress', level: 92 },
    { name: 'E-Commerce', level: 88 },
  ];

  const values = [
    {
      title: 'Personal Attention',
      description: 'I work directly with each client, ensuring your project gets the focused attention it deserves - no account managers or middlemen.'
    },
    {
      title: 'Quality Craftsmanship',
      description: 'I take pride in my work, paying attention to every detail to create websites that truly represent your business and brand.'
    },
    {
      title: 'Results-Driven',
      description: 'I focus on creating websites that not only look great but also drive real business results for your specific goals.'
    },
    {
      title: 'Continuous Learning',
      description: 'I stay up-to-date with the latest web technologies and design trends to deliver modern, effective solutions.'
    },
    {
      title: 'Honest Communication',
      description: 'I believe in straightforward, jargon-free conversations and keeping you informed throughout the entire process.'
    },
    {
      title: 'Local Focus',
      description: 'As a Calhoun resident, I understand our local market and am committed to helping our community businesses thrive online.'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Hi, I'm John Smith - a freelance web designer helping small businesses in Calhoun, Georgia succeed online.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Hi there! I'm John, a freelance web designer based in Calhoun, Georgia. My journey into web design began over 15 years ago when I built my first website for a local coffee shop while still in college.
                </p>
                <p>
                  After spending several years working for tech companies in Atlanta, I decided to return to my hometown of Calhoun in 2020 to focus on what I love most - helping small businesses succeed online through thoughtful, effective web design.
                </p>
                <p>
                  As a solo freelancer, I'm able to provide personalized service that larger agencies simply can't match. When you work with me, you're working directly with the person designing and building your website - no account managers or complicated communication chains.
                </p>
                <p>
                  I've had the privilege of helping dozens of local businesses in Calhoun and surrounding areas transform their online presence. I take pride in building relationships with my clients and seeing their businesses grow through effective websites.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://source.unsplash.com/600x400/?web,designer,portrait"
                  alt="John Smith - Web Designer"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-lg font-bold mb-2">My Mission</p>
                <p>To create beautiful, personalized websites that help local businesses connect with customers and grow their online presence.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These core principles guide how I approach every project and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Skills</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              With over 15 years of experience, I've developed expertise in all aspects of web design and development.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="flex justify-between mb-1">
                  <span className="text-lg font-medium text-gray-900">{skill.name}</span>
                  <span className="text-lg font-medium text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    className="bg-blue-600 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              I'm constantly learning and expanding my skillset to stay current with the latest web technologies and design trends.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Me</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Here's what sets me apart from larger web design agencies and other freelancers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">Local Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Based in Calhoun, Georgia</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Understanding of the local market</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Face-to-face meetings available</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Supporting local businesses</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">Quality & Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>15+ years of industry experience</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Custom designs, not templates</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Latest web technologies</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Attention to detail</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">Results-Focused</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Conversion-optimized designs</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>SEO best practices</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Performance monitoring</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Ongoing support & optimization</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What My Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what some of my clients have to say about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                    <img
                      src={testimonial.image || `https://ui-avatars.com/api/?name=${testimonial.name}&background=0D8ABC&color=fff`}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-blue-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-blue-100 text-4xl opacity-50" />
                  <p className="text-gray-700 italic pl-6 mb-4">{testimonial.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Work With Me
            </a>
          </div>
        </div>
      </section>

      {/* LocalBusiness Schema for SEO */}
      <LocalBusiness />
    </>
  );
}
