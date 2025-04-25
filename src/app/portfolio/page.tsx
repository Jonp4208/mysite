'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio-demos';
import LocalBusiness from '@/components/sections/LocalBusiness';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'fitness', label: 'Gym & Fitness' },
    { id: 'automotive', label: 'Car Dealerships' },
    { id: 'photography', label: 'Wedding Photography' },
    { id: 'restaurant', label: 'Restaurants' },
    { id: 'retail', label: 'Retail & Shops' },
    { id: 'service', label: 'Service Businesses' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const activeProjectData = activeProject
    ? projects.find(project => project.id === activeProject)
    : null;

  const handleProjectClick = (projectId: string) => {
    setActiveProject(projectId);

    // Smooth scroll to the project details section
    setTimeout(() => {
      const detailsSection = document.getElementById('project-details');
      if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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
              My Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Here are some examples of websites I've designed for small businesses in Calhoun, Georgia and surrounding areas.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-5 py-2 rounded-full transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.images.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 relative">
                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.date}</span>
                    <button
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Details <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-blue-100 mb-6">{project.description}</p>
                    <span className="inline-flex items-center justify-center px-5 py-2 border border-white text-base font-medium rounded-md text-white">
                      View Details <FaArrowRight className="ml-2" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      {activeProjectData && (
        <section id="project-details" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              {/* Hero Image */}
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={activeProjectData.images.main}
                  alt={activeProjectData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="container mx-auto">
                    <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                      {activeProjectData.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{activeProjectData.title}</h2>
                    <p className="text-xl text-blue-200 mb-4">{activeProjectData.client}</p>

                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {activeProjectData.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    {/* Project Overview */}
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Project Overview</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">{activeProjectData.description}</p>

                      {/* Image Gallery */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {activeProjectData.images.gallery.map((image, index) => (
                          <div key={index} className="rounded-lg overflow-hidden shadow-md h-48">
                            <img
                              src={image}
                              alt={`${activeProjectData.title} gallery ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenge, Solution, Results */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h4>
                        <p className="text-gray-700">{activeProjectData.challenge}</p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">My Solution</h4>
                        <p className="text-gray-700">{activeProjectData.solution}</p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">The Results</h4>
                        <p className="text-gray-700">{activeProjectData.results}</p>
                      </div>
                    </div>

                    {/* Visit Website Button */}
                    {activeProjectData.link && (
                      <a
                        href={activeProjectData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-md"
                      >
                        Visit Demo Website <FaExternalLinkAlt className="ml-2" />
                      </a>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div>
                    {/* Project Details */}
                    <div className="bg-gray-50 rounded-xl p-6 shadow-sm mb-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Project Details</h4>
                      <ul className="space-y-4">
                        <li className="flex justify-between items-center">
                          <span className="text-gray-600">Client:</span>
                          <span className="font-medium text-gray-900">{activeProjectData.client}</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-gray-600">Category:</span>
                          <span className="font-medium text-gray-900 capitalize">{activeProjectData.category}</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium text-gray-900">{activeProjectData.date}</span>
                        </li>
                      </ul>
                    </div>

                    {/* Key Features */}
                    <div className="bg-gray-50 rounded-xl p-6 shadow-sm mb-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Key Features</h4>
                      <ul className="space-y-3">
                        {activeProjectData.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    {activeProjectData.testimonial && (
                      <div className="bg-blue-50 rounded-xl p-6 shadow-sm border-l-4 border-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <blockquote className="text-lg italic text-gray-700 mb-4 leading-relaxed">
                          "{activeProjectData.testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center mt-6">
                          <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                            {activeProjectData.testimonial.author.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{activeProjectData.testimonial.author}</div>
                            <div className="text-blue-600">{activeProjectData.testimonial.position}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Website?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how I can help your business stand out online with a custom website designed specifically for your needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* LocalBusiness Schema for SEO */}
      <LocalBusiness />
    </>
  );
}
