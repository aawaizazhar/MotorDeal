
import { Vehicle } from "@/data/vehicles";

interface VehicleSpecificationsProps {
  vehicle: Vehicle;
}

const VehicleSpecifications = ({ vehicle }: VehicleSpecificationsProps) => {
  const specs = [
    { name: "Make", value: vehicle.make },
    { name: "Model", value: vehicle.model },
    { name: "Year", value: vehicle.year.toString() },
    { name: "Condition", value: vehicle.condition },
    { name: "Mileage", value: `${vehicle.mileage.toLocaleString()} mi` },
    { name: "Exterior Color", value: vehicle.exteriorColor },
    { name: "Interior Color", value: vehicle.interiorColor },
    { name: "Body Style", value: vehicle.bodyStyle },
    { name: "Fuel Type", value: vehicle.fuelType },
    { name: "Transmission", value: vehicle.transmission },
    { name: "Drivetrain", value: vehicle.drivetrain },
    { name: "Engine", value: vehicle.engineSize },
    { name: "VIN", value: vehicle.vin },
  ];

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <h3 className="text-xl font-bold mb-4">Vehicle Specifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {specs.map((spec) => (
          <div key={spec.name} className="flex border-b border-gray-100 pb-2">
            <span className="text-gray-600 font-medium w-1/2">{spec.name}:</span>
            <span className="text-gray-900 w-1/2">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSpecifications;
