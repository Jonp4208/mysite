export type Testimonial = {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  featured: boolean;
  date: string;
  status: 'published' | 'draft';
};
