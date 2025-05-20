import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VehicleSpecifications from "@/components/VehicleSpecifications";
import VehicleCard from "@/components/VehicleCard";
import { Vehicle, getVehicleById, getFilteredVehicles } from "@/data/vehicles";

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [similarVehicles, setSimilarVehicles] = useState<Vehicle[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      const foundVehicle = getVehicleById(id);
      
      if (foundVehicle) {
        setVehicle(foundVehicle);
        
        // Get similar vehicles (same make or body style)
        const similar = getFilteredVehicles({
          make: foundVehicle.make
        }).filter(v => v.id !== id).slice(0, 3);
        
        setSimilarVehicles(similar);
      }
      
      setLoading(false);
    }
  }, [id]);
  
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-32 min-h-screen flex items-center justify-center">
          <p className="text-xl">Loading vehicle information...</p>
        </div>
        <Footer />
      </>
    );
  }
  
  if (!vehicle) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-32 min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Vehicle Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The vehicle you're looking for doesn't exist or has been removed.</p>
            <Link to="/vehicles">
              <Button className="bg-car-blue-700 hover:bg-car-blue-800">
                Browse All Vehicles
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  const formattedPrice = `PKR ${vehicle.price.toLocaleString()}`;
  
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="text-sm mb-6">
            <ol className="flex items-center">
              <li>
                <Link to="/" className="text-gray-500 hover:text-car-blue-700">Home</Link>
              </li>
              <span className="mx-2 text-gray-400">/</span>
              <li>
                <Link to="/vehicles" className="text-gray-500 hover:text-car-blue-700">Vehicles</Link>
              </li>
              <span className="mx-2 text-gray-400">/</span>
              <li className="text-gray-900 font-medium">{vehicle.title}</li>
            </ol>
          </nav>
          
          {/* Vehicle Title & Price */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-3xl font-bold">{vehicle.title}</h1>
            <div className="mt-2 md:mt-0">
              <span className="text-3xl font-bold text-car-blue-800">{formattedPrice.replace('USD', 'PKR')}</span>
            </div>
          </div>
          
          {/* Main Content: Image Gallery, Details, and Seller Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Image Gallery and Tabs */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8">
                <div className="rounded-lg overflow-hidden bg-gray-100 h-96 mb-2 flex items-center justify-center">
                  {vehicle.images && vehicle.images.length > 0 && vehicle.images[activeImageIndex] ? (
                    <img
                      src={vehicle.images[activeImageIndex]}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.src = '/images/vehicles/fallback.jpg';
                        target.className = 'w-full h-full object-contain object-center p-4';
                      }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full bg-gray-200 p-4 text-center">
                      <svg className="w-16 h-16 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600">No image available</span>
                    </div>
                  )}
                </div>
                
                {vehicle.images && vehicle.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {vehicle.images.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`rounded-md overflow-hidden h-20 w-32 flex-shrink-0 border-2 ${
                          index === activeImageIndex
                            ? "border-car-blue-700"
                            : "border-transparent"
                        }`}
                        onClick={() => setActiveImageIndex(index)}
                      >
                        <div className="relative w-full h-full">
                          <img
                            src={image}
                            alt={`${vehicle.make} ${vehicle.model} - Image ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null; // Prevent infinite loop
                              target.src = '/images/vehicles/fallback.jpg';
                              target.className = 'w-full h-full object-contain object-center p-1';
                            }}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Vehicle Details Tabs */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="p-6">
                    <h3 className="text-xl font-bold mb-4">Vehicle Description</h3>
                    <div className="mb-6">
                      {vehicle.images && vehicle.images.length > 0 ? (
                        <div className="float-right ml-6 mb-4 w-1/3">
                          <img
                            src={vehicle.images[0]}
                            alt={`${vehicle.make} ${vehicle.model}`}
                            className="w-full h-auto rounded-lg shadow-md"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/vehicles/fallback.jpg';
                            }}
                          />
                        </div>
                      ) : (
                        <div className="float-right ml-6 mb-4 w-1/3 bg-gray-100 rounded-lg flex items-center justify-center" style={{ height: '200px' }}>
                          <span className="text-gray-400">No image available</span>
                        </div>
                      )}
                      <p className="text-gray-700 leading-relaxed">
                        {vehicle.description || 'No description available for this vehicle.'}
                      </p>
                    </div>
                    
                    <div className="clear-both">
                      <VehicleSpecifications vehicle={vehicle} />
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">SPECIFICATIONS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Example Specification Item */}
                      <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-700">Car Make</span>
                        <span className="font-semibold text-gray-900">{vehicle.make}</span>
                      </div>
                       <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-700">Cylinders</span>{/* Assuming cylinders data is available or can be added */}
                        <span className="font-semibold text-gray-900">8</span>{/* Placeholder value */} 
                      </div>
                       <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-700">Car Type</span>
                        <span className="font-semibold text-gray-900">{vehicle.bodyStyle}</span>{/* Using bodyStyle as Car Type */}
                      </div>
                       <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-700">Engine</span>{/* Assuming engine data is available */}
                        <span className="font-semibold text-gray-900">{vehicle.engineSize}</span>
                      </div>
                       <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-700">Car Condition</span>
                        <span className="font-semibold text-gray-900">{vehicle.condition}</span>
                      </div>
                       <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-700">Mileage (KM)</span>
                        <span className="font-semibold text-gray-900">{vehicle.mileage.toLocaleString()}</span>{/* Assuming mileage is in KM */} 
                      </div>
                       <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-700">Fuel Type</span>
                        <span className="font-semibold text-gray-900">{vehicle.fuelType}</span>
                      </div>
                       <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-700">Horsepower</span>{/* Assuming horsepower data is available */}
                        <span className="font-semibold text-gray-900">{vehicle.horsePower || 'N/A'} HP</span>{/* Using horsePower data */}
                      </div>
                       <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-700">Transmission</span>
                        <span className="font-semibold text-gray-900">{vehicle.transmission}</span>
                      </div>
                       <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-700">Body Color</span>{/* Assuming exteriorColor data is available */}
                        <span className="font-semibold text-gray-900">{vehicle.exteriorColor}</span>{/* Using exteriorColor */}
                      </div>
                       <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-700">Year</span>
                        <span className="font-semibold text-gray-900">{vehicle.year}</span>
                      </div>
                       <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-700">Stock ID</span>{/* Assuming VIN can be used as Stock ID */}
                        <span className="font-semibold text-gray-900">{vehicle.vin}</span>{/* Using VIN as Stock ID */}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Right Column: Seller Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border shadow-sm p-6 mb-6 sticky top-28">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">GET IN TOUCH</h3>
                
                <div className="space-y-4 mb-6">
                  {/* Phone Button */}
                  <a href={`tel:${vehicle.sellerPhone}`} className="w-full bg-car-red-500 hover:bg-car-red-600 text-white py-3 text-lg font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21m-2.239 2.239a4.5 4.5 0 006.364 6.364l1.498-1.498a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Seller</span>
                  </a>
                  
                  {/* Email Button */}
                  <a href={`mailto:${vehicle.sellerEmail}`} className="w-full bg-car-blue-600 hover:bg-car-blue-700 text-white py-3 text-lg font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 13H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v13a2 2 0 01-2 2z" />
                    </svg>
                    <span>Email Seller</span>
                  </a>

                  {/* Contact Us Button */}
                   <Link to="/contact" className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 text-lg font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-.707l2.121-2.121a1 1 0 000-1.414l-3.535-3.535a1 1 0 00-1.414 0L10.586 11H11v.01zM15 17h.01M17 17h.01" />
                    </svg>
                    <span>General Inquiry</span>
                  </Link>
                </div>
                
                {/* Extra Benefits Section */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">EXTRA BENEFITS</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-car-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Warranty</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-car-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Financing Option</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-car-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Vehicle Trade-In</span>
                    </li>
                     <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-car-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Maintenance Offers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Similar Vehicles */}
          {similarVehicles.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Similar Vehicles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {similarVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VehicleDetail;
