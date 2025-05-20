import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CarActionCards = () => {
  const navigate = useNavigate();

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Browse Cars Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0f172a] text-white rounded-2xl p-12 min-h-[300px] flex flex-col justify-between shadow-lg"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Choose your dream car</h2>
              <p className="text-gray-300 mb-10 text-lg">
                Browse our extensive collection of premium vehicles and find the perfect match for your needs.
              </p>
            </div>
            <div>
              <Button 
                onClick={() => navigate('/vehicles')} 
                className="bg-car-red-500 hover:bg-car-red-600 text-white uppercase font-medium tracking-wider px-8 py-6 text-base rounded-xl"
              >
                Browse Cars
              </Button>
            </div>
          </motion.div>
          
          {/* Let Us Know Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#f8fafc] text-gray-900 rounded-2xl p-12 min-h-[300px] flex flex-col justify-between shadow-lg"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Unable to find your car?</h2>
              <p className="text-gray-600 mb-10 text-lg">
                Let us know what you're looking for and we'll help you find your perfect vehicle.
              </p>
            </div>
            <div>
              <Button 
                onClick={() => navigate('/contact')} 
                className="bg-[#0f172a] text-white hover:bg-[#1e293b] uppercase font-medium tracking-wider px-8 py-6 text-base rounded-xl"
              >
                Let Us Know
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CarActionCards;
