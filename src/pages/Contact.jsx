import { motion } from "framer-motion";
import { ContactForm } from "../components/Contact/ContactForm";

export function Contact() {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800 space-y-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Intro */}
      <section aria-labelledby="intro">
        <h2 id="intro" className="text-4xl font-extrabold text-[var(--violeta)]">
          Contáctanos
        </h2>
        <p className="mt-4 text-lg leading-relaxed">
          En el Instituto de la Mujer creemos en el poder de la conexión. Si deseas participar, colaborar, hacer una consulta
          o simplemente compartir tus ideas, estamos aquí para escucharte.
        </p>
      </section>

      {/* Información de contacto */}
      <section aria-labelledby="info-contacto">
        <h3 id="info-contacto" className="text-2xl font-semibold text-[var(--violeta-claro)]">
          📮 Información de contacto
        </h3>
        <ul className="mt-4 space-y-2">
          <li><strong>Dirección:</strong> Calle Mujeres Libres #301, Ciudad Esperanza, LATAM</li>
          <li><strong>Teléfono:</strong> +58 (212) 555.0198</li>
          <li><strong>Correo:</strong> contacto@institutodelamujer.org</li>
          <li><strong>Horario:</strong> Lunes a Viernes, 8:00am – 5:00pm</li>
        </ul>
      </section>

      {/* Formulario */}
      <section aria-labelledby="formulario-contacto">
        <h3 id="formulario-contacto" className="text-2xl font-semibold text-[var(--violeta-claro)]">
          💌 Envíanos un mensaje
        </h3>
        <ContactForm />
      </section>

      {/* Redes sociales */}
      <section aria-labelledby="redes">
        <h3 id="redes" className="text-2xl font-semibold text-[var(--violeta-claro)]">
          🔗 También puedes encontrarnos en:
        </h3>
        <div className="flex flex-wrap gap-6 mt-6 items-center justify-start">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src="/images/Facebook-logotipo.svg"
              alt="Facebook"
              className="img-icon hover:scale-105 transition-transform duration-200"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="/images/Instagram-logotipo.svg"
              alt="Instagram"
              className="img-icon hover:scale-105 transition-transform duration-200"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="/images/LinkedIn-logotipo.svg"
              alt="LinkedIn"
              className="img-icon hover:scale-105 transition-transform duration-200"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
          >
            <img
              src="/images/X-logotipo.svg"
              alt="X / Twitter"
              className="img-icon hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      </section>
    </motion.div>
  );
}
