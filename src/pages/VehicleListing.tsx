import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import SearchBar from "@/components/SearchBar";
import { Vehicle, getFilteredVehicles, getMakes, getModels, getPriceRange, getYearRange } from "@/data/vehicles";
import { motion } from "framer-motion";

const VehicleListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [minYear, setMinYear] = useState<number | undefined>(undefined);
  const [maxYear, setMaxYear] = useState<number | undefined>(undefined);
  const [condition, setCondition] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<string>("newest");

  const makes = getMakes();
  const models = getModels(make);
  const priceRange = getPriceRange();
  const yearRange = getYearRange();
  
  // Load filters from URL
  useEffect(() => {
    const makeParam = searchParams.get("make") || "";
    const modelParam = searchParams.get("model") || "";
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const minYearParam = searchParams.get("minYear");
    const maxYearParam = searchParams.get("maxYear");
    const conditionParam = searchParams.get("condition") || "";
    const categoryParam = searchParams.get("category") || "";
    const queryParam = searchParams.get("query") || "";
    const sortParam = searchParams.get("sort") || "newest";
    
    setMake(makeParam);
    setModel(modelParam);
    setMinPrice(minPriceParam ? parseInt(minPriceParam) : undefined);
    setMaxPrice(maxPriceParam ? parseInt(maxPriceParam) : undefined);
    setMinYear(minYearParam ? parseInt(minYearParam) : undefined);
    setMaxYear(maxYearParam ? parseInt(maxYearParam) : undefined);
    setCondition(conditionParam);
    setCategory(categoryParam);
    setQuery(queryParam);
    setSort(sortParam);
  }, [searchParams]);
  
  // Apply filters and get vehicles
  useEffect(() => {
    // Check if any filter is applied
    const isFilterApplied = make || model || minYear || maxYear || minPrice || maxPrice || condition || category || query;
    
    let filtered = getFilteredVehicles({
      make: make || undefined,
      model: model || undefined,
      minYear,
      maxYear,
      minPrice,
      maxPrice,
      condition: condition as any || undefined,
      category: category || undefined,
      query: query || undefined,
    });
    
    // Apply sorting
    if (sort === "newest") {
      filtered = [...filtered].sort((a, b) => b.year - a.year);
    } else if (sort === "oldest") {
      filtered = [...filtered].sort((a, b) => a.year - b.year);
    } else if (sort === "priceLow") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sort === "priceHigh") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    
    // No need for specific exclusions now that we've fixed the data
    
    setVehicles(filtered);
  }, [make, model, minYear, maxYear, minPrice, maxPrice, condition, category, query, sort]);
  
  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (make) params.append("make", make);
    if (model) params.append("model", model);
    if (minPrice) params.append("minPrice", minPrice.toString());
    if (maxPrice) params.append("maxPrice", maxPrice.toString());
    if (minYear) params.append("minYear", minYear.toString());
    if (maxYear) params.append("maxYear", maxYear.toString());
    if (condition) params.append("condition", condition);
    if (category) params.append("category", category);
    if (query) params.append("query", query);
    if (sort) params.append("sort", sort);
    
    setSearchParams(params);
  };
  
  const resetFilters = () => {
    setMake("");
    setModel("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setMinYear(undefined);
    setMaxYear(undefined);
    setCondition("");
    setCategory("");
    setQuery("");
    setSort("newest");
    setSearchParams({});
  };

  return (
    <>
      <div className="relative bg-car-blue-900 text-white min-h-[60vh] pt-5">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: "url('images/hero/hero.avif')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundAttachment: 'scroll'
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
        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center py-12 sm:py-16 md:py-20">
          <div className="w-full text-center">
            {/* Badge - Centered */}
            <div className="flex justify-center w-full mb-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
              >
                PREMIUM SELECTION
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-2 text-[#020817] relative inline-block"
            >
              {"EXPLORE OUR VEHICLES".split(" ").map((word, index) => (
                <motion.span 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="inline-block mr-[0.2em] sm:mr-[0.5em] relative"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed font-space-grotesk px-2"
            >
              Find the perfect car that matches your style, needs, and budget from our extensive collection
            </motion.p>
          </div>
          
          {/* Search Bar with enhanced styling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="w-full max-w-5xl px-4 mt-2 sm:mt-4 mb-8 sm:mb-12 md:mb-16"
          >
            <SearchBar />
          </motion.div>
        </div>
      </div>
      
      {/* Featured Vehicles Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold tracking-wider">AVAILABLE VEHICLES</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-space-grotesk">{vehicles.length} {vehicles.length === 1 ? 'Vehicle' : 'Vehicles'}</span>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[180px] font-space-grotesk">
                  <SelectValue placeholder="Sort by" className="font-space-grotesk" />
                </SelectTrigger>
                <SelectContent className="font-space-grotesk">
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {vehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
              <p className="text-gray-600 mb-6 font-space-grotesk">Try adjusting your search criteria or check back later.</p>
              <Button 
                variant="outline" 
                className="border-car-blue-600 text-car-blue-700 hover:bg-car-blue-50"
                onClick={resetFilters}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </motion.div>
      
      <Footer />
    </>
  );
};

export default VehicleListing;
