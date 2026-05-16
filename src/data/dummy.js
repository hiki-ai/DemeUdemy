export const categories = [
  { id: 1, name: 'AI & Machine Learning', icon: 'Brain', students: '1.2M+' },
  { id: 2, name: 'Web Development', icon: 'Globe', students: '3.5M+' },
  { id: 3, name: 'Data Science', icon: 'Database', students: '850K+' },
  { id: 4, name: 'Cloud Computing', icon: 'Cloud', students: '1.5M+' },
  { id: 5, name: 'Cybersecurity', icon: 'Shield', students: '920K+' },
  { id: 6, name: 'Design & UX', icon: 'Palette', students: '2.1M+' },
  { id: 7, name: 'Digital Marketing', icon: 'TrendingUp', students: '1.8M+' },
  { id: 8, name: 'Business & Finance', icon: 'Briefcase', students: '1.4M+' }
];

export const companies = [
  { name: 'Volkswagen', logo: 'VOLKSWAGEN' },
  { name: 'Samsung', logo: 'SAMSUNG' },
  { name: 'Cisco', logo: 'CISCO' },
  { name: 'Vimeo', logo: 'VIMEO' },
  { name: 'HP', logo: 'HP' },
  { name: 'Ericsson', logo: 'ERICSSON' }
];

export const instructors = [
  { id: 1, name: 'Dr. Sarah Chen', role: 'AI Researcher', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80', rating: 4.9, students: '120K+' },
  { id: 2, name: 'James Doe', role: 'Senior DevOps', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80', rating: 4.8, students: '95K+' },
  { id: 3, name: 'Elena Rodriguez', role: 'UX Director', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80', rating: 4.9, students: '80K+' },
];

export const courses = [
  {
    id: 1,
    title: 'The Ultimate React & Next.js AI Masterclass 2026',
    instructor: 'Dr. Sarah Chen',
    category: 'Web Development',
    rating: 4.9,
    reviews: 15420,
    price: 9.99,
    originalPrice: 199.99,
    bestseller: true,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    progress: 45,
    duration: '32h',
    level: 'Advanced',
    students: 12500,
    updatedAt: 'March 2026'
  },
  {
    id: 2,
    title: 'Enterprise Cloud Architecture (AWS/GCP/Azure)',
    instructor: 'James Doe',
    category: 'Cloud Computing',
    rating: 4.8,
    reviews: 8200,
    price: 12.99,
    originalPrice: 149.99,
    bestseller: true,
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    progress: 0,
    duration: '24h',
    level: 'Intermediate',
    students: 8200,
    updatedAt: 'January 2026'
  },
  {
    id: 3,
    title: 'Machine Learning A-Z: Python & R in Finance',
    instructor: 'Dr. Sarah Chen',
    category: 'Data Science',
    rating: 5.0,
    reviews: 21000,
    price: 15.99,
    originalPrice: 249.99,
    bestseller: true,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    progress: 100,
    duration: '40h',
    level: 'Advanced',
    students: 21000,
    updatedAt: 'February 2026'
  },
  {
    id: 4,
    title: 'Figma to Production: Modern UI/UX Masterclass',
    instructor: 'Elena Rodriguez',
    category: 'Design & UX',
    rating: 4.7,
    reviews: 5400,
    price: 9.99,
    originalPrice: 99.99,
    bestseller: false,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    progress: 15,
    duration: '18h',
    level: 'Beginner',
    students: 5400,
    updatedAt: 'April 2026'
  },
  {
    id: 5,
    title: 'Cybersecurity Analyst Professional Certificate',
    instructor: 'James Doe',
    category: 'Cybersecurity',
    rating: 4.9,
    reviews: 3200,
    price: 19.99,
    originalPrice: 159.99,
    bestseller: true,
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    progress: 60,
    duration: '22h',
    level: 'Advanced',
    students: 3200,
    updatedAt: 'March 2026'
  },
  {
    id: 6,
    title: 'Digital Marketing Mastery: Social Media & SEO',
    instructor: 'Elena Rodriguez',
    category: 'Digital Marketing',
    rating: 4.6,
    reviews: 12000,
    price: 9.99,
    originalPrice: 79.99,
    bestseller: false,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    progress: 0,
    duration: '15h',
    level: 'Beginner',
    students: 12000,
    updatedAt: 'April 2026'
  },
  {
    id: 7,
    title: 'iOS 19 & Swift Fullstack Development',
    instructor: 'James Doe',
    category: 'Web Development',
    rating: 4.8,
    reviews: 4500,
    price: 11.99,
    originalPrice: 129.99,
    bestseller: true,
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    progress: 0,
    duration: '45h',
    level: 'Advanced',
    students: 4500,
    updatedAt: 'May 2026'
  },
  {
    id: 8,
    title: 'Python for Data Science and Visualization',
    instructor: 'Dr. Sarah Chen',
    category: 'Data Science',
    rating: 4.9,
    reviews: 9800,
    price: 10.99,
    originalPrice: 119.99,
    bestseller: true,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    progress: 0,
    duration: '28h',
    level: 'Intermediate',
    students: 9800,
    updatedAt: 'June 2026'
  }
];

export const testimonials = [
  { 
    id: 1, 
    text: "UAcademy is a life-changer. I was able to learn high-level React and AI integration in just weeks, which helped me land my dream job at a top tech company.", 
    user: "Alex Peterson", 
    role: "Senior Software Engineer",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80'
  },
  { 
    id: 2, 
    text: "The quality of instructors on UAcademy is exceptional. Unlike other platforms, the content is always up-to-date with industry standards.", 
    user: "Sarah Jenkins", 
    role: "Product Designer",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80'
  },
  { 
    id: 3, 
    text: "We used UAcademy to upskill our entire development team. The results were immediate, and our deployment speed has increased by 40%.", 
    user: "David Miller", 
    role: "VP of Engineering, CloudCore",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80'
  }
];

export const heroSlides = [
  {
    title: "Skills that move you forward",
    subtitle: "Technology and the world of work change fast — with us, you’re faster. Get the skills you need for the future of work.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80",
    cta: "Plan for your career",
    link: "/pricing"
  },
  {
    title: "Master AI with Top Experts",
    subtitle: "Our AI-powered learning paths adapt to your progress. Learn generative AI, machine learning, and deep learning today.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
    cta: "Explore AI Courses",
    link: "/category/ai"
  }
];
