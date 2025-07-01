import { motion } from "framer-motion";
import { ProgramCard } from "../components/Programs/ProgramCard";

export function Programs() {
  const programs = [
    {
      emoji: "🌱",
      title: "Mujeres Emprendedoras",
      description:
        "Capacitaciones para impulsar negocios liderados por mujeres, con mentoría especializada y fondos semilla anuales.",
      modalidad: "Presencial + Virtual",
      link: "/programas/mujeres-emprendedoras",
      objetivos: [
        "Formar 1,000 lideresas empresariales al año",
        "Reducir la brecha de acceso a capital por género en sectores populares",
        "Generar encadenamientos productivos solidarios"
      ],
      ubicaciones: ["La Paz", "Quito", "Santa Marta"]
    },
    {
      emoji: "📚",
      title: "Educación para la Igualdad",
      description:
        "Cursos gratuitos sobre derechos de la mujer, salud, finanzas y tecnología. Más de 300 mujeres egresadas en 2024.",
      modalidad: "Virtual",
      link: "/programas/educacion-igualdad",
      objetivos: [
        "Ofrecer 12 módulos temáticos con enfoque de género",
        "Acreditar saberes de mujeres que nunca accedieron a la educación formal",
        "Crear redes de aprendizaje entre pares"
      ],
      ubicaciones: ["Virtual LATAM"]
    },
    {
      emoji: "⚖️",
      title: "Asesoría Legal",
      description:
        "Consultoría gratuita sobre protección de derechos y violencia de género. Disponible también vía chat confidencial.",
      modalidad: "Presencial + Chat",
      link: "/programas/asesoria-legal",
      objetivos: [
        "Acompañar 5,000 procesos judiciales al año",
        "Formar defensoras comunitarias en legislación local",
        "Desarrollar un protocolo de atención intercultural"
      ],
      ubicaciones: ["San Cristóbal", "Cali", "Tegucigalpa"]
    },
    {
      emoji: "👩‍💼",
      title: "Red de Liderazgo Femenino",
      description:
        "Encuentros mensuales con mujeres referentes en política, ciencia y cultura. Acceso a becas internacionales.",
      modalidad: "Híbrida",
      link: "/programas/red-liderazgo",
      objetivos: [
        "Impulsar vocaciones públicas en jóvenes rurales",
        "Ofrecer mentoría intergeneracional con lideresas históricas",
        "Crear un observatorio feminista de participación política"
      ],
      ubicaciones: ["Ciudad de México", "Arequipa", "Asunción"]
    },
    {
      emoji: "💡",
      title: "Laboratorio de Innovación Social",
      description:
        "Espacio creativo para desarrollar ideas que transformen comunidades, con apoyo técnico y visibilidad nacional.",
      modalidad: "Presencial intensivo",
      link: "/programas/laboratorio",
      objetivos: [
        "Facilitar 100 proyectos comunitarios por cohorte",
        "Fomentar el uso de tecnología con propósito social",
        "Difundir soluciones replicables en foros regionales"
      ],
      ubicaciones: ["Medellín", "Buenos Aires", "Caracas"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="py-12"
    >
      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 space-y-12 text-gray-800">
        <section aria-labelledby="programas">
          <h2 id="programas" className="text-3xl font-bold text-[var(--violeta)] text-center">
            Nuestros Programas
          </h2>
          <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-gray-700">
            Creamos espacios de formación, asesoría y colaboración diseñados para empoderar mujeres en distintos ámbitos.
          </p>
        </section>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {programs.map((program, idx) => (
            <ProgramCard key={idx} {...program} />
          ))}
        </ul>
      </main>
    </motion.div>
  );
}
