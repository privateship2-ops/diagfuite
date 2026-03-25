export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
};

export type City = {
  name: string;
  slug: string;
  postalCode: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  category?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  date: string;
  updatedDate?: string;
  category: string;
  readingTime: number;
  image: string;
  imageAlt: string;
  content: string;
  relatedPosts: string[];
  relatedPages: { href: string; label: string }[];
  faqItems?: FaqItem[];
  keywords: string[];
};

export type ContactFormData = {
  nom: string;
  email: string;
  telephone: string;
  typeClient: string;
  typeFuite: string;
  adresse: string;
  message: string;
};
