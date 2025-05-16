
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VehicleCard from "./VehicleCard";
import { getFeaturedVehicles } from "@/data/vehicles";

const FeaturedVehicles = () => {
  const featuredVehicles = getFeaturedVehicles();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Vehicles</h2>
            <p className="text-gray-600 mt-2">Explore our handpicked selection of premium vehicles</p>
          </div>
          <Link to="/vehicles">
            <Button variant="outline" className="mt-4 md:mt-0 border-car-blue-600 text-car-blue-700 hover:bg-car-blue-50">
              View All Vehicles
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
