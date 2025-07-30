
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SuccessStories from "./pages/SuccessStories";
import VoorCreators from "./pages/VoorCreators";
import VoorMerken from "./pages/VoorMerken";
import AanDeSlag from "./pages/AanDeSlag";
import VeelgesteldeVragen from "./pages/VeelgesteldeVragen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendering...');
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/succesverhalen" element={<SuccessStories />} />
          <Route path="/voor-creators" element={<VoorCreators />} />
          <Route path="/voor-merken" element={<VoorMerken />} />
          <Route path="/aan-de-slag" element={<AanDeSlag />} />
          <Route path="/veelgestelde-vragen" element={<VeelgesteldeVragen />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
