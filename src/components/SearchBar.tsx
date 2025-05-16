
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { getMakes, getModels } from "@/data/vehicles";

const SearchBar = () => {
  const navigate = useNavigate();
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  
  const makes = getMakes();
  const models = getModels(make);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    
    if (make) params.append("make", make);
    if (model) params.append("model", model);
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);
    
    navigate({
      pathname: "/vehicles",
      search: params.toString()
    });
  };
  
  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-grow">
        <Select value={make} onValueChange={setMake}>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Any Make" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any Make</SelectItem>
            {makes.map((make) => (
              <SelectItem key={make} value={make}>{make}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={model} onValueChange={setModel} disabled={!make}>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Any Model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any Model</SelectItem>
            {models.map((model) => (
              <SelectItem key={model} value={model}>{model}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="relative">
          <Input
            type="number"
            placeholder="Min Price"
            className="pl-7 bg-white"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">$</span>
        </div>
        
        <div className="relative">
          <Input
            type="number"
            placeholder="Max Price"
            className="pl-7 bg-white"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">$</span>
        </div>
      </div>
      
      <Button type="submit" className="bg-car-blue-800 hover:bg-car-blue-900 text-white min-w-20">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
