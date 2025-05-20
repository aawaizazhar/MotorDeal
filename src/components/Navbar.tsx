import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SmoothLink } from "@/components/ui/SmoothLink";

const navLinks = [
  { href: "/", name: "HOME" },
  { href: "/about", name: "ABOUT" },
  { href: "/vehicles", name: "SHOWROOM" },
  { href: "/news", name: "NEWS" },
  { href: "/contact", name: "CONTACT" },
];

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`relative z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between h-20 bg-black/90 rounded-2xl px-6 backdrop-blur-sm max-w-5xl mx-auto border-2 border-white/20 shadow-lg">
          {/* Logo */}
          <SmoothLink to="/" className="flex items-center">
            <div className="flex items-center">
              <div className="bg-car-red-500 rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">Motor<span className="text-car-red-500">Deal</span></span>
            </div>
          </SmoothLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <SmoothLink
                key={link.href}
                to={link.href}
                className={`px-2 py-1 text-sm font-medium tracking-wider transition-colors duration-300 ${
                  location.pathname === link.href
                    ? 'text-car-red-500 font-semibold'
                    : 'text-white hover:text-car-red-400'
                }`}
              >
                {link.name}
              </SmoothLink>
            ))}
          </nav>
          
          {/* Right spacing element to maintain layout */}
          <div className="hidden md:block w-6"></div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="mx-4 my-3 px-6 py-4 bg-gray-800 rounded-2xl space-y-1">
          {navLinks.map((link) => (
            <SmoothLink
              key={link.href}
              to={link.href}
              className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                location.pathname === link.href
                  ? 'text-car-red-500'
                  : 'text-white hover:text-car-red-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </SmoothLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
