'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
};

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 'project1',
      title: 'Calhoun Boutique',
      category: 'ecommerce',
      image: '/images/portfolio-1.jpg',
      description: 'E-commerce website for a local boutique with online shopping capabilities.',
      link: '/portfolio/calhoun-boutique'
    },
    {
      id: 'project2',
      title: 'Roberts Construction',
      category: 'business',
      image: '/images/portfolio-2.jpg',
      description: 'Corporate website for a construction company showcasing their services and projects.',
      link: '/portfolio/roberts-construction'
    },
    {
      id: 'project3',
      title: 'Calhoun Medical Center',
      category: 'healthcare',
      image: '/images/portfolio-3.jpg',
      description: 'Healthcare website with appointment scheduling and patient portal integration.',
      link: '/portfolio/calhoun-medical'
    },
    {
      id: 'project4',
      title: 'Mountain View Restaurant',
      category: 'restaurant',
      image: '/images/portfolio-4.jpg',
      description: 'Restaurant website with online menu, reservations, and ordering system.',
      link: '/portfolio/mountain-view'
    },
    {
      id: 'project5',
      title: 'Georgia Real Estate Group',
      category: 'real-estate',
      image: '/images/portfolio-5.jpg',
      description: 'Real estate website with property listings and agent profiles.',
      link: '/portfolio/georgia-real-estate'
    },
    {
      id: 'project6',
      title: 'Calhoun Fitness Center',
      category: 'fitness',
      image: '/images/portfolio-6.jpg',
      description: 'Fitness center website with class schedules and membership management.',
      link: '/portfolio/calhoun-fitness'
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'business', label: 'Business' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'fitness', label: 'Fitness' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent web design and development projects for businesses in Calhoun and beyond.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                filter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || `https://source.unsplash.com/600x400/?${project.category.replace('-', ',')},website`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-blue-200 text-sm capitalize">{project.category}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-600/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-100 mb-4">{project.description}</p>
                  <Button
                    href={project.link}
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button href="/portfolio" variant="primary" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
