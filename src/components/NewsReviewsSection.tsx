
import { Button } from "@/components/ui/button";
import { getArticles } from "@/data/articles";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const NewsReviewsSection = () => {
  const articles = getArticles();
  // Display only the most recent 4 articles on the homepage
  const featuredArticles = articles.slice(0, 4);

  // Fallback image for broken links
  const fallbackImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  // Handler for image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackImage;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">News & reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <Link 
              key={article.id} 
              to={`/articles/${article.slug}`}
              className="group relative block h-64 overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all z-10"></div>
              <img 
                src={article.image} 
                alt={article.title}
                onError={handleImageError}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-car-blue-400 transition-colors">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/articles">
            <Button 
              variant="outline"
              className="border-car-blue-600 text-car-blue-700 hover:bg-car-blue-50 group"
            >
              View all articles
              <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsReviewsSection;
