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
  horsePower?: string;
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
    title: "2024 Lamborghini Urus",
    make: "Lamborghini",
    model: "Urus",
    year: 2024,
    price: 1150000,
    mileage: 150,
    exteriorColor: "Nero Noctis",
    interiorColor: "Black",
    fuelType: "Petrol",
    transmission: "Automatic",
    drivetrain: "All-wheel Drive",
    engineSize: "4.0L",
    description: "The Lamborghini Urus is the first Super Sport Utility Vehicle in the world, merging the soul of a super sports car with the practical functionality of an SUV. Powered by a 650 hp twin-turbo V8 engine.",
    features: ["Carbon Ceramic Brakes", "Bang & Olufsen Sound System", "Panoramic Roof", "Heated Seats", "Advanced Driver Assistance"],
    images: [
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67210d3c6c5dda52abf0e1de_lamborghini-urus-p-800.jpg"
    ],
    condition: "New",
    bodyStyle: "SUV",
    sellerId: "d1",
    sellerName: "Luxury Auto Sales",
    sellerPhone: "(555) 123-4567",
    sellerEmail: "sales@luxuryauto.example.com",
    sellerType: "Dealer",
    location: "Miami, FL",
    vin: "ZPBCA2ZL0KLA12345",
    isFeatured: true
  },
  {
    id: "2",
    title: "2023 Audi R8",
    make: "Audi",
    model: "R8",
    year: 2023,
    price: 680000,
    mileage: 90,
    exteriorColor: "Daytona Gray",
    interiorColor: "Black/Red",
    fuelType: "Diesel",
    transmission: "Manual",
    drivetrain: "All-wheel Drive",
    engineSize: "5.2L",
    description: "The Audi R8 Spyder offers an exhilarating open-top driving experience with its powerful V10 engine and precision handling. This convertible supercar combines breathtaking performance with everyday usability.",
    features: ["Carbon Fiber Elements", "Bang & Olufsen Sound System", "Virtual Cockpit", "Performance Driving Modes", "LED Headlights"],
    images: [
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67210b537a3c7d2935154c9f_audi-r8-p-800.jpg"
    ],
    condition: "New",
    bodyStyle: "Convertible",
    sellerId: "d2",
    sellerName: "Premium Auto Group",
    sellerPhone: "(555) 987-6543",
    sellerEmail: "sales@premiumauto.example.com",
    sellerType: "Dealer",
    location: "Los Angeles, CA",
    vin: "WUABAAFX8K7123456",
    isFeatured: true
  },
  {
    id: "3",
    title: "2019 Ferrari 458 Italia",
    make: "Ferrari",
    model: "458 Italia",
    year: 2019,
    price: 850000,
    mileage: 15200,
    exteriorColor: "Rosso Corsa",
    interiorColor: "Black Leather",
    fuelType: "Hybrid",
    transmission: "Manual",
    drivetrain: "Rear-wheel Drive",
    engineSize: "4.5L",
    description: "The Ferrari 458 Italia is a masterpiece of engineering and design, representing the perfect combination of technology, captivating design and exhilarating driving experience. This low-mileage example is in pristine condition.",
    features: ["Carbon Ceramic Brakes", "Racing Seats", "Launch Control", "Ferrari Telemetry", "Carbon Fiber Interior"],
    images: [
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67210a9bde9e446bc672564e_ferrari-458-italia-p-800.jpg"
    ],
    condition: "Used",
    bodyStyle: "Coupe",
    sellerId: "d3",
    sellerName: "Exotic Motors",
    sellerPhone: "(555) 234-5678",
    sellerEmail: "sales@exoticmotors.example.com",
    sellerType: "Dealer",
    location: "Miami, FL",
    vin: "ZFF67NFA3K0123456",
    isFeatured: true
  },
  {
    id: "4",
    title: "2019 BMW X6 M",
    make: "BMW",
    model: "X6 M",
    year: 2019,
    price: 86899,
    mileage: 32310,
    exteriorColor: "Alpine White",
    interiorColor: "Cognac Merino Leather",
    fuelType: "Gasoline",
    transmission: "8-Speed M Steptronic",
    drivetrain: "All-wheel Drive",
    engineSize: "4.4L Twin-Turbo V8",
    horsePower: "567",
    description: "This high-performance 2019 BMW X6 M combines SUV practicality with M division performance. Featuring premium Merino leather, panoramic moonroof, and the Executive Package, it delivers exhilarating driving dynamics with everyday usability.",
    features: ["M Sport Differential", "Panoramic Moonroof", "Harman Kardon Sound", "Head-Up Display", "M Sport Seats with Heating"],
    images: [
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/672109f4648fb35dd627cd74_bmw-x6-f86-p-800.jpg"
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
    title: "2022 Ferrari 488 GTB",
    make: "Ferrari",
    model: "488 GTB",
    year: 2022,
    price: 339900,
    mileage: 5678,
    exteriorColor: "Rosso Scuderia",
    interiorColor: "Black Leather",
    fuelType: "Gasoline",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "Rear-wheel Drive",
    engineSize: "3.9L Twin-Turbo V8",
    horsePower: "661",
    description: "The Ferrari 488 GTB is a masterpiece of engineering with its twin-turbocharged V8 engine delivering breathtaking performance. This example in iconic Rosso Scuderia features the carbon fiber racing package and has been meticulously maintained.",
    features: ["Carbon Ceramic Brakes", "Carbon Fiber Racing Package", "Ferrari Power Warranty", "Daytona Racing Seats", "Scuderia Ferrari Shields"],
    images: [
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/6721090e80357065a7b49a4d_ferrari-488-gtb-p-800.jpg"
    ],
    condition: "Used",
    bodyStyle: "Coupe",
    sellerId: "d3",
    sellerName: "Exotic Motors",
    sellerPhone: "(555) 234-5678",
    sellerEmail: "sales@exoticmotors.example.com",
    sellerType: "Dealer",
    location: "Los Angeles, CA",
    vin: "ZFF79ALA7N0123456",
    isFeatured: true
  },
  // Removed problematic Lamborghini Aventador entry
  {
    id: "7",
    title: "2023 Lamborghini Huracan Evo",
    make: "Lamborghini",
    model: "Huracan Evo",
    year: 2023,
    price: 320000,
    mileage: 1200,
    exteriorColor: "Verde Mantis",
    interiorColor: "Black/Green",
    fuelType: "Gasoline",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "All-wheel Drive",
    engineSize: "5.2L V10",
    horsePower: "640",
    description: "The Lamborghini Huracan Evo represents the evolution of the iconic Huracan with enhanced aerodynamics, improved performance, and cutting-edge technology. This striking Verde Mantis example turns heads wherever it goes.",
    features: ["Lamborghini Dynamic Steering", "Magnetorheological Suspension", "Performance Traction Control", "Carbon Fiber Exterior Package", "Lifting System"],
    images: [
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67210d3c6c5dda52abf0e1df_lamborghini-huracan-p-800.jpg"
    ],
    condition: "Used",
    bodyStyle: "Coupe",
    sellerId: "d1",
    sellerName: "Luxury Auto Sales",
    sellerPhone: "(555) 123-4567",
    sellerEmail: "sales@luxuryauto.example.com",
    sellerType: "Dealer",
    location: "Miami, FL",
    vin: "ZHWUT4ZF7NLA15678",
    isFeatured: true
  },
  {
    id: "8",
    title: "2022 Ferrari 296 GTB",
    make: "Ferrari",
    model: "296 GTB",
    year: 2022,
    price: 375000,
    mileage: 2800,
    exteriorColor: "Rosso Corsa",
    interiorColor: "Nero",
    fuelType: "Hybrid",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "Rear-wheel Drive",
    engineSize: "3.0L V6 Hybrid",
    horsePower: "830",
    description: "The Ferrari 296 GTB is a revolutionary plug-in hybrid supercar that combines a twin-turbo V6 with an electric motor for exceptional performance and efficiency. This example features the Assetto Fiorano package for enhanced track performance.",
    features: ["Assetto Fiorano Package", "Carbon Fiber Wheels", "eManettino Driving Modes", "Ferrari Dynamic Enhancer", "Carbon Fiber Racing Seats"],
    images: [
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67210a9bde9e446bc672564f_ferrari-296-gtb-p-800.jpg"
    ],
    condition: "Used",
    bodyStyle: "Coupe",
    sellerId: "d3",
    sellerName: "Exotic Motors",
    sellerPhone: "(555) 234-5678",
    sellerEmail: "sales@exoticmotors.example.com",
    sellerType: "Dealer",
    location: "Los Angeles, CA",
    vin: "ZFF89HGB2N0123789",
    isFeatured: true
  },
  {
    id: "9",
    title: "2021 Ferrari SF90 Stradale",
    make: "Ferrari",
    model: "SF90 Stradale",
    year: 2021,
    price: 650000,
    mileage: 3500,
    exteriorColor: "Giallo Modena",
    interiorColor: "Black Alcantara",
    fuelType: "Hybrid",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "All-wheel Drive",
    engineSize: "4.0L V8 Hybrid",
    horsePower: "986",
    description: "The Ferrari SF90 Stradale is Ferrari's first plug-in hybrid production car and the most powerful Ferrari road car ever produced. With nearly 1000 horsepower from its hybrid powertrain, this technological masterpiece represents the future of Ferrari.",
    features: ["Carbon Fiber Body Panels", "eManettino Driving Modes", "Retractable Hardtop", "Head-Up Display", "Daytona Racing Seats"],
    images: [
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67210a9bde9e446bc6725650_ferrari-sf90-p-800.jpg"
    ],
    condition: "Used",
    bodyStyle: "Coupe",
    sellerId: "d3",
    sellerName: "Exotic Motors",
    sellerPhone: "(555) 234-5678",
    sellerEmail: "sales@exoticmotors.example.com",
    sellerType: "Dealer",
    location: "Miami, FL",
    vin: "ZFF95NLA2M0123456",
    isFeatured: true
  },
  {
    id: "10",
    title: "2023 Audi e-tron GT",
    make: "Audi",
    model: "e-tron GT",
    year: 2023,
    price: 145000,
    mileage: 1800,
    exteriorColor: "Tactical Green",
    interiorColor: "Black/Gray",
    fuelType: "Electric",
    transmission: "2-Speed Automatic",
    drivetrain: "All-wheel Drive",
    engineSize: "Electric",
    horsePower: "637",
    description: "The Audi e-tron GT is a fully electric grand tourer that combines stunning design with exhilarating performance. This RS model features the premium package and delivers instant torque and impressive range in a luxurious package.",
    features: ["Matrix LED Headlights", "Adaptive Air Suspension", "Carbon Fiber Roof", "Bang & Olufsen 3D Sound", "Head-Up Display"],
    images: [
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67210b537a3c7d2935154ca0_audi-etron-gt-p-800.jpg"
    ],
    condition: "Used",
    bodyStyle: "Sedan",
    sellerId: "d2",
    sellerName: "Premium Auto Group",
    sellerPhone: "(555) 987-6543",
    sellerEmail: "sales@premiumauto.example.com",
    sellerType: "Dealer",
    location: "Chicago, IL",
    vin: "WAUEAAFXXPN012345",
    isFeatured: true
  },
  {
    id: "11",
    title: "2022 Audi RS7 Sportback",
    make: "Audi",
    model: "RS7 Sportback",
    year: 2022,
    price: 125000,
    mileage: 8500,
    exteriorColor: "Nardo Gray",
    interiorColor: "Black/Red",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "All-wheel Drive",
    engineSize: "4.0L Twin-Turbo V8",
    horsePower: "591",
    description: "The Audi RS7 Sportback combines breathtaking performance with everyday usability in a sleek four-door coupe design. This example features the Dynamic Plus package with ceramic brakes and carbon fiber accents.",
    features: ["Ceramic Brakes", "Dynamic Ride Control", "Carbon Fiber Exterior Package", "Bang & Olufsen Advanced Sound", "Night Vision Assistant"],
    images: [
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67210b537a3c7d2935154ca1_audi-rs7-p-800.jpg"
    ],
    condition: "Used",
    bodyStyle: "Sportback",
    sellerId: "d2",
    sellerName: "Premium Auto Group",
    sellerPhone: "(555) 987-6543",
    sellerEmail: "sales@premiumauto.example.com",
    sellerType: "Dealer",
    location: "Seattle, WA",
    vin: "WUAPWAF27NN123456",
    isFeatured: true
  },
  {
    id: "12",
    title: "2023 BMW M8 Competition",
    make: "BMW",
    model: "M8 Competition",
    year: 2023,
    price: 165000,
    mileage: 3200,
    exteriorColor: "Frozen Marina Bay Blue",
    interiorColor: "Silverstone Merino Leather",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "All-wheel Drive",
    engineSize: "4.4L Twin-Turbo V8",
    horsePower: "617",
    description: "The BMW M8 Competition represents the pinnacle of BMW's performance lineup, combining luxury grand touring with supercar performance. This example features the exclusive Frozen Marina Bay Blue paint and full M Performance carbon package.",
    features: ["M Carbon Ceramic Brakes", "M Carbon Exterior Package", "Bowers & Wilkins Diamond Surround Sound", "M Driver's Package", "Carbon Fiber Roof"],
    images: [
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67210c3e6c5dda52abf0e1c0_bmw-m8-p-800.jpg"
    ],
    condition: "Used",
    bodyStyle: "Coupe",
    sellerId: "d5",
    sellerName: "Prestige Auto Gallery",
    sellerPhone: "(555) 456-7890",
    sellerEmail: "sales@prestigeauto.example.com",
    sellerType: "Dealer",
    location: "Atlanta, GA",
    vin: "WBSAE0C06NCF12345",
    isFeatured: true
  },
  {
    id: "13",
    title: "2022 BMW i4 M50",
    make: "BMW",
    model: "i4 M50",
    year: 2022,
    price: 78000,
    mileage: 9800,
    exteriorColor: "Brooklyn Grey",
    interiorColor: "Black Vernasca Leather",
    fuelType: "Electric",
    transmission: "Single-Speed Automatic",
    drivetrain: "All-wheel Drive",
    engineSize: "Electric",
    horsePower: "536",
    description: "The BMW i4 M50 is BMW's first all-electric performance sedan, delivering M-level performance with zero emissions. This example features the Technology Plus package and Driving Assistant Professional.",
    features: ["Curved Display", "Harman Kardon Surround Sound", "Driving Assistant Professional", "Adaptive M Suspension", "BMW IconicSounds Electric"],
    images: [
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67210c3e6c5dda52abf0e1c1_bmw-i4-p-800.jpg"
    ],
    condition: "Used",
    bodyStyle: "Gran Coupe",
    sellerId: "d5",
    sellerName: "Prestige Auto Gallery",
    sellerPhone: "(555) 456-7890",
    sellerEmail: "sales@prestigeauto.example.com",
    sellerType: "Dealer",
    location: "Denver, CO",
    vin: "WBY73AJ01NCK12345",
    isFeatured: true
  },
  {
    id: "6",
    title: "2018 Jeep Wrangler Unlimited Rubicon",
    make: "Jeep",
    model: "Wrangler Unlimited Rubicon",
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
      "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/6721058b188e2751a62ffcb4_jeep-wrangler-p-800.jpg"
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
    query?: string;
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
    
    // Filter by text search query
    if (filters.query && filters.query.trim() !== '') {
      const query = filters.query.toLowerCase().trim();
      const searchMatch = 
        vehicle.title.toLowerCase().includes(query) ||
        vehicle.make.toLowerCase().includes(query) ||
        vehicle.model.toLowerCase().includes(query) ||
        vehicle.description.toLowerCase().includes(query) ||
        vehicle.bodyStyle.toLowerCase().includes(query) ||
        vehicle.fuelType.toLowerCase().includes(query) ||
        vehicle.transmission.toLowerCase().includes(query) ||
        vehicle.drivetrain.toLowerCase().includes(query) ||
        vehicle.condition.toLowerCase().includes(query);
      
      if (!searchMatch) {
        return false;
      }
    }
    
    return true;
  });
};

export const getFeaturedVehicles = (): Vehicle[] => {
  return vehicles.filter(vehicle => vehicle.isFeatured);
};
