export function Accessibility() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-[var(--violeta)]">
        Compromiso de Accesibilidad
      </h1>

      <p>
        En el Instituto de la Mujer de América Latina, creemos firmemente que el acceso a la información, el conocimiento y la participación digital debe estar garantizado para todas las personas. Nuestro compromiso con la accesibilidad web es parte integral de nuestra misión: crear espacios inclusivos, equitativos y transformadores, en los que todas las usuarias —incluyendo personas con discapacidad, adultas mayores, personas neurodivergentes y hablantes no nativos— puedan navegar, interactuar y contribuir plenamente.
      </p>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">🔍 Principios de accesibilidad que aplicamos</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Perceptible:</strong> Nuestros contenidos utilizan colores con contraste suficiente, textos alternativos en imágenes y jerarquía visual clara.</li>
        <li><strong>Operable:</strong> Toda la navegación es posible mediante teclado y adaptada a dispositivos de asistencia como lectores de pantalla o botones físicos.</li>
        <li><strong>Comprensible:</strong> Los textos están redactados en lenguaje claro y directo, evitando tecnicismos innecesarios.</li>
        <li><strong>Robusto:</strong> La plataforma es compatible con tecnologías de asistencia modernas y cumple con estándares como WCAG 2.1 nivel AA.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">🛠️ Características implementadas</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Estructura semántica con encabezados jerárquicos, regiones `main`, `nav` y `section` etiquetadas por `aria`.</li>
        <li>Botones grandes, con zona de clic ampliada y foco visible para navegación por teclado.</li>
        <li>Sistema de colores basado en variables CSS con suficiente contraste entre fondo y texto.</li>
        <li>Contenido textual alineado a principios de lectura fácil y comprensión intergeneracional.</li>
        <li>Descripciones detalladas en formularios y `aria-describedby` vinculado a instrucciones.</li>
        <li>Soporte para lectores de pantalla a través de roles e identificadores claros.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">🚧 Mejora continua</h2>
      <p>
        Sabemos que la accesibilidad no es un objetivo estático, sino un proceso de mejora constante. Nuestro equipo técnico revisa regularmente los componentes del sitio utilizando validadores automáticos (como axe-core y Lighthouse), pruebas manuales, y auditorías con personas usuarias reales con diferentes tipos de discapacidad.
      </p>
      <p>
        Adicionalmente, formamos a nuestro equipo en prácticas accesibles de desarrollo, redacción y diseño. Implementamos revisiones específicas de accesibilidad en cada sprint de desarrollo.
      </p>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">📣 Tu experiencia importa</h2>
      <p>
        Si experimentas dificultades para acceder a alguna sección del sitio, encuentras elementos visuales o funcionales poco claros, o quieres sugerir mejoras relacionadas con la accesibilidad, por favor escríbenos a{" "}
        <a
          href="mailto:accesibilidad@institutodelamujer.org"
          className="text-[var(--violeta-claro)] underline"
        >
          accesibilidad@institutodelamujer.org
        </a>
        . Nos comprometemos a responder dentro de las 48 horas siguientes a tu mensaje.
      </p>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">📜 Marco de referencia</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Directrices de Accesibilidad para el Contenido Web (WCAG 2.1 – Nivel AA)</li>
        <li>Convención sobre los Derechos de las Personas con Discapacidad de Naciones Unidas</li>
        <li>Ley Modelo Interamericana sobre Accesibilidad (OEA)</li>
        <li>Normas de Buenas Prácticas en Accesibilidad Digital (Red de Gobierno Abierto de América Latina)</li>
      </ul>

      <p className="text-sm text-gray-600 italic">
        Este sitio fue diseñado con base en un enfoque inclusivo y plural. Creemos que la web no debe excluir a nadie.
      </p>
    </div>
  );
}
