import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Car, MessageSquare, FileText, Map } from 'lucide-react';

// Icons for the steps
const CarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="24" fill="#F8F9FA" />
    <path d="M33 30.5V32C33 32.2652 32.8946 32.5196 32.7071 32.7071C32.5196 32.8946 32.2652 33 32 33H30C29.7348 33 29.4804 32.8946 29.2929 32.7071C29.1054 32.5196 29 32.2652 29 32V30.5H19V32C19 32.2652 18.8946 32.5196 18.7071 32.7071C18.5196 32.8946 18.2652 33 18 33H16C15.7348 33 15.4804 32.8946 15.2929 32.7071C15.1054 32.5196 15 32.2652 15 32V30.5C14.7348 30.5 14.4804 30.3946 14.2929 30.2071C14.1054 30.0196 14 29.7652 14 29.5V21.5C14 18.74 16.24 16.5 19 16.5H29C31.76 16.5 34 18.74 34 21.5V29.5C34 29.7652 33.8946 30.0196 33.7071 30.2071C33.5196 30.3946 33.2652 30.5 33 30.5ZM17 25.5C17 25.1022 17.158 24.7206 17.4393 24.4393C17.7206 24.158 18.1022 24 18.5 24C18.8978 24 19.2794 24.158 19.5607 24.4393C19.842 24.7206 20 25.1022 20 25.5C20 25.8978 19.842 26.2794 19.5607 26.5607C19.2794 26.842 18.8978 27 18.5 27C18.1022 27 17.7206 26.842 17.4393 26.5607C17.158 26.2794 17 25.8978 17 25.5ZM28 25.5C28 25.1022 28.158 24.7206 28.4393 24.4393C28.7206 24.158 29.1022 24 29.5 24C29.8978 24 30.2794 24.158 30.5607 24.4393C30.842 24.7206 31 25.1022 31 25.5C31 25.8978 30.842 26.2794 30.5607 26.5607C30.2794 26.842 29.8978 27 29.5 27C29.1022 27 28.7206 26.842 28.4393 26.5607C28.158 26.2794 28 25.8978 28 25.5ZM19 19.5C17.62 19.5 16.5 20.62 16.5 22V22.5H31.5V22C31.5 20.62 30.38 19.5 29 19.5H19Z" fill="#212529"/>
  </svg>
);

const EnquiryIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="24" fill="#F8F9FA" />
    <path d="M34 22C34 22.7956 33.6839 23.5587 33.1213 24.1213C32.5587 24.6839 31.7956 25 31 25C31 25.7956 30.6839 26.5587 30.1213 27.1213C29.5587 27.6839 28.7956 28 28 28H24L20 32V28H19C18.2044 28 17.4413 27.6839 16.8787 27.1213C16.3161 26.5587 16 25.7956 16 25V19C16 18.2044 16.3161 17.4413 16.8787 16.8787C17.4413 16.3161 18.2044 16 19 16H31C31.7956 16 32.5587 16.3161 33.1213 16.8787C33.6839 17.4413 34 18.2044 34 19V22Z" fill="#212529"/>
  </svg>
);

const PaperworkIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="24" fill="#F8F9FA" />
    <path d="M29 16H19C18.4696 16 17.9609 16.2107 17.5858 16.5858C17.2107 16.9609 17 17.4696 17 18V30C17 30.5304 17.2107 31.0391 17.5858 31.4142C17.9609 31.7893 18.4696 32 19 32H29C29.5304 32 30.0391 31.7893 30.4142 31.4142C30.7893 31.0391 31 30.5304 31 30V18C31 17.4696 30.7893 16.9609 30.4142 16.5858C30.0391 16.2107 29.5304 16 29 16ZM21 20H27V22H21V20ZM27 24H21V22.5H27V24ZM25 28H21V26H25V28Z" fill="#212529"/>
  </svg>
);

const RoadIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="24" fill="#F8F9FA" />
    <path d="M32 16H16C15.4696 16 14.9609 16.2107 14.5858 16.5858C14.2107 16.9609 14 17.4696 14 18V30C14 30.5304 14.2107 31.0391 14.5858 31.4142C14.9609 31.7893 15.4696 32 16 32H32C32.5304 32 33.0391 31.7893 33.4142 31.4142C33.7893 31.0391 34 30.5304 34 30V18C34 17.4696 33.7893 16.9609 33.4142 16.5858C33.0391 16.2107 32.5304 16 32 16ZM24 30C23.4067 30 22.8266 29.8241 22.3333 29.4944C21.8399 29.1648 21.4554 28.6962 21.2284 28.1481C21.0013 27.5999 20.9419 26.9967 21.0576 26.4147C21.1734 25.8328 21.4591 25.2982 21.8787 24.8787C22.2982 24.4591 22.8328 24.1734 23.4147 24.0576C23.9967 23.9419 24.5999 24.0013 25.1481 24.2284C25.6962 24.4554 26.1648 24.8399 26.4944 25.3333C26.8241 25.8266 27 26.4067 27 27C27 27.7956 26.6839 28.5587 26.1213 29.1213C25.5587 29.6839 24.7956 30 24 30ZM28 22H20V20H28V22Z" fill="#212529"/>
  </svg>
);

// Step data
const steps = [
  {
    icon: <Car size={28} />,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Choose Your Car",
    description: "Browse our extensive collection of premium vehicles and find the perfect match for your needs and preferences.",
    number: "01"
  },
  {
    icon: <MessageSquare size={28} />,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Submit Enquiry",
    description: "Contact our team with your selection and requirements. We'll respond promptly to answer all your questions.",
    number: "02"
  },
  {
    icon: <FileText size={28} />,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Finalize Paperwork",
    description: "Complete the necessary documentation with our streamlined process. We handle all the details to make it easy.",
    number: "03"
  },
  {
    icon: <Map size={28} />,
    bgColor: "bg-red-50",
    iconColor: "text-car-red-500",
    title: "Hit The Road",
    description: "Pick up your vehicle and start enjoying your new ride with the confidence of our comprehensive warranty.",
    number: "04"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-red-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/3 w-80 h-80 bg-amber-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated underline */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">HOW IT WORKS</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-car-red-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We've streamlined the car buying process to make finding your next vehicle simple, transparent, and enjoyable.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left side - Steps with connecting line */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 relative"
          >
            {/* Connecting line between steps */}
            <div className="absolute hidden md:block top-12 left-[88px] w-[calc(100%-176px)] h-[calc(100%-96px)] border-2 border-dashed border-gray-200 rounded-3xl -z-10"></div>

            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * (index + 1) }}
                className="group relative"
              >
                {/* Step card with hover effect */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold text-gray-700 border border-gray-100">
                    {step.number}
                  </div>

                  {/* Icon with colored background */}
                  <div className={`${step.bgColor} ${step.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>

                  {/* Title with animated underline */}
                  <h3 className="text-xl font-bold mb-4 relative inline-block">
                    {step.title}
                    <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-car-red-500 transition-all duration-300"></span>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Right side - Call to action */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:w-1/3 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-10 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Find Your <span className="text-[#E11D48]">Perfect Car?</span>
            </h3>
            <p className="text-gray-300 mb-8">
              Our expert team is ready to guide you through every step of the process. Start your journey today and drive away with confidence.
            </p>
            <Button className="bg-[#E11D48] hover:bg-[#CB1A41] text-white px-8 py-6 rounded-lg font-medium w-full md:w-auto transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
              Get Started Now
            </Button>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-white">1,200+</p>
                <p className="text-gray-400 text-sm">Cars Available</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">1,000+</p>
                <p className="text-gray-400 text-sm">Happy Customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
