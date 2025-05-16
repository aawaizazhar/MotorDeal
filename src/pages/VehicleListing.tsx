
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
import { Vehicle, getFilteredVehicles, getMakes, getModels, getPriceRange, getYearRange } from "@/data/vehicles";

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
    const sortParam = searchParams.get("sort") || "newest";
    
    setMake(makeParam);
    setModel(modelParam);
    setMinPrice(minPriceParam ? parseInt(minPriceParam) : undefined);
    setMaxPrice(maxPriceParam ? parseInt(maxPriceParam) : undefined);
    setMinYear(minYearParam ? parseInt(minYearParam) : undefined);
    setMaxYear(maxYearParam ? parseInt(maxYearParam) : undefined);
    setCondition(conditionParam);
    setSort(sortParam);
  }, [searchParams]);
  
  // Apply filters and get vehicles
  useEffect(() => {
    let filtered = getFilteredVehicles({
      make: make || undefined,
      model: model || undefined,
      minYear,
      maxYear,
      minPrice,
      maxPrice,
      condition: condition as any || undefined,
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
    
    setVehicles(filtered);
  }, [make, model, minYear, maxYear, minPrice, maxPrice, condition, sort]);
  
  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (make) params.append("make", make);
    if (model) params.append("model", model);
    if (minPrice) params.append("minPrice", minPrice.toString());
    if (maxPrice) params.append("maxPrice", maxPrice.toString());
    if (minYear) params.append("minYear", minYear.toString());
    if (maxYear) params.append("maxYear", maxYear.toString());
    if (condition) params.append("condition", condition);
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
    setSort("newest");
    setSearchParams({});
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Browse Vehicles</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-lg border shadow-sm p-5 sticky top-24">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">Filters</h2>
                  <Button 
                    variant="ghost" 
                    className="text-car-blue-700 hover:text-car-blue-800 hover:bg-car-blue-50 h-8 px-2"
                    onClick={resetFilters}
                  >
                    Reset
                  </Button>
                </div>
                
                <div className="space-y-5">
                  {/* Make Filter */}
                  <div>
                    <label className="text-sm font-medium block mb-1">Make</label>
                    <Select value={make} onValueChange={setMake}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Make" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any Make</SelectItem>
                        {makes.map((make) => (
                          <SelectItem key={make} value={make}>{make}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Model Filter */}
                  <div>
                    <label className="text-sm font-medium block mb-1">Model</label>
                    <Select value={model} onValueChange={setModel} disabled={!make}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any Model</SelectItem>
                        {models.map((model) => (
                          <SelectItem key={model} value={model}>{model}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Price Range */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-sm font-medium">Price Range</label>
                      <span className="text-sm text-gray-500">
                        ${minPrice || priceRange.min} - ${maxPrice || priceRange.max}
                      </span>
                    </div>
                    <div className="py-4">
                      <Slider
                        defaultValue={[priceRange.min, priceRange.max]}
                        min={priceRange.min}
                        max={priceRange.max}
                        step={1000}
                        value={[minPrice || priceRange.min, maxPrice || priceRange.max]}
                        onValueChange={(values) => {
                          setMinPrice(values[0]);
                          setMaxPrice(values[1]);
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Year Range */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-sm font-medium">Year Range</label>
                      <span className="text-sm text-gray-500">
                        {minYear || yearRange.min} - {maxYear || yearRange.max}
                      </span>
                    </div>
                    <div className="py-4">
                      <Slider
                        defaultValue={[yearRange.min, yearRange.max]}
                        min={yearRange.min}
                        max={yearRange.max}
                        step={1}
                        value={[minYear || yearRange.min, maxYear || yearRange.max]}
                        onValueChange={(values) => {
                          setMinYear(values[0]);
                          setMaxYear(values[1]);
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Condition Filter */}
                  <div>
                    <label className="text-sm font-medium block mb-1">Condition</label>
                    <Select value={condition} onValueChange={setCondition}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any Condition</SelectItem>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Used">Used</SelectItem>
                        <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    onClick={applyFilters}
                    className="w-full bg-car-blue-700 hover:bg-car-blue-800"
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Vehicles Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-medium">{vehicles.length}</span> results
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <Select value={sort} onValueChange={(value) => {
                    setSort(value);
                    searchParams.set("sort", value);
                    setSearchParams(searchParams);
                  }}>
                    <SelectTrigger className="w-44">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="priceLow">Price: Low to High</SelectItem>
                      <SelectItem value="priceHigh">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {vehicles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {vehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No vehicles found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your filters or browse all vehicles.</p>
                  <Button 
                    onClick={resetFilters}
                    className="bg-car-blue-700 hover:bg-car-blue-800"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VehicleListing;
