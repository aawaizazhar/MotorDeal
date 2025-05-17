
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="relative bg-car-blue-900 text-white">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')", 
          opacity: 0.4,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Perfect Vehicle
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl">
            Browse thousands of cars, trucks, and SUVs from trusted sellers. 
            Your dream car is just a search away.
          </p>
          
          {/* Call to Action */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button className="bg-car-red-500 hover:bg-car-red-600 text-white px-8 py-6 text-lg">
              Browse Vehicles
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Sell Your Car
            </Button>
          </div>
          
          {/* Search Bar */}
          <div className="bg-white p-4 rounded-lg shadow-xl">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
