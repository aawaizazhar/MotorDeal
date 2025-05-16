
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Vehicle, getFilteredVehicles } from "@/data/vehicles";

// Define the category type
interface Category {
  id: string;
  name: string;
}

// Define all categories as shown in the image
const categories: Category[] = [
  { id: "electric", name: "Electric" },
  { id: "suv", name: "SUV" },
  { id: "sedan", name: "Sedan" },
  { id: "pickup", name: "Pickup Truck" },
  { id: "luxury", name: "Luxury" },
  { id: "crossover", name: "Crossover" },
  { id: "hybrid", name: "Hybrid" },
  { id: "diesel", name: "Diesel" },
  { id: "coupe", name: "Coupe" },
  { id: "hatchback", name: "Hatchback" },
  { id: "wagon", name: "Wagon" },
  { id: "convertible", name: "Convertible" }
];

interface PopularCategoriesProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

const PopularCategories = ({ onCategorySelect, selectedCategory }: PopularCategoriesProps) => {
  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect(categoryId === selectedCategory ? "" : categoryId);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular categories</h2>
        
        <div className="relative">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button 
                onClick={() => handleCategoryClick(category.id)} 
                key={category.id}
                className={`
                  whitespace-nowrap px-5 py-3 rounded-full text-sm font-medium transition-colors
                  ${category.id === selectedCategory || (category.name === "Electric" && selectedCategory === "") 
                    ? "bg-black text-white" 
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"}
                `}
              >
                {category.name}
              </button>
            ))}
            
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white absolute right-0 top-1/2 transform -translate-y-1/2">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
