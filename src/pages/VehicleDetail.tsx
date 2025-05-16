
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
  
  const formattedPrice = vehicle.price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });
  
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
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
              <span className="text-3xl font-bold text-car-blue-800">{formattedPrice}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8">
                <div className="rounded-lg overflow-hidden bg-gray-100 h-96 mb-2">
                  {vehicle.images.length > 0 ? (
                    <img
                      src={vehicle.images[activeImageIndex]}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-200">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                </div>
                
                {vehicle.images.length > 1 && (
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
                        <img
                          src={image}
                          alt={`${vehicle.make} ${vehicle.model} - Image ${index + 1}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Vehicle Details Tabs */}
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="w-full">
                  <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                  <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="p-4 bg-white rounded-b-lg border border-t-0">
                  <h3 className="text-xl font-bold mb-3">Vehicle Description</h3>
                  <p className="text-gray-700 mb-6">{vehicle.description}</p>
                  
                  <VehicleSpecifications vehicle={vehicle} />
                </TabsContent>
                <TabsContent value="features" className="p-4 bg-white rounded-b-lg border border-t-0">
                  <h3 className="text-xl font-bold mb-4">Features & Options</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {vehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Seller Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border shadow-sm p-6 mb-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Seller Information</h3>
                <div className="mb-4">
                  <p className="font-semibold text-lg">{vehicle.sellerName}</p>
                  <p className="text-gray-600">
                    {vehicle.sellerType === "Dealer" ? "Dealership" : "Private Seller"}
                  </p>
                  <p className="text-gray-600">{vehicle.location}</p>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-4">
                  <Button className="w-full bg-car-red-500 hover:bg-car-red-600">
                    Contact Seller
                  </Button>
                  <Button variant="outline" className="w-full border-car-blue-600 text-car-blue-700 hover:bg-car-blue-50">
                    {vehicle.sellerPhone}
                  </Button>
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
