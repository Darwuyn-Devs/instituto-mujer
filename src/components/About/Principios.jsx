import { motion } from "framer-motion";

export function Principios() {
  return (
    <motion.div
      id="principios"
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-2xl font-semibold text-[var(--violeta-claro)]">🧭 Nuestros Principios</h3>
      <ul className="list-disc list-inside space-y-3 text-base text-gray-700 mt-4">
        <li>
          <strong>Feminismo Popular:</strong> trabajamos desde los territorios y con base en la realidad concreta de las mujeres, reconociendo sus saberes cotidianos, sus luchas históricas y sus formas de organización autónoma. El cambio no se impone: se construye desde abajo, con participación activa y horizontal.
        </li>
        <li>
          <strong>Autonomía:</strong> promovemos la autodeterminación económica, física, emocional, tecnológica y espiritual de todas las personas que acompañamos. Cada mujer tiene derecho a decidir sobre su cuerpo, su tiempo, su territorio y su identidad sin presiones externas.
        </li>
        <li>
          <strong>Accesibilidad:</strong> defendemos el diseño inclusivo de recursos, infraestructuras, contenidos y experiencias. Nos aseguramos de que nuestras actividades lleguen a quienes viven con discapacidad, están en situación de movilidad o enfrentan barreras geográficas, lingüísticas o culturales.
        </li>
        <li>
          <strong>Interculturalidad:</strong> valoramos la diversidad de voces, lenguas, identidades y cosmovisiones de nuestro continente. No solo reconocemos las diferencias: las celebramos y las incorporamos como parte vital de nuestra forma de hacer feminismo en red.
        </li>
        <li>
          <strong>Transparencia:</strong> actuamos con responsabilidad ética y rendimos cuentas a nuestras comunidades, donantes y aliadas. Nuestro compromiso es con una gestión clara, participativa y basada en datos abiertos, historias reales y procesos verificables.
        </li>
        <li>
          <strong>Corresponsabilidad:</strong> creemos que los cuidados deben ser compartidos. Generamos políticas internas y externas que redistribuyan las tareas domésticas y de cuidado, visibilizando el trabajo no remunerado e impulsando sistemas colectivos de apoyo.
        </li>
        <li>
          <strong>Transformación Colectiva:</strong> el cambio no es individual ni inmediato. Apostamos a procesos de largo aliento que fortalezcan a las comunidades y promuevan redes de sororidad, escucha activa y acción conjunta. Creamos espacios donde las mujeres no solo sanan, también lideran.
        </li>
        <li>
          <strong>Innovación Social:</strong> articulamos saberes tradicionales con herramientas contemporáneas, utilizando tecnologías abiertas, metodologías colaborativas y procesos creativos para responder a desafíos complejos con soluciones humanas y accesibles.
        </li>
        <li>
          <strong>No violencia:</strong> sostenemos una práctica institucional y territorial libre de cualquier tipo de violencia: simbólica, estructural, racial, patriarcal o política. Promovemos vínculos respetuosos, afectivos y conscientes, tanto en nuestra red interna como con las comunidades.
        </li>
      </ul>
    </motion.div>
  );
}
