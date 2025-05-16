
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Zap, Battery } from "lucide-react";

// Define the category type
interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const categories: Category[] = [
  {
    id: "sedan",
    name: "Sedan",
    description: "Comfortable and efficient for daily commutes",
    icon: <Car className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "suv",
    name: "SUV",
    description: "Spacious vehicles for family and adventure",
    icon: <Car className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1583870908951-71149f42a5c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "electric",
    name: "Electric",
    description: "Zero emissions with cutting-edge technology",
    icon: <Zap className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  },
  {
    id: "luxury",
    name: "Luxury",
    description: "Premium vehicles with superior comfort",
    icon: <Car className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1570733577524-3a047079e80d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "hybrid",
    name: "Hybrid",
    description: "Fuel efficiency with electric assistance",
    icon: <Battery className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "diesel",
    name: "Diesel",
    description: "High torque engines for towing and hauling",
    icon: <Car className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
  }
];

const PopularCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Popular Categories</h2>
          <p className="text-gray-600 mt-2">Explore our vehicles by category</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/vehicles?category=${category.id}`} 
              key={category.id}
              className="group"
            >
              <Card className="overflow-hidden border hover:shadow-md transition-shadow h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.imageUrl} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="flex items-center text-white">
                      <div className="bg-car-blue-700 rounded-full p-2 mr-3">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
