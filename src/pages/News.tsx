import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticles } from "@/data/articles";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";



// Function to format reading time (just a placeholder for now)
const getReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime}`;
};

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
    "guides": "bg-red-100 text-red-800"
  };
  
  return categoryStyles[category] || "bg-gray-100 text-gray-800";
};

const News = () => {
  // Get all articles sorted by date
  const articles = getArticles();
  const [currentArticle, setCurrentArticle] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Get URL query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const articleSlug = queryParams.get('article');
  
  // Set current article from URL query parameter
  useEffect(() => {
    if (articleSlug) {
      setCurrentArticle(articleSlug);
      setIsModalOpen(true);
    }
  }, [articleSlug]);

  // Scroll to top when current article changes
  useEffect(() => {
    if (currentArticle && contentRef.current) {
      contentRef.current.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }, [currentArticle]);

  const getArticleContent = (slug: string) => {
    const article = articles.find(a => a.slug === slug);
    if (!article) return null;

    // Get all categories from articles
    const categories = Array.from(new Set(articles.map(a => a.category)));

    // Get related articles (excluding current article)
    const relatedArticles = articles
      .filter(a => a.slug !== slug && a.category === article.category)
      .slice(0, 4);

    // Function to extract content between headings
    const extractContent = (content: string, startHeading: string, endHeading?: string): string => {
      let startIndex = content.indexOf(startHeading);
      if (startIndex === -1) return "";
      startIndex += startHeading.length;

      let endIndex = content.length;
      if (endHeading) {
        endIndex = content.indexOf(endHeading, startIndex);
        if (endIndex === -1) endIndex = content.length; // If end heading not found, take till the end
      }

      let sectionContent = content.substring(startIndex, endIndex).trim();

      // Basic HTML tag removal (improve as needed)
      sectionContent = sectionContent.replace(/<[^>]*>/g, '');

      return sectionContent;
    };

    const whatYouCanExpect = extractContent(article.content, "What You Can Expect To See", "Top Highlights and Features");
    const topHighlights = extractContent(article.content, "Top Highlights and Features", "Expert Opinions");
    const expertOpinions = extractContent(article.content, "Expert Opinions");

    return (
      <>
        <div className="w-full bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <Navbar />
          </div>
        </div>
        <div className="bg-gradient-to-b from-gray-50 to-white py-12 relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Main Content */}
              <div ref={contentRef} className="w-full md:w-2/3 overflow-y-auto h-full space-y-8">
                {/* Back Button */}
                <motion.button 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => {
                    setCurrentArticle(null);
                    setIsModalOpen(false);
                  }}
                  className="inline-flex items-center text-gray-600 hover:text-red-600 mb-8 text-sm font-medium transition-all duration-300 hover:translate-x-1 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to News
                </motion.button>

                {/* Article Header */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-gray-100"
                >
                  <div className="p-8">
                    {/* Title and Meta */}
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-space-grotesk"
                    >
                      {article.title}
                    </motion.h1>
                    
                    {/* Author and Date */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-center mb-8 bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden flex-shrink-0 ring-2 ring-car-red-500 ring-offset-2">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${article.author.replace(/ /g, '+')}&background=random`} 
                          alt={article.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg font-space-grotesk">{article.author}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-2">
                          <span>{article.date}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                          <span>{getReadingTime(article.content)} min read</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Category Badge */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="mb-6"
                    >
                      <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${getCategoryStyle(article.category)} shadow-sm font-space-grotesk`}>
                        {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                      </span>
                    </motion.div>
                  </div>

                  {/* Featured Image */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="aspect-video w-full overflow-hidden"
                  >
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 shadow-inner"
                    />
                  </motion.div>

                  {/* Article Content */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="p-8 pt-12"
                  >
                    {/* What You Can Expect To See */}
                    {whatYouCanExpect && (
                      <div className="mb-12 bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="inline-block w-1 h-6 bg-gradient-to-b from-car-red-500 to-car-red-600 rounded-full"></span>
                          What You Can Expect To See
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed font-space-grotesk prose prose-lg max-w-none">
                          {whatYouCanExpect}
                        </p>
                      </div>
                    )}

                    {/* Top Highlights and Features */}
                    {topHighlights && (
                      <div className="mb-12 bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="inline-block w-1 h-6 bg-gradient-to-b from-car-red-500 to-car-red-600 rounded-full"></span>
                          Top Highlights and Features
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed font-space-grotesk prose prose-lg max-w-none">
                          {topHighlights}
                        </p>
                      </div>
                    )}

                    {/* Expert Opinions */}
                    {expertOpinions && (
                      <div className="mb-12 bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="inline-block w-1 h-6 bg-gradient-to-b from-car-red-500 to-car-red-600 rounded-full"></span>
                          Expert Opinions
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed font-space-grotesk prose prose-lg max-w-none">
                          {expertOpinions}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>

                {/* Expert Opinions Section */}
                <div className="bg-white rounded-xl shadow-lg p-10 mb-12 border border-gray-100">
                  <h2 className="text-2xl font-bold uppercase mb-8 tracking-wide text-red-600">Expert Opinions and Analysis</h2>
                  <div className="mb-8">
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed font-space-grotesk">Specialists and car enthusiasts weigh in on the latest trends and developments in the automotive industry.</p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-lg border-l-4 border-red-600 italic shadow-sm">
                    <p className="text-gray-800 mb-4 font-space-grotesk">"The modern car uses more microprocessors and is far more sophisticated with more digital chip controllers than fighter jets or spacecraft."</p>
                    <p className="text-gray-500 text-sm font-medium font-space-grotesk">— Industry Expert</p>
                  </div>
                </div>

                {/* Conclusion Section */}
                <div className="bg-white rounded-xl shadow-lg p-10 mb-12 border border-gray-100">
                  <h2 className="text-2xl font-bold uppercase mb-6 tracking-wide text-red-600">Conclusion and Key Takeaways</h2>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed font-space-grotesk">
                    The automotive industry continues to evolve with new technologies and innovations. 
                    Stay informed with our latest articles and expert analysis.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-full md:w-1/3 space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 sticky top-8">
                  <h3 className="text-lg font-bold mb-6 uppercase tracking-wide text-red-600">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <span 
                        key={category} 
                        className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 ${getCategoryStyle(category)} hover:opacity-80 font-space-grotesk hover:scale-105`}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Posts */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 sticky top-[calc(8rem+var(--header-height))]">
                  <h3 className="text-lg font-bold mb-6 uppercase tracking-wide text-red-600">Related Posts</h3>
                  <div className="space-y-6">
                    {relatedArticles.map(related => (
                      <div 
                        key={related.id} 
                        className="flex items-start cursor-pointer group bg-gray-50/50 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50"
                        onClick={() => {
                          setCurrentArticle(related.slug);
                          setIsModalOpen(true);
                        }}
                      >
                        <div className="w-20 aspect-square overflow-hidden rounded-lg flex-shrink-0 mr-3">
                          <img 
                            src={related.image} 
                            alt={related.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 shadow-sm"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-red-600 line-clamp-2 transition-colors duration-200 font-space-grotesk">{related.title}</h4>
                          <p className="text-xs text-gray-500 mt-1 font-space-grotesk">{related.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };

  // If we have a current article, show its content
  if (currentArticle) {
    const articleContent = getArticleContent(currentArticle);
    if (articleContent) {
      return articleContent;
    } else {
      // Handle case where article is not found for the given slug
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The requested article could not be found.</p>
            <Link 
              to="/news"
              className="inline-flex items-center text-car-red-600 hover:text-car-red-700 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to News List
            </Link>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section with Background Image */}
        <div className="relative bg-gradient-to-r from-gray-900 to-black min-h-[60vh]">
          {/* Hero Background Image - Keeping the same background image as requested */}
          <div 
            className="absolute inset-0 z-0" 
            style={{ 
              backgroundImage: "url('images/hero/hero.avif')", 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
          
          {/* Enhanced Gradient Overlay with multi-layer effect */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-60"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 z-10"></div>
          
          {/* Navbar */}
          <div className="relative z-10">
            <Navbar />
          </div>
          
          {/* Hero Content with enhanced styling */}
          <div className="container mx-auto px-4 relative z-10 py-20 sm:py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge - Centered */}
              <div className="flex justify-center w-full mb-6">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  AUTOMOTIVE INSIGHTS
                </motion.div>
              </div>
              
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight relative inline-block"
              >
                {"Latest News & Updates".split(" ").map((word, index) => (
                  <motion.span 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="inline-block mr-[0.25em] relative"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-space-grotesk"
              >
                Stay updated with the latest automotive industry news and trends from around the world
              </motion.p>
              
              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex justify-center space-x-4 mt-8"
              >
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center">
                  <span className="mr-2">Subscribe to Updates</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-4 py-12"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
                onClick={() => {
                  setCurrentArticle(article.slug);
                  setIsModalOpen(true);
                }}
              >
                {/* Article Image */}
                <div className="relative overflow-hidden aspect-square rounded-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
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
                  <div className="flex items-center text-xs text-gray-500 mb-2 font-space-grotesk">
                    <span className="font-medium">{article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{getReadingTime(article.content)} min</span>
                  </div>
                  
                  {/* Article Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  {/* Read More Link */}
                  <div className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm font-space-grotesk">
                    <span className="mr-1">READ POST</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>


        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default News;
