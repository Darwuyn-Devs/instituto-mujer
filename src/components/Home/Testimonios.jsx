export function Testimonios() {
  const quotes = [
    {
      texto:
        "Antes de conocer el Instituto, no sabía que tenía derecho a hablar y decidir por mí misma. Hoy soy la presidenta comunal de Santa Amalia, Guatemala, y tengo un taller de costura con 12 empleadas.",
      autor: "— María Tecún, 32 años",
    },
    {
      texto:
        "Recibí orientación legal cuando nadie quería escucharme. Aprendí a defender mis derechos y hoy ayudo a otras mujeres víctimas de violencia en mi comunidad.",
      autor: "— Vanessa Ortega, voluntaria de San Cristóbal",
    },
    {
      texto:
        "El programa de alfabetización digital cambió mi vida. Nunca imaginé que a los 60 años estaría enseñando a otras mujeres mayores cómo usar una computadora.",
      autor: "— Carmen Mendoza, facilitadora rural en Perú",
    },
    {
      texto:
        "Participé en un taller de liderazgo juvenil y hoy represento a mi comunidad en el consejo local. Me enseñaron que ser joven e indígena no es una barrera, sino una fuerza.",
      autor: "— Nayeli Rojas, 19 años, Bolivia",
    },
    {
      texto:
        "Gracias al apoyo psicológico del Instituto, logré salir de una relación violenta. Hoy tengo un emprendimiento propio y doy charlas sobre autoestima en escuelas rurales.",
      autor: "— Elena Duarte, emprendedora de Barinas",
    },
  ];

  return (
    <section aria-labelledby="testimonios">
      <h3 id="testimonios" className="text-2xl font-semibold text-[var(--violeta-claro)]">💬 Testimonios reales</h3>
      {quotes.map((q, idx) => (
        <blockquote
          key={idx}
          className="mt-6 border-l-4 border-[var(--violeta)] pl-4 italic text-gray-600"
        >
          “{q.texto}”
          <p className="mt-2 text-sm text-[var(--violeta)] not-italic">{q.autor}</p>
        </blockquote>
      ))}
    </section>
  );
}
