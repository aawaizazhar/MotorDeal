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
import {
  getFilteredVehicles,
  getMakes,
  getModels,
  getPriceRange,
  getYearRange,
} from "@/data/vehicles";
import { motion } from "framer-motion";

const VehicleListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vehicles, setVehicles] = useState([]);
  const [make, setMake] = useState("all");
  const [model, setModel] = useState("all");
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [minYear, setMinYear] = useState(undefined);
  const [maxYear, setMaxYear] = useState(undefined);
  const [condition, setCondition] = useState("all");
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");

  const makes = getMakes();
  const models = getModels(make);
  const priceRange = getPriceRange();
  const yearRange = getYearRange();

  // Load filters from URL
  useEffect(() => {
    const makeParam = searchParams.get("make") || "all";
    const modelParam = searchParams.get("model") || "all";
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const minYearParam = searchParams.get("minYear");
    const maxYearParam = searchParams.get("maxYear");
    const conditionParam = searchParams.get("condition") || "all";
    const categoryParam = searchParams.get("category") || "all";
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
    const filtered = getFilteredVehicles({
      make: make || undefined,
      model: model || undefined,
      minYear,
      maxYear,
      minPrice,
      maxPrice,
      condition: condition || undefined,
      category: category || undefined,
      query: query || undefined,
    });

    // Apply sorting
    let sorted = [...filtered];
    if (sort === "newest") {
      sorted.sort((a, b) => b.year - a.year);
    } else if (sort === "oldest") {
      sorted.sort((a, b) => a.year - b.year);
    } else if (sort === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setVehicles(sorted);
  }, [
    make,
    model,
    minYear,
    maxYear,
    minPrice,
    maxPrice,
    condition,
    category,
    query,
    sort,
  ]);

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (make && make !== "all") params.append("make", make);
    if (model && model !== "all") params.append("model", model);
    if (minPrice !== undefined) params.append("minPrice", minPrice.toString());
    if (maxPrice !== undefined) params.append("maxPrice", maxPrice.toString());
    if (minYear !== undefined) params.append("minYear", minYear.toString());
    if (maxYear !== undefined) params.append("maxYear", maxYear.toString());
    if (condition && condition !== "all") params.append("condition", condition);
    if (category && category !== "all") params.append("category", category);
    if (query) params.append("query", query);
    if (sort) params.append("sort", sort);

    setSearchParams(params);
  };

  const resetFilters = () => {
    setMake("all");
    setModel("all");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setMinYear(undefined);
    setMaxYear(undefined);
    setCondition("all");
    setCategory("all");
    setQuery("");
    setSort("newest");
    setSearchParams({});
  };

  return (
    <>
      <main className="overflow-hidden">
        {/* Hero Section */}
        <div className="relative bg-car-blue-900 text-white min-h-[50vh] md:min-h-[60vh] pt-5">
          {/* Hero Background Image */}
          <div 
            className="absolute inset-0 z-0" 
            style={{ 
              backgroundImage: "url('/public/images/hero/hero.avif')", 
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
              backgroundAttachment: 'scroll'
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-60"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 z-10"></div>
          
          {/* Navbar */}
          <div className="relative z-10">
            <Navbar />
          </div>
          
          {/* Hero Content */}
          <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[40vh] md:min-h-[50vh] py-10">
            <div className="w-full max-w-6xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Our Vehicle Collection
                </h1>
                
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Discover the perfect vehicle from our extensive collection of premium cars at unbeatable prices.
                </p>
              </motion.div>
              
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="max-w-5xl mx-auto px-4"
              >
                <SearchBar />
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 z-10"></div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="w-full">

          {/* Vehicle List */}
          <div className="w-full">
            {/* Results Header */}
            <div className="flex justify-end mb-6">
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[180px] bg-white border-gray-200 focus:ring-2 focus:ring-primary/20 font-space-grotesk">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="font-space-grotesk">
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Vehicle Grid */}
            {vehicles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((vehicle) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <VehicleCard vehicle={vehicle} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-600 font-space-grotesk">
                  No vehicles found matching your criteria
                </h3>
                <p className="text-gray-500 mt-2 font-space-grotesk">
                  Try adjusting your filters or search terms
                </p>
              </div>
        )}
      </div>
    </div>
  </div>
  </main>
  <Footer />
</>
);
}

export default VehicleListing;
