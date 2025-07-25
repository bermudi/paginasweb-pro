import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Index from "./pages/Index";
import FaqPage from "./pages/FaqPage";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Component to handle scroll restoration on route changes
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // If there's a hash in the URL, scroll to that element after a short delay
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Only scroll to top if there's no hash
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/preguntas-frecuentes" element={<FaqPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
