
import { Button } from "@/components/ui/button";
import { getArticles } from "@/data/articles";
import { Link } from "react-router-dom";
import NewsReviewCard from "./NewsReviewCard";
import { ChevronRight } from "lucide-react";

const NewsReviewsSection = () => {
  const articles = getArticles();
  // Display only the most recent 3 articles on the homepage
  const featuredArticles = articles.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">News & Reviews</h2>
            <p className="text-gray-600 max-w-2xl">
              Stay up-to-date with the latest automotive news, in-depth vehicle reviews, and expert opinions.
            </p>
          </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <NewsReviewCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsReviewsSection;
