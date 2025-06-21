import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
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
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("");
  const [searchText, setSearchText] = useState("");
  const [availableModels, setAvailableModels] = useState([]);
  
  const makes = getMakes();
  
  useEffect(() => {
    if (make && make !== "any") {
      setAvailableModels(getModels(make));
      setModel("");
    } else {
      setAvailableModels([]);
      setModel("");
    }
  }, [make]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    
    if (make && make !== "any") params.append("make", make);
    if (model && model !== "any") params.append("model", model);
    if (condition && condition !== "any") params.append("condition", condition);
    if (searchText) params.append("query", searchText);
    
    navigate({
      pathname: "/vehicles",
      search: params.toString()
    });
  };
  
  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row w-full">
        {/* Car Make */}
        <div className="w-full md:w-1/4 px-1">
          <Select value={make} onValueChange={setMake}>
            <SelectTrigger className="border-0 focus:ring-0 h-14 text-gray-700 font-medium">
              <SelectValue placeholder="Car Make" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Make</SelectItem>
              {makes.map((make) => (
                <SelectItem key={make} value={make}>{make}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Car Type */}
        <div className="w-full md:w-1/4 px-1 border-l border-gray-200">
          <Select value={model} onValueChange={setModel}>
            <SelectTrigger className="border-0 focus:ring-0 h-14 text-gray-700 font-medium">
              <SelectValue placeholder="Car Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Model</SelectItem>
              {availableModels.map((modelOption) => (
                <SelectItem key={modelOption} value={modelOption}>{modelOption}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Car Condition */}
        <div className="w-full md:w-1/4 px-1 border-l border-gray-200">
          <Select value={condition} onValueChange={setCondition}>
            <SelectTrigger className="border-0 focus:ring-0 h-14 text-gray-700 font-medium">
              <SelectValue placeholder="Car Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Condition</SelectItem>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Used">Used</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Search Input */}
        <div className="w-full md:w-1/4 px-1 border-l border-gray-200">
          <Input
            type="text"
            placeholder="Search any car"
            className="border-0 focus:ring-0 h-14 text-gray-700 font-medium"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="bg-gradient-to-r from-[#E11D48] to-[#CB1A41] hover:from-[#CB1A41] hover:to-[#E11D48] text-white h-14 w-full md:w-40 text-base font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5"
      >
        <Search className="mr-2 h-5 w-5" />
        <span className="tracking-wide">SEARCH</span>
      </Button>
    </form>
  );
};

export default SearchBar;
