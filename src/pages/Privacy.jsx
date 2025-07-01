export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-[var(--violeta)]">Política de Privacidad</h1>

      <p>
        En el Instituto de la Mujer de América Latina nos tomamos muy en serio la protección de tu privacidad y tu derecho a decidir sobre tu información personal.
        Esta política describe cómo recopilamos, utilizamos, almacenamos y protegemos tus datos cuando navegas o interactúas con nuestra plataforma.
      </p>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">📋 1. Información que recopilamos</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Información personal de contacto:</strong> como nombre, correo electrónico, país de residencia, cuando completas formularios de inscripción o contacto.</li>
        <li><strong>Datos de navegación:</strong> como dirección IP, tipo de dispositivo, duración de la visita o páginas más vistas (recogidos de forma anónima mediante cookies esenciales).</li>
        <li><strong>Preferencias voluntarias:</strong> cuando decides compartir intereses, necesidades formativas o grupos de afinidad para acceder a contenido personalizado.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">🎯 2. Finalidad del uso de datos</h2>
      <p>
        La información que recopilamos tiene como objetivo facilitar una experiencia significativa, segura y adaptada a tu realidad. En ningún caso la vendemos o intercambiamos.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>Ofrecerte acceso a cursos, programas y recursos adaptados a tu perfil e intereses.</li>
        <li>Mejorar la usabilidad de nuestro sitio mediante análisis anónimos.</li>
        <li>Enviar comunicaciones institucionales con contenido relevante (si así lo autorizas).</li>
        <li>Resguardar la seguridad técnica y prevenir usos indebidos de la plataforma.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">🔒 3. Protección y seguridad</h2>
      <p>
        Utilizamos protocolos seguros de transmisión (HTTPS), cifrado en formularios sensibles, y alojamos nuestros sistemas en servidores certificados bajo estándares internacionales de seguridad.
        Solo el personal autorizado tiene acceso a tus datos, y se firma un compromiso de confidencialidad institucional con quienes colaboran técnica o programáticamente.
      </p>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">🌐 4. Uso de cookies</h2>
      <p>
        Esta plataforma utiliza cookies esenciales para garantizar su funcionamiento técnico correcto, así como cookies estadísticas anónimas para conocer patrones de navegación y mejorar nuestros servicios.
        No utilizamos cookies de terceros con fines publicitarios, ni herramientas de rastreo invasivo. Puedes configurar tu navegador para bloquearlas, aunque algunas funcionalidades podrían verse limitadas.
      </p>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">👩‍⚖️ 5. Derechos de las usuarias</h2>
      <p>
        Como usuaria, tienes pleno derecho a:
      </p>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>Solicitar el acceso, modificación o eliminación de tus datos personales.</li>
        <li>Solicitar información sobre cómo se utilizan y quién tiene acceso a tus datos.</li>
        <li>Retirar tu consentimiento en cualquier momento, sin necesidad de justificación.</li>
        <li>Presentar una queja ante la autoridad local de protección de datos, si lo consideras necesario.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">✉️ 6. Contacto y reclamos</h2>
      <p>
        Para ejercer tus derechos o resolver dudas relacionadas con la privacidad, puedes escribir a{" "}
        <a
          href="mailto:privacidad@institutodelamujer.org"
          className="text-[var(--violeta-claro)] underline"
        >
          privacidad@institutodelamujer.org
        </a>
        . Respondemos todos los mensajes en un plazo máximo de 5 días hábiles.
      </p>

      <p className="text-sm text-gray-600 italic">
        Última actualización: Julio 2025 — El Instituto se reserva el derecho de actualizar esta política conforme a nuevas normativas o servicios.
        Te notificaremos de cambios significativos a través de este espacio o por correo si estás suscrita.
      </p>
    </div>
  );
}
