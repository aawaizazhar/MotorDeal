
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutUsStats from "@/components/AboutUsStats";
import FeaturedCars from "@/components/FeaturedCars";
import NewsReviewsSection from "@/components/NewsReviewsSection";
import CarActionCards from "@/components/CarActionCards";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {

  return (
    <>
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative">
          <Hero />
        </section>
        
        {/* About Us Stats Section */}
        <section className="relative z-10">
          <AboutUsStats />
        </section>
        
        {/* Featured Cars Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <FeaturedCars />
          </div>
        </section>
        
        {/* How It Works Section */}
        <HowItWorks />
        
        {/* News and Reviews Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <NewsReviewsSection />
          </div>
        </section>
        
        {/* Car Action Cards Section */}
        <CarActionCards />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
