
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NotdienstPage from "./pages/NotdienstPage";
import UeberUnsPage from "./pages/UeberUnsPage";
import LeistungenPage from "./pages/LeistungenPage";
import KontaktPage from "./pages/KontaktPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/notdienst" element={<NotdienstPage />} />
          <Route path="/ueber-uns" element={<UeberUnsPage />} />
          <Route path="/leistungen" element={<LeistungenPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
