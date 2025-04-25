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
    id: 'iron-athletics',
    title: 'FitLife Fitness',
    client: 'FitLife Fitness Center',
    category: 'fitness',
    description: 'A dynamic website for a premium gym in Calhoun, featuring class schedules, membership options, and trainer profiles.',
    challenge: 'FitLife Fitness needed a website that would showcase their modern facilities, allow members to view and sign up for classes, and provide information about membership options. They wanted to attract new members while better serving their existing clientele.',
    solution: 'I designed an energetic, motivational website that highlights their state-of-the-art equipment and diverse class offerings. The site includes a class scheduling system, membership comparison tools, and trainer profiles. I also implemented a blog for fitness tips and success stories.',
    results: 'The website has led to a 45% increase in membership inquiries and a 60% increase in class bookings through the online system. The content strategy has improved engagement, with the blog receiving significant traffic and social shares.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Booking System API'],
    features: [
      'Interactive class schedule with filtering',
      'Membership comparison and sign-up',
      'Trainer profiles with specialties',
      'Virtual tour of facilities',
      'Member testimonials and success stories',
      'Nutrition and workout blog'
    ],
    testimonial: {
      quote: 'This website perfectly captures the energy of our gym while being incredibly functional. The class booking system has streamlined our operations, and we\'ve seen a significant increase in new member inquiries since launch.',
      author: 'Mike Thompson',
      position: 'Owner, FitLife Fitness'
    },
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&h=400&auto=format&fit=crop',
      main: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&h=600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&h=400&auto=format&fit=crop'
      ]
    },
    link: '/demo/iron-athletics',
    date: 'January 2023'
  },
  {
    id: 'calhoun-motors',
    title: 'Prestige Auto',
    client: 'Prestige Auto Group',
    category: 'automotive',
    description: 'A premium website for a luxury car dealership, featuring inventory management, financing options, and customer testimonials.',
    challenge: 'Prestige Auto needed a website that would showcase their luxury inventory effectively, provide detailed information about each vehicle, and generate quality leads. They wanted to compete with larger dealerships by offering a superior online experience.',
    solution: 'I developed a custom website with an advanced inventory management system that allows potential buyers to search, filter, and compare vehicles. The site includes financing calculators, trade-in valuation tools, and a streamlined contact process for inquiries.',
    results: 'Since launching the new website, Prestige Auto has seen a 70% increase in online leads and a 40% increase in inventory views. The average time spent on the site has doubled, indicating higher engagement with their inventory.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vehicle Inventory API'],
    features: [
      'Advanced inventory search and filtering',
      'Detailed vehicle listings with multiple photos',
      'Financing calculator and pre-approval form',
      'Trade-in value estimator',
      'Customer reviews and testimonials',
      'Service department scheduling'
    ],
    testimonial: {
      quote: 'Our website has become our most powerful sales tool. The system makes it easy for customers to find exactly what they\'re looking for, and the lead generation tools have significantly increased our sales. The site looks professional and works flawlessly.',
      author: 'Robert Johnson',
      position: 'Owner, Prestige Auto'
    },
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&h=400&auto=format&fit=crop',
      main: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&h=600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1567818735868-e71b99932e29?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&h=400&auto=format&fit=crop'
      ]
    },
    link: '/demo/calhoun-motors',
    date: 'March 2023'
  },
  {
    id: 'eternal-moments',
    title: 'Eternal Moments Photography',
    client: 'Eternal Moments Photography',
    category: 'photography',
    description: 'An elegant portfolio website for a wedding photographer in Calhoun, showcasing their work and services with a focus on visual storytelling.',
    challenge: 'Eternal Moments Photography needed a website that would showcase their wedding photography portfolio in a way that evokes emotion and tells a story. They wanted to attract high-end clients while providing clear information about their services and booking process.',
    solution: 'I designed an elegant, visually-focused website that puts their photography front and center. The site features full-screen galleries, wedding stories, and a seamless booking process. I implemented a blog for sharing recent weddings and photography tips.',
    results: 'The new website has resulted in a 55% increase in high-end bookings and a 65% increase in inquiry quality. Clients frequently mention that the website was what convinced them to reach out, citing the emotional impact of the portfolio presentation.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Cloudinary API'],
    features: [
      'Immersive photo galleries with filtering',
      'Wedding stories with client testimonials',
      'Service packages and pricing information',
      'Availability checker and booking system',
      'Blog with recent weddings and tips',
      'Client proofing portal integration'
    ],
    testimonial: {
      quote: 'My website perfectly captures the emotion and style of my photography. John created a design that lets my work speak for itself while making it easy for potential clients to learn about my services and get in touch. I\'ve received so many compliments on the site, and it\'s definitely helped me book more premium weddings.',
      author: 'Emily Richards',
      position: 'Owner, Eternal Moments Photography'
    },
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&h=400&auto=format&fit=crop',
      main: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&h=600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&h=400&auto=format&fit=crop'
      ]
    },
    link: '/demo/eternal-moments',
    date: 'May 2023'
  },
  {
    id: 'southern-spice',
    title: 'Southern Spice Restaurant',
    client: 'Southern Spice',
    category: 'restaurant',
    description: 'A mouth-watering website for a local restaurant in Calhoun, featuring online ordering, reservations, and an interactive menu.',
    challenge: 'Southern Spice needed a website that would showcase their southern cuisine, allow for online reservations, and implement an online ordering system. They wanted to create a digital experience that matched the warmth and hospitality of their restaurant.',
    solution: 'I created a visually appealing website that highlights their food photography and restaurant atmosphere. The site includes an online reservation system, digital menu with filtering options, and a seamless online ordering system integrated with their POS.',
    results: 'Since launching the website, the restaurant has seen a 65% increase in online reservations and an 80% increase in online orders. Customer feedback has been overwhelmingly positive regarding the ease of use and visual appeal.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'Restaurant Reservation API'],
    features: [
      'Online reservation system with time slots',
      'Digital menu with categories and filtering',
      'Online ordering and payment processing',
      'Photo gallery of dishes and venue',
      'Integration with delivery services',
      'Event booking for private dining'
    ],
    testimonial: {
      quote: 'Our website has become an essential part of our business. The online ordering system has increased our takeout revenue significantly, and the reservation system has reduced no-shows. John created a website that captures the essence of our restaurant while providing all the functionality we needed.',
      author: 'Sarah Williams',
      position: 'Owner, Southern Spice'
    },
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&h=400&auto=format&fit=crop',
      main: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&h=600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600891963935-9e7b76c0d6a5?q=80&w=600&h=400&auto=format&fit=crop'
      ]
    },
    link: '/demo/southern-spice',
    date: 'July 2023'
  },
  {
    id: 'mountain-boutique',
    title: 'Mountain Boutique',
    client: 'Mountain Boutique',
    category: 'retail',
    description: 'A stylish e-commerce website for a local boutique in Calhoun, featuring a product catalog, secure checkout, and customer accounts.',
    challenge: 'Mountain Boutique needed an online store that would showcase their clothing and accessories beautifully while making it easy for customers to browse and purchase items. They wanted a website that reflected their brand identity and provided a seamless shopping experience.',
    solution: 'I designed and developed a custom e-commerce website using Shopify, with a focus on high-quality product photography and an intuitive user interface. The site features a responsive design, fast loading times, and secure checkout process.',
    results: 'Since launching the new website, Mountain Boutique has seen a 60% increase in online sales and a 35% reduction in cart abandonment. The mobile-friendly design has also led to a 70% increase in mobile conversions.',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'Shopify API'],
    features: [
      'Custom product catalog with filtering',
      'Integrated payment processing',
      'Mobile-responsive design',
      'Product recommendations',
      'Customer account management',
      'Inventory management system'
    ],
    testimonial: {
      quote: 'John created a beautiful online store that perfectly represents our brand. Our customers love how easy it is to shop on our new website, and we\'ve seen a significant increase in online sales. The site is easy for us to manage and update, which was important for our small team.',
      author: 'Jessica Thompson',
      position: 'Owner, Mountain Boutique'
    },
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&h=400&auto=format&fit=crop',
      main: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&h=600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&h=400&auto=format&fit=crop'
      ]
    },
    link: '/demo/mountain-boutique',
    date: 'September 2023'
  },
  {
    id: 'calhoun-plumbing',
    title: 'Calhoun Plumbing Services',
    client: 'Calhoun Plumbing',
    category: 'service',
    description: 'A professional website for a local plumbing company, featuring service information, online scheduling, and emergency contact options.',
    challenge: 'Calhoun Plumbing needed a website that would clearly communicate their services, allow customers to schedule appointments online, and provide easy access to emergency contact information. They wanted to establish trust with potential customers and generate quality leads.',
    solution: 'I developed a clean, professional website that clearly outlines their services with detailed descriptions and pricing information. The site includes an online scheduling system, emergency contact features, and customer testimonials to build trust.',
    results: 'The new website has generated a 75% increase in online appointment bookings and improved their visibility in local search results. The emergency contact feature has been particularly successful, resulting in a 50% increase in emergency service calls.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS3', 'Appointment Scheduling API'],
    features: [
      'Service descriptions with transparent pricing',
      'Online appointment scheduling',
      'Emergency service request form',
      'Before and after project gallery',
      'Customer testimonials and reviews',
      'Service area map'
    ],
    testimonial: {
      quote: 'Our website has completely transformed how we get new business. The online scheduling system has reduced phone call volume while increasing bookings, and the emergency service feature has been a game-changer for that part of our business. John created exactly what we needed - a professional website that generates leads and makes it easy for customers to work with us.',
      author: 'Tom Wilson',
      position: 'Owner, Calhoun Plumbing'
    },
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&h=400&auto=format&fit=crop',
      main: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&h=600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1574378922252-100047aa05d8?q=80&w=600&h=400&auto=format&fit=crop'
      ]
    },
    link: '/demo/calhoun-plumbing',
    date: 'November 2023'
  },
  {
    id: 'calhoun-realty',
    title: 'Calhoun Luxury Realty',
    client: 'Calhoun Luxury Realty',
    category: 'real estate',
    description: 'An elegant website for a luxury real estate agency in Calhoun, featuring property listings, agent profiles, and neighborhood guides.',
    challenge: 'Calhoun Luxury Realty needed a website that would showcase their high-end property listings in a way that conveys luxury and exclusivity. They wanted to attract affluent clients while providing comprehensive information about properties and neighborhoods.',
    solution: 'I designed a sophisticated, visually-focused website that puts their property photography front and center. The site features advanced property search, interactive maps, virtual tours, and detailed agent profiles to build trust with potential clients.',
    results: 'Since launching the new website, Calhoun Luxury Realty has seen a 65% increase in qualified leads and a 40% increase in time spent on the site. The virtual tour feature has been particularly successful, resulting in more out-of-state buyers.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Property Listing API'],
    features: [
      'Advanced property search and filtering',
      'Interactive neighborhood maps',
      'Virtual property tours',
      'Agent profiles with expertise areas',
      'Mortgage calculator',
      'Market trend reports'
    ],
    testimonial: {
      quote: 'Our website perfectly captures the luxury experience we provide to our clients. The property presentations are stunning, and the site has significantly increased our qualified leads. The virtual tours have been especially valuable for attracting out-of-state buyers.',
      author: 'Elizabeth Parker',
      position: 'Broker, Calhoun Luxury Realty'
    },
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&h=400&auto=format&fit=crop',
      main: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&h=600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154526-990dced4db3d?q=80&w=600&h=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&h=400&auto=format&fit=crop'
      ]
    },
    link: '/demo/calhoun-realty',
    date: 'February 2023'
  }
];
