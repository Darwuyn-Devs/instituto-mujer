import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Programs } from "./pages/Programs";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Accessibility } from "./pages/Accessibility";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="*" element={<div className="p-6">Página no encontrada</div>} />
      </Routes>
    </AnimatePresence>
  );
}
