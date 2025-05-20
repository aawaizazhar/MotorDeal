import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '1000+', label: 'HAPPY CLIENTS' },
  { value: '500+', label: 'CARS SOLD' },
  { value: '300+', label: 'CARS IN STOCK' },
  { value: '50+', label: 'CAR BRANDS' },
];

const AboutUsStats = () => {
  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 mt-24 mb-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-[#0e1420] rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left side - About Us Text */}
            <div className="p-8 md:p-12">
              <h3 className="text-car-red-500 font-medium mb-2">
                ABOUT US
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
                BUILT ON CAR PASSION,<br />
                FOCUSED ON YOUR NEEDS
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                We are a team of dedicated car enthusiasts who understand the importance of finding the perfect vehicle. Our focus is on providing a transparent and customer-centric approach to car sales. We are passionate about cars and committed to helping you make the best choice for your needs.
              </p>
            </div>
            
            {/* Right side - Stats Grid */}
            <div className="flex items-center justify-center border-l border-gray-700/50 text-white">
              <div className="grid grid-cols-2 w-full h-full">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: 'easeOut' 
                    }}
                    className="border border-gray-700/50 p-8 text-center hover:bg-white/5 transition-colors flex flex-col items-center justify-center h-full"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-car-red-500 mb-2">{stat.value}</h3>
                    <p className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsStats;
