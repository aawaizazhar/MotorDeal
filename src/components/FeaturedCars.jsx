import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Zap, Fuel, Settings, Gauge, Star, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample featured cars data
const featuredCars = [
  {
    id: '1',
    brand: 'Lamborghini',
    model: 'Urus',
    year: 2024,
    bodyType: 'SUV',
    condition: 'New',
    image: 'images/vehicles/lamborghini-urus.jpg',
    price: 1150000,
    logo: 'images/logos/lamborghini.png',
    specs: {
      speed: 150,
      engine: '4.0L',
      fuel: 'Petrol',
      transmission: 'Auto'
    }
  },
  {
    id: '2',
    brand: 'Audi',
    model: 'R8',
    year: 2023,
    bodyType: 'Convertible',
    condition: 'New',
    image: 'images/vehicles/audi-r8.jpg',
    price: 680000,
    logo: '/logos/audi.png',
    specs: {
      speed: 90,
      engine: '5.2L',
      fuel: 'Diesel',
      transmission: 'Manual'
    }
  },
  {
    id: '3',
    brand: 'Ferrari',
    model: '458 Italia',
    year: 2019,
    bodyType: 'Coupe',
    condition: 'Used',
    image: 'images/vehicles/ferrari-458-italia.jpg',
    price: 850000,
    logo: '/logos/ferrari.png',
    specs: {
      speed: 15200,
      engine: '4.5L',
      fuel: 'Hybrid',
      transmission: 'Manual'
    }
  }
];

// Format price with commas
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const FeaturedCars = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Navigation functions for the carousel
  const nextSlide = () => {
    setActiveIndex((current) => 
      current === featuredCars.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) => 
      current === 0 ? featuredCars.length - 1 : current - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-20 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-red-50 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated underline */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">FEATURED CARS</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-car-red-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover our handpicked selection of premium vehicles, each one representing the pinnacle of automotive excellence.
            </p>
          </motion.div>
        </div>

        {/* Featured car showcase - Mobile (Carousel) */}
        <div className="md:hidden relative">
          {/* Main carousel */}
          <div className="overflow-hidden rounded-xl">
            <div className="relative">
              {featuredCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    x: `${(index - activeIndex) * 100}%`
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 w-full ${activeIndex === index ? 'z-10' : 'z-0'}`}
                >
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:border-car-red-500/30 transition-colors">
                    {/* Condition badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${car.condition === 'New' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {car.condition}
                      </span>
                    </div>

                    {/* Car Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={car.image} 
                        alt={`${car.brand} ${car.model}`} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center p-2">
                            <img 
                              src={`https://ui-avatars.com/api/?name=${car.brand.charAt(0)}&background=random&color=fff&bold=true&size=40`} 
                              alt={car.brand} 
                              className="w-6 h-6"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl drop-shadow-md">{car.brand} {car.model}</h3>
                            <p className="text-xs text-gray-200">{car.year} • {car.bodyType}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Car Specs */}
                    <div className="grid grid-cols-4 p-4 bg-white text-gray-800 border-b border-gray-100">
                      <div className="flex flex-col items-center justify-center">
                        <Gauge className="h-5 w-5 text-blue-500 mb-1" />
                        <span className="text-xs font-medium">{car.specs.speed}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <Zap className="h-5 w-5 text-amber-500 mb-1" />
                        <span className="text-xs font-medium">{car.specs.engine}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <Fuel className="h-5 w-5 text-green-500 mb-1" />
                        <span className="text-xs font-medium">{car.specs.fuel}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <Settings className="h-5 w-5 text-purple-500 mb-1" />
                        <span className="text-xs font-medium">{car.specs.transmission}</span>
                      </div>
                    </div>

                    {/* Car Price and CTA */}
                    <div className="p-4 bg-white">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <Tag className="h-5 w-5 text-car-red-500 mr-2" />
                          <p className="text-2xl font-bold">PKR {formatPrice(car.price)}</p>
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center text-amber-500">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                        </div>
                      </div>
                      <Link to={`/vehicles/${car.id}`}>
                        <Button className="w-full bg-[#E11D48] hover:bg-[#CB1A41] text-white rounded-lg py-6 flex items-center justify-center group">
                          <span>VIEW DETAILS</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {featuredCars.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndex === index ? 'bg-car-red-500 w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Featured cars grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <Link key={car.id} to={`/vehicles/${car.id}`} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 hover:border-car-red-500/30"
                onMouseEnter={() => setHoveredCard(car.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Condition badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${car.condition === 'New' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {car.condition}
                  </span>
                </div>

                {/* Car Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={`${car.brand} ${car.model}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Quick view button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/vehicles/${car.id}`;
                      }}
                      className="bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Quick View
                    </Button>
                  </div>
                </div>

                {/* Car Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center p-2">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${car.brand.charAt(0)}&background=random&color=fff&bold=true&size=40`} 
                          alt={car.brand} 
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{car.brand} {car.model}</h3>
                        <p className="text-sm text-gray-500">{car.year} • {car.bodyType}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">5.0</span>
                    </div>
                  </div>

                  {/* Car Specs */}
                  <div className="grid grid-cols-4 gap-2 mb-6 p-3 bg-gray-50 rounded-lg">
                    <div className="flex flex-col items-center justify-center">
                      <Gauge className="h-5 w-5 text-blue-500 mb-1" />
                      <span className="text-xs font-medium">{car.specs.speed}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <Zap className="h-5 w-5 text-amber-500 mb-1" />
                      <span className="text-xs font-medium">{car.specs.engine}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <Fuel className="h-5 w-5 text-green-500 mb-1" />
                      <span className="text-xs font-medium">{car.specs.fuel}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <Settings className="h-5 w-5 text-purple-500 mb-1" />
                      <span className="text-xs font-medium">{car.specs.transmission}</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Price</p>
                      <p className="text-2xl font-bold">PKR {formatPrice(car.price)}</p>
                    </div>
                    <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/vehicles/${car.id}`;
                      }}
                      className="bg-[#E11D48] hover:bg-[#CB1A41] text-white rounded-lg px-4 py-2 flex items-center group"
                    >
                      <span>Details</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 text-center">
          <Link to="/vehicles">
            <Button variant="outline" className="border-2 border-[#E11D48] text-[#E11D48] hover:bg-[#E11D48] hover:text-white rounded-lg px-8 py-6 font-medium transition-colors duration-300 inline-flex items-center group">
              <span>VIEW ALL VEHICLES</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
