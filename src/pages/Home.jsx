import { motion } from "framer-motion";
import { HeroSection } from "../components/Home/HeroSection";
import { VisionObjetivos } from "../components/Home/VisionObjetivos";
import { Impacto } from "../components/Home/Impacto";
import { Testimonios } from "../components/Home/Testimonios";
import { Alianzas } from "../components/Home/Alianzas";
import { CierreInspirador } from "../components/Home/CierreInspirador";

export function Home() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      <VisionObjetivos />
      <Impacto />
      <Testimonios />
      <Alianzas />
      <CierreInspirador />
    </motion.div>
  );
}
