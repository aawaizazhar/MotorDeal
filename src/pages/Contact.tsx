import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Send, CheckCircle, Car, MessageSquare, Users } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6 text-car-red-500" />,
    title: "Visit Us",
    content: "123 Aziz Bhatti Road, Sialkot, Punjab, Pakistan"
  },
  {
    icon: <Phone className="w-6 h-6 text-car-red-500" />,
    title: "Call Us",
    content: "+1 (555) 123-4567"
  },
  {
    icon: <Mail className="w-6 h-6 text-car-red-500" />,
    title: "Email Us",
    content: "info@motordeal@gmail.com"
  },
  {
    icon: <Clock className="w-6 h-6 text-car-red-500" />,
    title: "Working Hours",
    content: "Mon - Fri: 9:00 - 19:00\nSaturday: 9:00 - 16:00\nSunday: Closed"
  }
];

const reasons = [
  {
    icon: <Car className="w-10 h-10 text-car-red-500" />,
    title: "Vehicle Inquiries",
    description: "Questions about specific vehicles, availability, or pricing"
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-car-red-500" />,
    title: "Support & Assistance",
    description: "Help with website navigation or account issues"
  },
  {
    icon: <Users className="w-10 h-10 text-car-red-500" />,
    title: "Partnership Opportunities",
    description: "Dealer partnerships, advertising, or business collaborations"
  }
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, url: "#", name: "Facebook", color: "#1877F2" },
  { icon: <Twitter className="w-5 h-5" />, url: "#", name: "Twitter", color: "#1DA1F2" },
  { icon: <Instagram className="w-5 h-5" />, url: "#", name: "Instagram", color: "#E4405F" },
  { icon: <Linkedin className="w-5 h-5" />, url: "#", name: "LinkedIn", color: "#0A66C2" }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "We've received your message and will get back to you soon.",
        className: "bg-white border-green-500 border-l-4",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-black min-h-[70vh] sm:min-h-[80vh] md:h-96 flex items-center justify-center overflow-hidden py-16 sm:py-0">
        <div className="absolute inset-0 bg-[url('images/hero/hero-2.jpg')] bg-cover bg-center opacity-20 bg-fixed sm:bg-scroll"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-car-red-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4"
          >
            24/7 CUSTOMER SUPPORT
          </motion.div>
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2"
          >
            {"Get In Touch With Us".split(" ").map((word, index) => (
              <motion.span 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="inline-block mr-[0.2em] sm:mr-[0.5em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-space-grotesk mb-6 sm:mb-8 px-2"
          >
            We're here to help with any questions about our vehicles or services. Our team is ready to assist you every step of the way.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="px-4"
          >
            <Button 
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-6 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us Now
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Why Contact Us Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                    <span className="relative z-10">Why Contact Us</span>
                    <span className="absolute -bottom-3 left-0 w-full h-1 bg-car-red-500 rounded-full"></span>
                  </h2>
                </motion.div>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-6 font-space-grotesk">
                  Our dedicated team is ready to assist you with any inquiries you may have about our services.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-center border-t-4 border-car-red-500 group hover:-translate-y-2"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-6 group-hover:bg-red-100 transition-colors duration-300">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                    <p className="text-gray-600 font-space-grotesk">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                  <span className="relative z-10">Get In Touch</span>
                  <span className="absolute -bottom-3 left-0 w-full h-1 bg-car-red-500 rounded-full"></span>
                </h2>
              </motion.div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-6 font-space-grotesk">
                Have questions about our vehicles or services? Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex-shrink-0 bg-red-50 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line font-space-grotesk">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-md text-white overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-car-red-500 opacity-10 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-car-red-500 opacity-10 rounded-full -ml-10 -mb-10"></div>
                  <h3 className="font-semibold text-xl mb-4 relative">Follow Us</h3>
                  <p className="text-gray-300 mb-6 font-space-grotesk relative">Stay connected with us on social media for the latest updates and offers.</p>
                  <div className="flex space-x-4 relative">
                    {socialLinks.map((link, index) => (
                      <motion.a 
                        key={index} 
                        href={link.url} 
                        whileHover={{ scale: 1.15, backgroundColor: link.color }}
                        className="bg-gray-700 p-3 rounded-full transition-all duration-300"
                        aria-label={`Visit our ${link.name} page`}
                        style={{ boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)' }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Contact Form */}
              <motion.div 
                id="contact-form"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 bg-white p-10 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-50 rounded-full -mr-20 -mt-20 z-0"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-50 rounded-full -ml-20 -mb-20 z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Send className="w-6 h-6 mr-2 text-car-red-500" /> Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-car-red-500 transition-colors">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-car-red-500 focus:border-transparent shadow-sm font-space-grotesk"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-car-red-500 transition-colors">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-car-red-500 focus:border-transparent shadow-sm font-space-grotesk"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-car-red-500 transition-colors">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-car-red-500 focus:border-transparent shadow-sm font-space-grotesk"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-car-red-500 transition-colors">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Regarding Vehicle Inquiry"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-car-red-500 focus:border-transparent shadow-sm font-space-grotesk"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-car-red-500 transition-colors">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Enter your message here..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-car-red-500 focus:border-transparent shadow-sm font-space-grotesk"
                    />
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      className="w-full bg-car-red-500 hover:bg-car-red-600 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2.291-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>                     
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
                </div>
              </motion.div>
            </div>
            
            {/* Map Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-lg h-96 mb-16"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108393.55560398701!2d74.44877445!3d32.49419545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eea5674db6cfd%3A0xa8d03983946d4744!2sSialkot%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1684396284583!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Wheel Deal Seeker Sialkot Location"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Contact;
