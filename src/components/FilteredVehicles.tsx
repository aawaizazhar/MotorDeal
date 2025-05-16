
import { Vehicle } from "@/data/vehicles";
import VehicleCard from "./VehicleCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface FilteredVehiclesProps {
  vehicles: Vehicle[];
  category: string;
}

const FilteredVehicles = ({ vehicles, category }: FilteredVehiclesProps) => {
  // Show only up to 3 vehicles on the home page
  const displayVehicles = vehicles.slice(0, 3);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {category ? `${category} Vehicles` : 'Featured Vehicles'}
          </h2>
          <Link to={`/vehicles${category ? `?category=${category}` : ''}`}>
            <Button variant="outline" className="border-car-blue-600 text-car-blue-700">
              View all
            </Button>
          </Link>
        </div>
        
        {displayVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center bg-white rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No vehicles found</h3>
            <p className="text-gray-600 mb-6">Try selecting a different category or browse all vehicles.</p>
            <Link to="/vehicles">
              <Button className="bg-car-blue-700 hover:bg-car-blue-800">
                Browse All Vehicles
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilteredVehicles;
