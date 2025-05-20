
import { Button } from "@/components/ui/button";
import { getArticles } from "@/data/articles";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Function to get category style based on category name
const getCategoryStyle = (category: string): string => {
  const categoryStyles: Record<string, string> = {
    "electric": "bg-blue-100 text-blue-800",
    "suv": "bg-green-100 text-green-800",
    "sedan": "bg-purple-100 text-purple-800",
    "hybrid": "bg-teal-100 text-teal-800",
    "maintenance": "bg-amber-100 text-amber-800",
    "reviews": "bg-pink-100 text-pink-800",
    "news": "bg-indigo-100 text-indigo-800",
    "guides": "bg-red-100 text-red-800",
    "events": "bg-orange-100 text-orange-800"
  };
  
  return categoryStyles[category] || "bg-gray-100 text-gray-800";
};

// Function to format reading time (just a placeholder for now)
const getReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min`;
};

const NewsReviewsSection = () => {
  const articles = getArticles();
  // Display only the most recent 3 articles on the homepage
  const featuredArticles = articles.slice(0, 3);

  // Fallback image for broken links
  const fallbackImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  // Handler for image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackImage;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-wider text-red-900">OUR BLOG POSTS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              {/* Article Image */}
              <div className="relative overflow-hidden aspect-square rounded-lg">
                <img 
                  src={article.image} 
                  alt={article.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-4 py-1 rounded-md text-xs font-medium ${getCategoryStyle(article.category)}`}>
                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </span>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="p-5">
                {/* Author and Reading Time */}
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className="font-medium">{article.author}</span>
                  <span className="mx-2">•</span>
                  <span>{getReadingTime(article.content)}</span>
                </div>
                
                {/* Article Title */}
                <Link to={`/news?article=${article.slug}`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h3>
                </Link>
                
                {/* Read More Link */}
                <Link 
                  to={`/news?article=${article.slug}`}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  <span className="mr-1">READ POST</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsReviewsSection;
