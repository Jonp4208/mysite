import { FaLaptopCode, FaShoppingCart, FaSearch, FaPencilAlt, FaServer, FaMobileAlt } from 'react-icons/fa';

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: any;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    shortDescription: 'Beautiful, modern websites designed to convert visitors into customers.',
    fullDescription: 'Our web design services focus on creating visually stunning, user-friendly websites that reflect your brand identity and drive conversions. We combine aesthetics with functionality to deliver websites that not only look great but also perform exceptionally well.',
    icon: FaLaptopCode,
    features: [
      'Custom design tailored to your brand',
      'Mobile-responsive layouts',
      'User experience (UX) optimization',
      'Conversion-focused design elements',
      'Brand consistency across all pages',
      'Fast loading speeds'
    ],
    image: '/images/service-web-design.jpg'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom web development solutions built with the latest technologies.',
    fullDescription: 'Our web development team builds robust, scalable websites using the latest technologies and best practices. We create custom solutions that meet your specific business needs, from simple informational sites to complex web applications.',
    icon: FaMobileAlt,
    features: [
      'Custom coding and development',
      'Content management system integration',
      'Progressive Web App (PWA) development',
      'API integrations',
      'Database design and management',
      'Performance optimization'
    ],
    image: '/images/service-web-development.jpg'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    shortDescription: 'Powerful online stores that drive sales and grow your business.',
    fullDescription: 'Transform your business with our e-commerce solutions designed to maximize sales and provide a seamless shopping experience. We build online stores that are easy to manage, secure, and optimized for conversions.',
    icon: FaShoppingCart,
    features: [
      'Custom e-commerce website design',
      'Shopping cart and checkout optimization',
      'Payment gateway integration',
      'Inventory management systems',
      'Product catalog setup',
      'Order management and fulfillment'
    ],
    image: '/images/service-ecommerce.jpg'
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    shortDescription: 'Improve your search engine rankings and drive more organic traffic.',
    fullDescription: 'Our SEO services help your website rank higher in search engine results, driving more qualified traffic to your site. We use proven strategies to improve your visibility for relevant keywords in your industry and location.',
    icon: FaSearch,
    features: [
      'Keyword research and analysis',
      'On-page SEO optimization',
      'Local SEO for Calhoun businesses',
      'Content strategy and creation',
      'Technical SEO improvements',
      'Performance tracking and reporting'
    ],
    image: '/images/service-seo.jpg'
  },
  {
    id: 'content',
    title: 'Content Creation',
    shortDescription: 'Engaging content that tells your story and connects with your audience.',
    fullDescription: 'Our content creation services help you communicate your message effectively and engage your target audience. We create compelling content that tells your story, showcases your expertise, and drives action.',
    icon: FaPencilAlt,
    features: [
      'Website copywriting',
      'Blog post creation',
      'Product descriptions',
      'Email marketing content',
      'Social media content',
      'Video script writing'
    ],
    image: '/images/service-content.jpg'
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    shortDescription: 'Keep your website secure, up-to-date, and running smoothly.',
    fullDescription: 'Our website maintenance services ensure your site remains secure, up-to-date, and performing optimally. We handle all the technical aspects of website maintenance so you can focus on running your business.',
    icon: FaServer,
    features: [
      'Regular software updates',
      'Security monitoring and protection',
      'Performance optimization',
      'Backup and recovery',
      'Content updates and changes',
      'Technical support and troubleshooting'
    ],
    image: '/images/service-maintenance.jpg'
  }
];
