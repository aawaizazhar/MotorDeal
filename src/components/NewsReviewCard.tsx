
import { Card, CardContent } from "@/components/ui/card";
import { Article } from "@/data/articles";
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

interface NewsReviewCardProps {
  article: Article;
}

const NewsReviewCard = ({ article }: NewsReviewCardProps) => {
  return (
    <Link to={`/articles/${article.slug}`} className="group block">
      <Card className="overflow-hidden h-full border border-gray-200 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="relative overflow-hidden h-48">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
        </div>
        <CardContent className="p-5">
          <div className="flex items-center text-sm text-gray-500 mb-2 gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </span>
          </div>
          
          <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-car-blue-700 transition-colors duration-300">
            {article.title}
          </h3>
          
          <p className="text-gray-600 line-clamp-2">
            {article.excerpt}
          </p>
          
          <div className="mt-3 inline-block font-medium text-car-blue-700 group-hover:text-car-blue-800 relative transition-colors duration-300">
            <span className="after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-car-blue-700 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform group-hover:after:scale-x-100">
              Read more
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsReviewCard;
