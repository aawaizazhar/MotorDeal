import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Shield, Award, Heart, Star, Check, Clock, Zap, Users, Car, Settings, BarChart, Sparkles } from 'lucide-react';

// Team member data
const teamMembers = [
  {
    name: 'Tyler Norman',
    position: 'CEO & Founder',
    image: '/images/people/tyler.jpg',
  },
  {
    name: 'Omar Garcia',
    position: 'Sales Director',
    image: '/images/people/omar.jpg',
  },
  {
    name: 'Ella Nelson',
    position: 'Marketing Head',
    image: '/images/people/ella.jpg',
  },
  {
    name: 'Marco Tran',
    position: 'Service Manager',
    image: '/images/people/marco.jpg',
  },
];

// Stats data
const stats = [
  { value: '10+ Years', label: 'AUTOMOTIVE EXPERIENCE' },
  { value: '1000+', label: 'HAPPY CLIENTS' },
  { value: '300+', label: 'PREMIUM VEHICLES' },
  { value: '50+', label: 'CAR BRANDS' },
];

// Core values data
const coreValues = [
  {
    title: 'Quality',
    description: 'We ensure every vehicle meets our rigorous standards for performance, safety, and appearance before it reaches our showroom floor.',
    icon: <Star className="w-10 h-10" />,
    color: 'from-amber-500 to-yellow-400',
    bgColor: 'bg-amber-50'
  },
  {
    title: 'Trust',
    description: 'Transparency is at the heart of our business. We provide complete vehicle history and honest pricing with no hidden fees.',
    icon: <Shield className="w-10 h-10" />,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards, treating every customer with respect and fairness throughout their journey.',
    icon: <Heart className="w-10 h-10" />,
    color: 'from-red-500 to-rose-600',
    bgColor: 'bg-red-50'
  },
  {
    title: 'Excellence',
    description: 'We continuously strive to exceed expectations in every aspect of our service, from vehicle selection to after-sales support.',
    icon: <Award className="w-10 h-10" />,
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50'
  }
];

