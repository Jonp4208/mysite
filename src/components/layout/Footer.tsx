'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jonathon Pope | Web Designer</h3>
            <p className="mb-4 text-gray-300">
              I create beautiful, personalized websites for small businesses in Calhoun, Georgia and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Portfolio</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">My Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web-design" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Web Design</Link>
              </li>
              <li>
                <Link href="/services#web-development" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Web Development</Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">E-Commerce Solutions</Link>
              </li>
              <li>
                <Link href="/services#seo" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">SEO Optimization</Link>
              </li>
              <li>
                <Link href="/services#content" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Content Creation</Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Website Maintenance</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Me</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" />
                <span className="text-gray-300">123 Main Street, Calhoun, GA 30701</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" />
                <a href="tel:+17065551234" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">(706) 555-1234</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <a href="mailto:jonathon@calhounwebcreations.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">jonathon@calhounwebcreations.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Jonathon Pope | Web Designer. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': 'John Smith',
            'jobTitle': 'Web Designer',
            'image': 'https://www.calhounwebcreations.com/images/logo.png',
            '@id': 'https://www.calhounwebcreations.com',
            'url': 'https://www.calhounwebcreations.com',
            'telephone': '+17065551234',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '123 Main Street',
              'addressLocality': 'Calhoun',
              'addressRegion': 'GA',
              'postalCode': '30701',
              'addressCountry': 'US'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': 34.5025,
              'longitude': -84.9513
            },
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
              ],
              'opens': '09:00',
              'closes': '17:00'
            },
            'sameAs': [
              'https://www.facebook.com/calhounwebcreations',
              'https://www.twitter.com/calhounweb',
              'https://www.instagram.com/calhounwebcreations',
              'https://www.linkedin.com/company/calhoun-web-creations'
            ]
          })
        }}
      />
    </footer>
  );
};

export default Footer;
