import { motion } from "framer-motion";

export function Historia() {
  return (
    <motion.div
      id="historia"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-2xl font-semibold text-[var(--violeta-claro)]">🏛️ Nuestra Historia</h3>
      <div className="text-base text-gray-700 leading-relaxed space-y-4">
        <p>
          Fundado en 1998 por un grupo de educadoras, trabajadoras sociales y líderes barriales, el Instituto nació en una pequeña oficina comunitaria en Tegucigalpa, Honduras, con una idea sencilla pero poderosa: empoderar a las mujeres desde sus propias realidades. Las primeras reuniones se realizaban en patios, iglesias y bibliotecas comunales prestadas, donde decenas de mujeres compartían sus experiencias de desigualdad, pero también sus sueños de transformación.
        </p>

        <p>
          A lo largo de su evolución, el Instituto creció como un tejido entrelazado por manos diversas: maestras rurales, defensoras de derechos, ingenieras, agricultoras y jóvenes activistas. En 2004 se abrió la primera sede binacional entre El Salvador y Honduras, marcando el inicio de su proyección regional. Ya para 2010, el programa de Liderazgo Comunitario Feminista contaba con egresadas en 7 países.
        </p>

        <p>
          Durante la década de 2010, el Instituto priorizó la transformación digital con enfoque inclusivo, lanzando su plataforma virtual “Tejiendo Redes” en 2015, una comunidad en línea para compartir aprendizajes, acompañarse y crear campañas territoriales desde los bordes digitales. La pandemia de 2020 no nos detuvo: adaptamos más de 50 programas a formato híbrido y creamos el “Fondo de Cuidados Compartidos” para apoyar a mujeres cuidadoras sin ingresos durante las cuarentenas.
        </p>

        <p>
          En 2023, el Instituto fue invitado como observador al Foro de Igualdad Regional de la ONU y firmó convenios interinstitucionales con 11 gobiernos locales de Colombia, México, Perú y Bolivia para implementar políticas públicas con perspectiva de género.
        </p>

        <p>
          Hoy, tras más de 25 años de historia, el Instituto cuenta con representación en 12 países, una red activa de más de 900 voluntarias y presencia en foros internacionales de justicia de género, innovación social y liderazgo intergeneracional. Nuestra historia no está escrita con tinta, sino con experiencias compartidas, resiliencia colectiva y la certeza de que el cambio, cuando es guiado por mujeres, es profundo y duradero.
        </p>
      </div>
    </motion.div>
  );
}
