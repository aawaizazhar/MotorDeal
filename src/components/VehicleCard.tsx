import { Link } from "react-router-dom";
import type { Vehicle } from "@/data/vehicles";
import { useState } from "react";
import { Gauge, Fuel, Settings, Car } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const {
    id,
    title,
    price,
    mileage,
    year,
    make,
    model,
    images,
    condition,
    transmission = "Auto",
    fuelType = "Petrol",
    engineSize = "4.0L",
    horsePower = "150"
  } = vehicle;
  
  // Fallback image for broken links
  const fallbackImage = "images/vehicles/fallback.avif";
  
  const [imgSrc, setImgSrc] = useState<string>(images[0] || fallbackImage);
  
  const handleImageError = () => {
    setImgSrc(fallbackImage);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={imgSrc}
          alt={title}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Condition Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            vehicle.condition === 'New' 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-800 text-white'
          }`}>
            {vehicle.condition}
          </span>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="p-4">
        {/* Header with brand logo, name, year, condition, and rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center p-2">
              <img 
                src={`https://ui-avatars.com/api/?name=${make.charAt(0)}&background=random&color=fff&bold=true&size=40`} 
                alt={make} 
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{make} {model}</h3>
              <p className="text-sm text-gray-500">{year} • {vehicle.bodyStyle}</p>{/* Assuming bodyStyle is used here */} 
            </div>
          </div>
          {/* Star Rating */}
          <div className="flex items-center text-amber-500">
            <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.069l6.572-.955L10 0l2.939 6.114 6.572.955-4.736 4.476 1.123 6.545z"/>
            </svg>
            <span className="text-sm font-medium">5.0</span>
          </div>
        </div>
        
        {/* Quick Specs */}
        <div className="grid grid-cols-4 gap-2 mb-4 p-3 bg-gray-100 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <svg className="w-5 h-5 text-blue-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xs font-medium text-gray-800">{Math.floor(mileage / 1000)}k km</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <svg className="w-5 h-5 text-amber-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-xs font-medium text-gray-800">{engineSize}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <svg className="w-5 h-5 text-green-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <span className="text-xs font-medium text-gray-800">{fuelType}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <svg className="w-5 h-5 text-purple-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="text-xs font-medium text-gray-800">{transmission}</span>
          </div>
        </div>
        
        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-2xl font-bold text-gray-900">PKR {price.toLocaleString()}</p>
          </div>
          <Link 
            to={`/vehicle/${id}`}
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center group"
          >
            <span>Details</span>
            <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
