'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Owner',
      company: 'Calhoun Boutique',
      content: 'Working with Calhoun Web Design was an absolute pleasure. They took the time to understand my business needs and created a website that perfectly represents my brand. The increase in online sales has been remarkable!',
      rating: 5,
      image: '/images/testimonial-1.jpg'
    },
    {
      id: 2,
      name: 'Michael Roberts',
      position: 'CEO',
      company: 'Roberts Construction',
      content: 'Our new website has generated more leads in one month than our old site did in a year. The team at Calhoun Web Design delivered exactly what we needed - a professional website that showcases our work and converts visitors into customers.',
      rating: 5,
      image: '/images/testimonial-2.jpg'
    },
    {
      id: 3,
      name: 'Jennifer Davis',
      position: 'Marketing Director',
      company: 'Calhoun Medical Center',
      content: 'The SEO optimization services provided by Calhoun Web Design have significantly improved our online visibility. We\'re now ranking on the first page for several important keywords in our industry. Highly recommended!',
      rating: 5,
      image: '/images/testimonial-3.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_white_2px,_transparent_2px)] bg-[length:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  position: activeIndex === index ? 'relative' : 'absolute'
                }}
                transition={{ duration: 0.5 }}
                className={`bg-white text-gray-900 rounded-lg shadow-xl p-8 md:p-10 ${activeIndex !== index ? 'hidden' : ''}`}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100">
                      <img
                        src={testimonial.image || `https://ui-avatars.com/api/?name=${testimonial.name}&background=0D8ABC&color=fff`}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} />
                      ))}
                    </div>
                    <div className="relative">
                      <FaQuoteLeft className="absolute -top-2 -left-2 text-blue-100 text-4xl opacity-50" />
                      <p className="text-gray-700 text-lg italic pl-6 mb-4">{testimonial.content}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-blue-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
