export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  features: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  images: {
    thumbnail: string;
    main: string;
    gallery: string[];
  };
  link?: string;
  date: string;
};

export const projects: Project[] = [
  {
    id: 'calhoun-boutique',
    title: 'Calhoun Boutique',
    client: 'Calhoun Boutique',
    category: 'ecommerce',
    description: 'A modern e-commerce website for a local boutique in Calhoun, Georgia, featuring a clean design and seamless shopping experience.',
    challenge: 'Calhoun Boutique needed an online store that would showcase their products beautifully while making it easy for customers to browse and purchase items. They wanted a website that reflected their brand identity and provided a seamless shopping experience on both desktop and mobile devices.',
    solution: 'We designed and developed a custom e-commerce website using Shopify, with a focus on high-quality product photography and an intuitive user interface. The site features a responsive design, fast loading times, and secure checkout process.',
    results: 'Since launching the new website, Calhoun Boutique has seen a 45% increase in online sales and a 30% reduction in cart abandonment. The mobile-friendly design has also led to a 60% increase in mobile conversions.',
    technologies: ['Shopify', 'HTML5', 'CSS3', 'JavaScript', 'Liquid'],
    features: [
      'Custom product catalog',
      'Integrated payment processing',
      'Mobile-responsive design',
      'Product filtering and search',
      'Customer account management',
      'Inventory management system'
    ],
    testimonial: {
      quote: 'The team at Calhoun Web Design created a beautiful online store that perfectly represents our brand. Our customers love how easy it is to shop on our new website, and we\'ve seen a significant increase in online sales.',
      author: 'Sarah Johnson',
      position: 'Owner, Calhoun Boutique'
    },
    images: {
      thumbnail: '/images/portfolio-1.jpg',
      main: '/images/portfolio-1-main.jpg',
      gallery: [
        '/images/portfolio-1-gallery-1.jpg',
        '/images/portfolio-1-gallery-2.jpg',
        '/images/portfolio-1-gallery-3.jpg'
      ]
    },
    link: 'https://www.calhounboutique.com',
    date: 'January 2025'
  },
  {
    id: 'roberts-construction',
    title: 'Roberts Construction',
    client: 'Roberts Construction',
    category: 'business',
    description: 'A professional website for a construction company in Calhoun, Georgia, showcasing their services, projects, and expertise.',
    challenge: 'Roberts Construction needed a professional website that would showcase their work, communicate their services clearly, and generate leads for new construction projects. They wanted a site that would build trust with potential clients and highlight their expertise in the construction industry.',
    solution: 'We created a custom WordPress website with a focus on showcasing their portfolio of completed projects. The site features high-quality photography, detailed service descriptions, and multiple contact points to capture leads.',
    results: 'The new website has generated a 65% increase in qualified leads and improved the company\'s online visibility in local search results. The portfolio section has become a powerful sales tool for the company\'s representatives.',
    technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Project portfolio showcase',
      'Service area map',
      'Testimonials section',
      'Contact form with service selection',
      'Photo gallery with filtering',
      'Integration with Google Business Profile'
    ],
    testimonial: {
      quote: 'Our new website has generated more leads in one month than our old site did in a year. The team at Calhoun Web Design delivered exactly what we needed - a professional website that showcases our work and converts visitors into customers.',
      author: 'Michael Roberts',
      position: 'CEO, Roberts Construction'
    },
    images: {
      thumbnail: '/images/portfolio-2.jpg',
      main: '/images/portfolio-2-main.jpg',
      gallery: [
        '/images/portfolio-2-gallery-1.jpg',
        '/images/portfolio-2-gallery-2.jpg',
        '/images/portfolio-2-gallery-3.jpg'
      ]
    },
    link: 'https://www.robertsconstruction.com',
    date: 'February 2025'
  },
  {
    id: 'calhoun-medical',
    title: 'Calhoun Medical Center',
    client: 'Calhoun Medical Center',
    category: 'healthcare',
    description: 'A comprehensive website for a medical center in Calhoun, Georgia, featuring appointment scheduling and patient resources.',
    challenge: 'Calhoun Medical Center needed a website that would provide valuable information to patients while streamlining the appointment booking process. They wanted to improve patient communication and reduce administrative workload.',
    solution: 'We developed a custom healthcare website with an integrated appointment scheduling system, patient portal access, and comprehensive information about their services and providers. The site was designed with accessibility in mind to serve all patients effectively.',
    results: 'The new website has reduced phone call volume by 35% as patients now book appointments online. Patient satisfaction scores regarding communication have improved by 40%, and the center has seen a 25% increase in new patient acquisitions.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3'],
    features: [
      'Online appointment scheduling',
      'Patient portal integration',
      'Provider directory with filtering',
      'Service information pages',
      'Health resources library',
      'Insurance information section'
    ],
    testimonial: {
      quote: 'The website created by Calhoun Web Design has transformed how we interact with our patients. The online appointment system has saved our staff countless hours, and patients appreciate the easy access to information and resources.',
      author: 'Jennifer Davis',
      position: 'Marketing Director, Calhoun Medical Center'
    },
    images: {
      thumbnail: '/images/portfolio-3.jpg',
      main: '/images/portfolio-3-main.jpg',
      gallery: [
        '/images/portfolio-3-gallery-1.jpg',
        '/images/portfolio-3-gallery-2.jpg',
        '/images/portfolio-3-gallery-3.jpg'
      ]
    },
    link: 'https://www.calhounmedical.com',
    date: 'March 2025'
  },
  {
    id: 'mountain-view',
    title: 'Mountain View Restaurant',
    client: 'Mountain View Restaurant',
    category: 'restaurant',
    description: 'An appetizing website for a restaurant in Calhoun, Georgia, featuring online ordering, reservations, and menu showcase.',
    challenge: 'Mountain View Restaurant needed a website that would showcase their menu, allow for online reservations, and implement an online ordering system. They wanted to improve the dining experience for their customers and streamline operations.',
    solution: 'We created a visually appealing website that highlights their food photography and atmosphere. The site includes an online reservation system, digital menu with filtering options, and a seamless online ordering system integrated with their POS.',
    results: 'Since launching the website, the restaurant has seen a 50% increase in online reservations and a 75% increase in online orders. Customer feedback has been overwhelmingly positive regarding the ease of use and visual appeal.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Online reservation system',
      'Digital menu with categories',
      'Online ordering and payment',
      'Photo gallery of dishes and venue',
      'Integration with delivery services',
      'Event booking system'
    ],
    testimonial: {
      quote: 'Our website has become an essential part of our business. The online ordering system has increased our takeout revenue significantly, and the reservation system has reduced no-shows. It\'s beautiful, functional, and exactly what we needed.',
      author: 'David Chen',
      position: 'Owner, Mountain View Restaurant'
    },
    images: {
      thumbnail: '/images/portfolio-4.jpg',
      main: '/images/portfolio-4-main.jpg',
      gallery: [
        '/images/portfolio-4-gallery-1.jpg',
        '/images/portfolio-4-gallery-2.jpg',
        '/images/portfolio-4-gallery-3.jpg'
      ]
    },
    link: 'https://www.mountainviewrestaurant.com',
    date: 'April 2025'
  },
  {
    id: 'georgia-real-estate',
    title: 'Georgia Real Estate Group',
    client: 'Georgia Real Estate Group',
    category: 'real-estate',
    description: 'A comprehensive real estate website for a brokerage in Calhoun, Georgia, featuring property listings and agent profiles.',
    challenge: 'Georgia Real Estate Group needed a website that would showcase their property listings, highlight their agents, and generate leads for both buyers and sellers. They wanted a platform that would integrate with MLS and provide valuable resources for clients.',
    solution: 'We developed a custom real estate website with MLS integration, advanced property search functionality, and detailed agent profiles. The site includes neighborhood guides, mortgage calculators, and lead capture forms throughout.',
    results: 'The new website has increased lead generation by 85% and improved the quality of leads. Agent profiles have received significant traffic, resulting in more direct inquiries to agents and a 40% increase in listings.',
    technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'MLS API'],
    features: [
      'MLS integration with property search',
      'Interactive map of listings',
      'Agent profiles and contact forms',
      'Neighborhood guides with data',
      'Mortgage calculator tools',
      'Saved searches and favorites for users'
    ],
    testimonial: {
      quote: 'Our website has become our most valuable marketing tool. The property search functionality is intuitive, and the lead generation has exceeded our expectations. Our agents love having detailed profiles that showcase their expertise and listings.',
      author: 'Amanda Wilson',
      position: 'Broker, Georgia Real Estate Group'
    },
    images: {
      thumbnail: '/images/portfolio-5.jpg',
      main: '/images/portfolio-5-main.jpg',
      gallery: [
        '/images/portfolio-5-gallery-1.jpg',
        '/images/portfolio-5-gallery-2.jpg',
        '/images/portfolio-5-gallery-3.jpg'
      ]
    },
    link: 'https://www.georgiarealestate.com',
    date: 'May 2025'
  },
  {
    id: 'calhoun-fitness',
    title: 'Calhoun Fitness Center',
    client: 'Calhoun Fitness Center',
    category: 'fitness',
    description: 'An energetic website for a fitness center in Calhoun, Georgia, featuring class schedules, membership information, and online sign-ups.',
    challenge: 'Calhoun Fitness Center needed a website that would showcase their facilities, allow members to view and sign up for classes, and provide information about membership options. They wanted to improve member engagement and attract new clients.',
    solution: 'We designed an energetic, motivational website that highlights their facilities and services. The site includes a class scheduling system, membership management portal, and trainer profiles. We also implemented a blog for fitness tips and center news.',
    results: 'The website has led to a 60% increase in class bookings through the online system and a 35% increase in membership inquiries. The content strategy has improved engagement, with the blog receiving significant traffic and social shares.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    features: [
      'Class schedule and booking system',
      'Membership information and sign-up',
      'Trainer profiles and specialties',
      'Virtual tour of facilities',
      'Fitness blog with categories',
      'Member portal with progress tracking'
    ],
    testimonial: {
      quote: 'The website perfectly captures the energy and community of our fitness center. The class booking system has made life easier for both our staff and members, and the design motivates visitors to take action. We couldn\'t be happier with the results.',
      author: 'Mark Johnson',
      position: 'Owner, Calhoun Fitness Center'
    },
    images: {
      thumbnail: '/images/portfolio-6.jpg',
      main: '/images/portfolio-6-main.jpg',
      gallery: [
        '/images/portfolio-6-gallery-1.jpg',
        '/images/portfolio-6-gallery-2.jpg',
        '/images/portfolio-6-gallery-3.jpg'
      ]
    },
    link: 'https://www.calhounfitness.com',
    date: 'June 2025'
  }
];
