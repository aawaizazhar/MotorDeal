
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { AnimatedPage } from "@/components/ui/AnimatedPage";
import { initSmoothScroll } from "@/utils/smoothScroll";
import Index from "./pages/Index";
import VehicleListing from "./pages/VehicleListing";
import VehicleDetail from "./pages/VehicleDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import About from "./pages/About";
import "@/styles/animations.css";

const queryClient = new QueryClient();

// Wrapper component to handle route changes and smooth scrolling
const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize smooth scrolling for anchor links
    initSmoothScroll();

    // Re-initialize smooth scrolling when location changes
    const timer = setTimeout(() => {
      initSmoothScroll();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  return (
    <AnimatedPage>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/vehicles" element={<VehicleListing />} />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/*" element={<News />} />
        <Route path="/about" element={<About />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatedPage>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