// Showroom data
const showrooms = [
  {
    title: 'Dubai Showroom',
    address: '123 Sheikh Zayed Road, Al Quoz Industrial Area 3, Near Mall of the Emirates, Dubai, UAE',
    image: '/images/showroom/showroom-1.avif'
  },
  {
    title: 'Abu Dhabi Showroom',
    address: '123 Sheikh Zayed Road, Al Quoz Industrial Area 3, Near Mall of the Emirates, Dubai, UAE',
    image: '/images/showroom/showroom-2.avif'
  }
];

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative bg-car-blue-900 text-white min-h-[60vh] pt-5">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: "url('/images/hero/hero.avif')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundAttachment: 'scroll'
          }}
        />
        
        {/* Enhanced Gradient Overlay with multi-layer effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-60"></div>
        
        {/* Decorative Elements - Top Only */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 z-10"></div>
        
        {/* Navbar */}
        <div className="relative z-10">
          <Navbar />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24">
          <div className="max-w-4xl mx-auto">
            {/* Badge - Centered */}
            <div className="flex justify-center w-full mb-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
              >
                OUR STORY
              </motion.div>
            </div>
            
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#020817] relative inline-block"
            >
              {"About Wheel Deal Seeker".split(" ").map((word, index) => (
                <motion.span 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="inline-block mr-[0.25em] relative"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-3xl"
            >
              We're a premier destination for luxury and performance vehicles, offering an unparalleled selection of cars that combine elegance, power, and prestige.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-red-600/80 backdrop-blur-md hover:bg-red-700/90 text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-red-500/30"
                onClick={() => navigate('/vehicles')}
                style={{ backdropFilter: 'blur(12px)' }}
              >
                Our Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => navigate('/contact')}
                style={{ backdropFilter: 'blur(12px)' }}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      <main className="bg-white">

        {/* Mission Section */}
        <section className="py-16 relative">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0" 
            style={{ 
              backgroundImage: "url('images/hero/hero.avif')", 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 to-black/70" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-[#0e1420] text-white max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl py-4 md:py-8"
            >
              <div className="flex flex-col md:flex-row min-h-[350px]">
                {/* Left side text content */}
                <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center z-10">
                  <h3 className="text-car-red-500 font-medium mb-3 uppercase">OUR STORY</h3>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase leading-tight">BUILT WITH PURPOSE,<br />DRIVEN BY INTEGRITY</h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Founded with a deep passion for automobiles and a commitment to integrity, our story is one of dedication to providing exceptional service and vehicles. We believe in building lasting relationships with our clients based on trust and transparency. Our journey began with a simple goal: to make the process of buying and selling cars a seamless and enjoyable experience for everyone.
                  </p>
                </div>
                
                {/* Right side image */}
                <div className="md:w-1/2 flex items-center justify-center p-8 md:p-12">
                  <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border-8 border-white/10 shadow-lg">
                    {/* Masked Image Container */}
                    <motion.div
                      initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                      className="w-full h-full"
                    >
                      <img 
                        src="images/showroom/showroom-3.jpg" 
                        alt="Luxury cars in showroom" 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto">
              {/* First row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="col-span-12 md:col-span-5 bg-gray-200 rounded-lg p-8 text-center flex flex-col justify-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">10+ Years</h3>
                <p className="text-sm uppercase tracking-wider text-gray-700">EXPERIENCE IN CAR SALES</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="col-span-12 md:col-span-7 rounded-lg overflow-hidden h-[200px]">
                <motion.div
                  initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                  whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  className="w-full h-full"
                >
                  <img 
                    src="images/showroom/building.avif" 
                    alt="Dubai skyline with Burj Al Arab" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-12 md:col-span-7 bg-car-red-500 text-white rounded-lg p-8 text-center flex flex-col justify-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">1000+</h3>
                <p className="text-sm uppercase tracking-wider">HAPPY CLIENTS</p>
              </motion.div>
              
              {/* Second row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="col-span-12 md:col-span-5 bg-car-red-500 text-white rounded-lg p-8 text-center flex flex-col justify-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">300+</h3>
                <p className="text-sm uppercase tracking-wider">CARS IN STOCK</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="col-span-12 md:col-span-7 rounded-lg overflow-hidden h-[200px]">
                {/* Masked Image Container */}
                <motion.div
                  initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                  whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  className="w-full h-full"
                >
                  <img 
                    src="images/showroom/showroom-4.jpg" 
                    alt="Sports car on a bridge" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="col-span-12 md:col-span-5 bg-gray-200 rounded-lg p-8 text-center flex flex-col justify-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">50+</h3>
                <p className="text-sm uppercase tracking-wider text-gray-700">CAR BRANDS</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder and Vision Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Founder Image */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-5 rounded-2xl overflow-hidden h-[400px]"
                >
                  {/* Masked Image Container */}
                  <motion.div
                    initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                    whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="w-full h-full"
                  >
                    <img 
                      src="images/people/tyler.jpg" 
                      alt="Tyler Norman - Founder" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
                
                {/* Founder and Vision Text */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="md:col-span-7 bg-gray-50 rounded-2xl p-8 md:p-10 flex flex-col justify-center space-y-8"
                >
                  {/* Founder Section */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">OUR FOUNDER</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Meet [Founder's Name], the visionary behind MotorDeal. With over [Number] years of experience in the automotive industry, [Founder's Name]'s expertise and dedication have shaped our company's values and mission. [He/She] is committed to fostering a culture of excellence and ensuring every customer receives the highest level of service.
                    </p>
                  </div>
                  
                  {/* Vision Section */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">DRIVEN VISION</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Our vision is to redefine the car buying and selling experience by setting new standards for trust, quality, and customer satisfaction. We aim to be the leading platform in the region, known for our curated selection of premium vehicles and our unwavering commitment to integrity in every transaction. We are constantly innovating to serve you better.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-car-red-500 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase relative inline-block">
                    <span className="relative z-10">OUR CORE VALUES</span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-car-red-500 rounded-full"></span>
                  </h2>
                  <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Our values define who we are and guide every decision we make. They are the foundation of our commitment to excellence in the automotive industry.
                  </p>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map((value, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group relative rounded-xl overflow-hidden"
                  >
                    {/* Card background with hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 transform group-hover:scale-105 transition-transform duration-500 rounded-xl"></div>
                    
                    {/* Content */}
                    <div className="relative p-8 h-full flex flex-col z-10">
                      {/* Icon container with gradient */}
                      <div className={`p-4 rounded-xl mb-6 inline-flex items-center justify-center ${value.bgColor} w-16 h-16`}>
                        <div className={`text-transparent bg-clip-text bg-gradient-to-r ${value.color}`}>
                          {value.icon}
                        </div>
                      </div>
                      
                      {/* Title with animated underline */}
                      <h3 className="text-2xl font-bold mb-4 text-white relative inline-block">
                        {value.title}
                        <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-car-red-500 to-red-400 transition-all duration-300"></span>
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed flex-grow">{value.description}</p>
                      
                      {/* Feature icons */}
                      <div className="mt-6 flex space-x-4">
                        {value.title === 'Quality' && (
                          <>
                            <div className="bg-gray-800 p-2 rounded-full" title="Premium Selection">
                              <Car className="w-4 h-4 text-amber-400" />
                            </div>
                            <div className="bg-gray-800 p-2 rounded-full" title="Rigorous Testing">
                              <Check className="w-4 h-4 text-amber-400" />
                            </div>
                            <div className="bg-gray-800 p-2 rounded-full" title="Performance Guaranteed">
                              <Sparkles className="w-4 h-4 text-amber-400" />
                            </div>
                          </>
                        )}
                        {value.title === 'Trust' && (
                          <>
                            <div className="bg-gray-800 p-2 rounded-full" title="Transparent Pricing">
                              <BarChart className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="bg-gray-800 p-2 rounded-full" title="Verified History">
                              <Check className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="bg-gray-800 p-2 rounded-full" title="Customer Protection">
                              <Shield className="w-4 h-4 text-blue-400" />
                            </div>
                          </>
                        )}
                        {value.title === 'Integrity' && (
                          <>
                            <div className="bg-gray-800 p-2 rounded-full" title="Fair Dealings">
                              <Users className="w-4 h-4 text-red-400" />
                            </div>
                            <div className="bg-gray-800 p-2 rounded-full" title="Ethical Standards">
                              <Check className="w-4 h-4 text-red-400" />
                            </div>
                            <div className="bg-gray-800 p-2 rounded-full" title="Customer Respect">
                              <Heart className="w-4 h-4 text-red-400" />
                            </div>
                          </>
                        )}
                        {value.title === 'Excellence' && (
                          <>
                            <div className="bg-gray-800 p-2 rounded-full" title="Fast Service">
                              <Zap className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div className="bg-gray-800 p-2 rounded-full" title="Expert Support">
                              <Settings className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div className="bg-gray-800 p-2 rounded-full" title="24/7 Assistance">
                              <Clock className="w-4 h-4 text-emerald-400" />
                            </div>
                          </>
                        )}
                      </div>
                      
                      {/* Learn more link */}
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <a href="#" className="text-car-red-500 hover:text-car-red-400 inline-flex items-center text-sm font-semibold">
                          Learn more
                          <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Showroom Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start mb-10">
              <h2 className="text-3xl md:text-4xl font-bold uppercase">OUR SHOWROOMS</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {showrooms.map((showroom, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="rounded-lg overflow-hidden mb-4">
                    {/* Masked Image Container */}
                    <motion.div
                      initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                      className="w-full h-full"
                    >
                      <img 
                        src={showroom.image} 
                        alt={showroom.title} 
                        className="w-full h-[300px] object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="bg-gray-900 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{showroom.title}</h3>
                    <p className="text-gray-300 text-sm">{showroom.address}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 -right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-1/2 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Experts</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                  Meet Our <span className="text-red-600">Dream Team</span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  Our team of automotive experts brings years of experience and passion to help you find your perfect vehicle. Get to know the people behind Wheel Deal Seeker.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex space-x-3">
                          {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                            <a 
                              key={social}
                              href="#" 
                              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 transition-all duration-300"
                              aria-label={`${member.name}'s ${social}`}
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium mb-4">{member.position}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-green-400"></span>
                      <span className="text-sm text-gray-500">Available</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Expert
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
