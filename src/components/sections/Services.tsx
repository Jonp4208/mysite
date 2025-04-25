'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaLaptopCode, FaShoppingCart, FaSearch, FaPencilAlt, FaServer, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'I create beautiful, modern websites designed to convert visitors into customers. I focus on user experience and your unique brand identity.',
      icon: <FaLaptopCode size={36} />,
      href: '/services#web-design'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'I build custom web solutions with the latest technologies. Your site will be fast, responsive, and secure - without the big agency price tag.',
      icon: <FaMobileAlt size={36} />,
      href: '/services#web-development'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Solutions',
      description: 'I can help you sell online with a store that\'s easy to manage. As a solo developer, I provide personalized setup and training to get you started.',
      icon: <FaShoppingCart size={36} />,
      href: '/services#ecommerce'
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      description: 'I\'ll help your business get found in local searches. I use proven SEO techniques specifically tailored for small businesses in Calhoun and surrounding areas.',
      icon: <FaSearch size={36} />,
      href: '/services#seo'
    },
    {
      id: 'content',
      title: 'Content Creation',
      description: 'I\'ll help craft content that tells your unique story and connects with your audience. I work with you to find your authentic voice that resonates with customers.',
      icon: <FaPencilAlt size={36} />,
      href: '/services#content'
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance',
      description: 'I offer affordable monthly maintenance to keep your site secure and up-to-date. Unlike big agencies, you\'ll work directly with me - the person who built your site.',
      icon: <FaServer size={36} />,
      href: '/services#maintenance'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer creative, personalized web design and development services to help your business stand out online.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card
                title={service.title}
                icon={service.icon}
                href={service.href}
                hoverEffect={true}
                className="h-full"
              >
                <p className="mb-4">{service.description}</p>
                <Button
                  href={service.href}
                  variant="ghost"
                  className="mt-2 text-blue-600 hover:text-blue-700 p-0"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            href="/services"
            variant="primary"
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none"
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
