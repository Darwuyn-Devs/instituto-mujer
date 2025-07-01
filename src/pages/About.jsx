import { motion } from "framer-motion";
import { Historia } from "../components/About/Historia";
import { Principios } from "../components/About/Principios";
import { Equipo } from "../components/About/Equipo";
import { Proyectos } from "../components/About/Proyectos";

export function About() {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800 space-y-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h2 className="text-4xl font-extrabold text-[var(--violeta)]">Sobre Nosotros</h2>

      <section aria-labelledby="historia">
        <Historia />
      </section>

      <section aria-labelledby="principios">
        <Principios />
      </section>

      <section aria-labelledby="equipo">
        <Equipo />
      </section>

      <section aria-labelledby="proyectos">
        <Proyectos />
      </section>

      <p className="text-md text-gray-700">
        Desde la formación hasta la incidencia política, nuestro compromiso es que ninguna mujer se quede atrás.
        Seguiremos caminando junto a quienes nos inspiran cada día a imaginar y construir un futuro más justo.
      </p>
    </motion.div>
  );
}
