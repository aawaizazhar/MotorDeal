import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-car-blue-900 text-white min-h-[100vh] pt-5">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/public/images/hero/hero.avif')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundAttachment: 'scroll' // Changed from fixed for better mobile performance
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
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex items-center min-h-[80vh] py-10 sm:py-0">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Badge - Centered */}
          <div className="flex justify-center w-full mb-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
            >
              LUXURY VEHICLES
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 text-[#020817] relative inline-block"
          >
            {"Find Your Dream Car Today".split(" ").map((word, index) => (
              <motion.span 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="inline-block mr-[0.2em] sm:mr-[0.3em] relative"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Discover the perfect vehicle from our extensive collection of premium cars at unbeatable prices.
          </motion.p>
          
          {/* Mobile-friendly CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-10 sm:mb-20 px-4 flex justify-center space-x-4"
          >
            <Button 
              className="bg-red-600/80 backdrop-blur-md hover:bg-red-700/90 text-white font-semibold px-6 py-3 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center border border-red-500/30"
              onClick={() => window.location.href = '/vehicles'}
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <span className="mr-2">Browse Vehicles</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            
            <Button 
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 font-semibold px-6 py-3 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/about'}
              style={{ backdropFilter: 'blur(12px)' }}
            >
              About Us
            </Button>
          </motion.div>
          
          {/* Spacer - Responsive */}
          <div className="mb-16 sm:mb-28"></div>
        </div>
      </div>
      
      {/* Search Bar - Responsive positioning with enhanced styling and more spacing */}
      <div className="absolute bottom-[2%] sm:bottom-[5%] md:bottom-[8%] lg:bottom-[10%] left-0 right-0 px-4 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="max-w-6xl mx-auto shadow-2xl rounded-xl overflow-hidden mt-8 sm:mt-12 md:mt-16 lg:mt-20"
        >
          <SearchBar />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
