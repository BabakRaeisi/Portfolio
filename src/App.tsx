import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPost from './components/BlogPost';
import TetrisInventory from './pages/TetrisInventory';
import FpsDemo from './pages/FpsDemo';
import AStar from './pages/AStar';
import Portfolio from './pages/Portfolio';
import FallenVestige from './pages/FallenVestige';
import AccessibilityDissertation from './pages/AccessibilityDissertation';
import ChessGame from './pages/ChessGame';
// @ts-ignore
import Imager from './pages/Imager';


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/" element={<Index />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/TetrisInventory" element={<TetrisInventory />} />
          <Route path="/blog/FpsDemo" element={<FpsDemo />} />
          <Route path="/blog/AStar" element={<AStar />} />
          <Route path="/blog/Portfolio" element={<Portfolio />} />
          <Route path="/blog/FallenVestige" element={<FallenVestige />} />
          <Route path="/blog/AccessibilityDissertation" element={<AccessibilityDissertation />} />
          <Route path="/blog/ChessGame" element={<ChessGame />} />
          <Route path="/blog/Imager" element={<Imager />} />
          
          <Route path="*" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/404" element={<NotFound />} />
            {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);



export default App;
