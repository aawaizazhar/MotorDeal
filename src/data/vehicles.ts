
export interface Vehicle {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  exteriorColor: string;
  interiorColor: string;
  fuelType: string;
  transmission: string;
  drivetrain: string;
  engineSize: string;
  description: string;
  features: string[];
  images: string[];
  condition: 'New' | 'Used' | 'Certified Pre-Owned';
  bodyStyle: string;
  sellerId: string;
  sellerName: string;
  sellerPhone: string;
  sellerEmail: string;
  sellerType: 'Dealer' | 'Private';
  location: string;
  vin: string;
  isFeatured: boolean;
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    title: "2021 Tesla Model 3 Long Range",
    make: "Tesla",
    model: "Model 3",
    year: 2021,
    price: 42999,
    mileage: 18500,
    exteriorColor: "Pearl White",
    interiorColor: "Black",
    fuelType: "Electric",
    transmission: "Automatic",
    drivetrain: "All-wheel Drive",
    engineSize: "Dual Motor",
    description: "This beautiful Tesla Model 3 Long Range comes with Autopilot, premium sound system, and glass roof. With only 18,500 miles, it's in excellent condition and has the remainder of the factory warranty.",
    features: ["Autopilot", "Premium Sound System", "Glass Roof", "Heated Seats", "Navigation"],
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1619767889814-f91e281cda7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    ],
    condition: "Used",
    bodyStyle: "Sedan",
    sellerId: "d1",
    sellerName: "EV Auto Sales",
    sellerPhone: "(555) 123-4567",
    sellerEmail: "sales@evauto.example.com",
    sellerType: "Dealer",
    location: "San Francisco, CA",
    vin: "5YJ3E1EA1MF123456",
    isFeatured: true
  },
  {
    id: "2",
    title: "2023 Ford Mustang GT Premium",
    make: "Ford",
    model: "Mustang",
    year: 2023,
    price: 56780,
    mileage: 3215,
    exteriorColor: "Race Red",
    interiorColor: "Ebony",
    fuelType: "Gasoline",
    transmission: "6-Speed Manual",
    drivetrain: "Rear-wheel Drive",
    engineSize: "5.0L V8",
    description: "This stunning 2023 Ford Mustang GT Premium comes with the Performance Package, Active Valve Exhaust, and Recaro seats. With only 3,215 miles, it's practically new and will bring excitement to your driving experience.",
    features: ["Performance Package", "Active Valve Exhaust", "Recaro Seats", "SYNC 4", "B&O Sound System"],
    images: [
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1588258253658-99478cedcf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    condition: "New",
    bodyStyle: "Coupe",
    sellerId: "d2",
    sellerName: "Premium Auto Group",
    sellerPhone: "(555) 987-6543",
    sellerEmail: "sales@premiumauto.example.com",
    sellerType: "Dealer",
    location: "Los Angeles, CA",
    vin: "1FA6P8CF7P5123456",
    isFeatured: true
  },
  {
    id: "3",
    title: "2020 Honda CR-V EX-L AWD",
    make: "Honda",
    model: "CR-V",
    year: 2020,
    price: 29499,
    mileage: 32456,
    exteriorColor: "Modern Steel Metallic",
    interiorColor: "Gray Leather",
    fuelType: "Gasoline",
    transmission: "Continuously Variable",
    drivetrain: "All-wheel Drive",
    engineSize: "1.5L Turbo I-4",
    description: "This well-maintained 2020 Honda CR-V EX-L AWD comes with leather seats, power moonroof, and Honda Sensing safety features. It has been serviced regularly and is in excellent condition.",
    features: ["Leather Seats", "Power Moonroof", "Honda Sensing", "Apple CarPlay", "Android Auto"],
    images: [
      "https://images.unsplash.com/photo-1583870908951-71149f42a5c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1589148938909-4d241c919d2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1594485074148-e4f65b540244?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    condition: "Used",
    bodyStyle: "SUV",
    sellerId: "d3",
    sellerName: "Family Auto Center",
    sellerPhone: "(555) 456-7890",
    sellerEmail: "sales@familyauto.example.com",
    sellerType: "Dealer",
    location: "Denver, CO",
    vin: "7FARW2H56LE123456",
    isFeatured: true
  },
  {
    id: "4",
    title: "2019 BMW X5 xDrive40i",
    make: "BMW",
    model: "X5",
    year: 2019,
    price: 46899,
    mileage: 42310,
    exteriorColor: "Alpine White",
    interiorColor: "Cognac Vernasca Leather",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "All-wheel Drive",
    engineSize: "3.0L I-6 Turbo",
    description: "This luxurious 2019 BMW X5 xDrive40i features premium Vernasca leather, panoramic moonroof, and the Premium Package. It has been meticulously maintained and comes with a clean vehicle history report.",
    features: ["Premium Package", "Panoramic Moonroof", "Harman Kardon Sound", "Navigation", "Heated Seats"],
    images: [
      "https://images.unsplash.com/photo-1570733577524-3a047079e80d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    condition: "Used",
    bodyStyle: "SUV",
    sellerId: "d4",
    sellerName: "Luxury Motors",
    sellerPhone: "(555) 789-0123",
    sellerEmail: "sales@luxurymotors.example.com",
    sellerType: "Dealer",
    location: "Miami, FL",
    vin: "5UXCR6C54KLE12345",
    isFeatured: false
  },
  {
    id: "5",
    title: "2022 Toyota RAV4 Hybrid XLE",
    make: "Toyota",
    model: "RAV4",
    year: 2022,
    price: 33990,
    mileage: 15678,
    exteriorColor: "Blueprint",
    interiorColor: "Black Fabric",
    fuelType: "Hybrid",
    transmission: "Continuously Variable",
    drivetrain: "All-wheel Drive",
    engineSize: "2.5L I-4 Hybrid",
    description: "This efficient 2022 Toyota RAV4 Hybrid XLE offers excellent fuel economy and Toyota Safety Sense 2.0. With low mileage and remaining factory warranty, it's a smart choice for a reliable hybrid SUV.",
    features: ["Toyota Safety Sense 2.0", "Smart Key System", "Dual-Zone Climate", "Apple CarPlay", "Android Auto"],
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    condition: "Used",
    bodyStyle: "SUV",
    sellerId: "d5",
    sellerName: "Green Auto Sales",
    sellerPhone: "(555) 234-5678",
    sellerEmail: "sales@greenauto.example.com",
    sellerType: "Dealer",
    location: "Portland, OR",
    vin: "JTMB6RFV4N5123456",
    isFeatured: true
  },
  {
    id: "6",
    title: "2018 Jeep Wrangler Unlimited Rubicon",
    make: "Jeep",
    model: "Wrangler",
    year: 2018,
    price: 39750,
    mileage: 47250,
    exteriorColor: "Granite Crystal Metallic",
    interiorColor: "Black Leather",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "Four-wheel Drive",
    engineSize: "3.6L V6",
    description: "This rugged 2018 Jeep Wrangler Unlimited Rubicon features a hardtop, 33-inch tires, and lifted suspension. Perfect for off-road adventures or cruising with the top down.",
    features: ["Hardtop", "Lifted Suspension", "33-inch Tires", "Navigation", "Heated Seats"],
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    condition: "Used",
    bodyStyle: "SUV",
    sellerId: "p1",
    sellerName: "Mike Johnson",
    sellerPhone: "(555) 345-6789",
    sellerEmail: "mikej@example.com",
    sellerType: "Private",
    location: "Colorado Springs, CO",
    vin: "1C4HJXFG4JW123456",
    isFeatured: false
  }
];

export const getMakes = (): string[] => {
  const makes = vehicles.map(vehicle => vehicle.make);
  return [...new Set(makes)].sort();
};

export const getModels = (make?: string): string[] => {
  const filteredVehicles = make 
    ? vehicles.filter(vehicle => vehicle.make === make)
    : vehicles;
  
  const models = filteredVehicles.map(vehicle => vehicle.model);
  return [...new Set(models)].sort();
};

export const getYearRange = (): { min: number; max: number } => {
  const years = vehicles.map(vehicle => vehicle.year);
  return {
    min: Math.min(...years),
    max: Math.max(...years)
  };
};

export const getPriceRange = (): { min: number; max: number } => {
  const prices = vehicles.map(vehicle => vehicle.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};

export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};

export const getFilteredVehicles = (
  filters: {
    make?: string;
    model?: string;
    minYear?: number;
    maxYear?: number;
    minPrice?: number;
    maxPrice?: number;
    condition?: 'New' | 'Used' | 'Certified Pre-Owned';
    category?: string;
  } = {}
): Vehicle[] => {
  return vehicles.filter(vehicle => {
    // Filter by make
    if (filters.make && vehicle.make !== filters.make) {
      return false;
    }
    
    // Filter by model
    if (filters.model && vehicle.model !== filters.model) {
      return false;
    }
    
    // Filter by min year
    if (filters.minYear && vehicle.year < filters.minYear) {
      return false;
    }
    
    // Filter by max year
    if (filters.maxYear && vehicle.year > filters.maxYear) {
      return false;
    }
    
    // Filter by min price
    if (filters.minPrice && vehicle.price < filters.minPrice) {
      return false;
    }
    
    // Filter by max price
    if (filters.maxPrice && vehicle.price > filters.maxPrice) {
      return false;
    }
    
    // Filter by condition
    if (filters.condition && vehicle.condition !== filters.condition) {
      return false;
    }
    
    // Filter by category (checking against description, fuel type, and body style)
    if (filters.category) {
      const categoryMatch = 
        vehicle.description.toLowerCase().includes(filters.category.toLowerCase()) ||
        vehicle.fuelType.toLowerCase() === filters.category.toLowerCase() ||
        vehicle.bodyStyle.toLowerCase() === filters.category.toLowerCase();
      
      if (!categoryMatch) {
        return false;
      }
    }
    
    return true;
  });
};

export const getFeaturedVehicles = (): Vehicle[] => {
  return vehicles.filter(vehicle => vehicle.isFeatured);
};
