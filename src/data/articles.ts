
export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "The Future of Electric Vehicles: Trends to Watch in 2025",
    slug: "future-electric-vehicles-trends-2025",
    excerpt: "From solid-state batteries to advanced autonomous driving, here are the key developments to watch in the EV market this year.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1617886903355-22b63d99fef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "May 15, 2025",
    author: "Alex Morgan",
    category: "electric"
  },
  {
    id: 2,
    title: "SUV Showdown: Top 5 Luxury Models Compared",
    slug: "suv-showdown-top-luxury-models",
    excerpt: "We put the latest luxury SUVs to the test to help you decide which premium model delivers the best value and performance.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "May 10, 2025",
    author: "Jessica Chen",
    category: "suv"
  },
  {
    id: 3,
    title: "First Drive: The All-New 2025 Sedan Revolution",
    slug: "first-drive-2025-sedan-revolution",
    excerpt: "Our comprehensive review of the redesigned 2025 Sedan Revolution reveals why this model is changing the game.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
    date: "May 5, 2025",
    author: "Michael Johnson",
    category: "sedan"
  },
  {
    id: 4,
    title: "Hybrid vs Electric: Which is Right for Your Lifestyle?",
    slug: "hybrid-vs-electric-comparison",
    excerpt: "A detailed comparison of hybrid and fully electric vehicles to help you make the right choice for your needs and driving habits.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1590236541315-d2e5a7739d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    date: "April 28, 2025",
    author: "Samantha Lee",
    category: "hybrid"
  },
  {
    id: 5,
    title: "Maintenance Tips: Extending Your Vehicle's Life",
    slug: "maintenance-tips-vehicle-life-extension",
    excerpt: "Expert advice on simple maintenance routines that can significantly extend your vehicle's lifespan and performance.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1632823471565-1e04e601c1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "April 22, 2025",
    author: "David Wilson",
    category: "maintenance"
  }
];

export const getArticles = () => {
  // Sort articles by date (newest first)
  return [...articles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );
};
