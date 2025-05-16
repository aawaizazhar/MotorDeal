
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-car-blue-800 font-bold text-2xl">Auto<span className="text-car-red-500">Market</span></span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="text-gray-700 hover:text-car-blue-700 transition-colors">
            Home
          </Link>
          <Link to="/vehicles" className="text-gray-700 hover:text-car-blue-700 transition-colors">
            Browse Vehicles
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-car-blue-700 transition-colors">
            Contact Us
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:flex border-car-blue-600 text-car-blue-700 hover:bg-car-blue-50">
            Sign In
          </Button>
          <Button className="bg-car-red-500 hover:bg-car-red-600 text-white">
            Sell Your Car
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
