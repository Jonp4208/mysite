export type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Owner',
    company: 'Calhoun Boutique',
    content: 'Working with Calhoun Web Design was an absolute pleasure. They took the time to understand my business needs and created a website that perfectly represents my brand. The increase in online sales has been remarkable! Their attention to detail and focus on creating a user-friendly shopping experience has made all the difference for my boutique.',
    rating: 5,
    image: '/images/testimonial-1.jpg',
    location: 'Calhoun, GA'
  },
  {
    id: 2,
    name: 'Michael Roberts',
    position: 'CEO',
    company: 'Roberts Construction',
    content: 'Our new website has generated more leads in one month than our old site did in a year. The team at Calhoun Web Design delivered exactly what we needed - a professional website that showcases our work and converts visitors into customers. Their understanding of the construction industry and local market made the process smooth and the results outstanding.',
    rating: 5,
    image: '/images/testimonial-2.jpg',
    location: 'Calhoun, GA'
  },
  {
    id: 3,
    name: 'Jennifer Davis',
    position: 'Marketing Director',
    company: 'Calhoun Medical Center',
    content: 'The SEO optimization services provided by Calhoun Web Design have significantly improved our online visibility. We\'re now ranking on the first page for several important keywords in our industry. Their ongoing support and regular reporting keep us informed about our performance. I highly recommend their services to any healthcare provider looking to improve their online presence.',
    rating: 5,
    image: '/images/testimonial-3.jpg',
    location: 'Calhoun, GA'
  },
  {
    id: 4,
    name: 'David Chen',
    position: 'Owner',
    company: 'Mountain View Restaurant',
    content: 'Our website has become an essential part of our business. The online ordering system has increased our takeout revenue significantly, and the reservation system has reduced no-shows. The team at Calhoun Web Design understood exactly what we needed and delivered a beautiful, functional website that our customers love using. The food photography they arranged looks amazing too!',
    rating: 5,
    image: '/images/testimonial-4.jpg',
    location: 'Calhoun, GA'
  },
  {
    id: 5,
    name: 'Amanda Wilson',
    position: 'Broker',
    company: 'Georgia Real Estate Group',
    content: 'Our website has become our most valuable marketing tool. The property search functionality is intuitive, and the lead generation has exceeded our expectations. Calhoun Web Design created a platform that showcases our listings beautifully and makes it easy for potential buyers to find exactly what they\'re looking for. Our agents love having detailed profiles that highlight their expertise.',
    rating: 5,
    image: '/images/testimonial-5.jpg',
    location: 'Calhoun, GA'
  },
  {
    id: 6,
    name: 'Mark Johnson',
    position: 'Owner',
    company: 'Calhoun Fitness Center',
    content: 'The website perfectly captures the energy and community of our fitness center. The class booking system has made life easier for both our staff and members, and the design motivates visitors to take action. Calhoun Web Design understood our vision and created a website that not only looks great but functions perfectly for our business needs.',
    rating: 5,
    image: '/images/testimonial-6.jpg',
    location: 'Calhoun, GA'
  }
];
