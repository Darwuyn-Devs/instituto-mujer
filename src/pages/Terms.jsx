export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-[var(--violeta)]">Términos y Condiciones de Uso</h1>

      <p>
        Bienvenido al sitio web del Instituto de la Mujer de América Latina. Al acceder o utilizar esta plataforma, usted reconoce haber leído, entendido y aceptado
        los presentes Términos y Condiciones. Este documento regula el uso del contenido, la interacción con servicios en línea y los derechos de propiedad intelectual de este sitio.
      </p>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">📘 1. Finalidad de la Plataforma</h2>
      <p>
        Esta web tiene propósitos educativos, informativos y sociales. Su contenido está destinado a difundir actividades, recursos, historias, convocatorias y contenidos vinculados
        al empoderamiento de las mujeres, la equidad de género y el desarrollo comunitario. No se garantiza que la totalidad de los contenidos reemplacen asesoría profesional,
        jurídica, médica o psicológica personalizada.
      </p>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">🔐 2. Uso Aceptado</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>El acceso a esta plataforma debe realizarse de forma ética, respetuosa y conforme con los valores del Instituto.</li>
        <li>No está permitido manipular, dañar, deshabilitar ni vulnerar la seguridad de este sitio o de los usuarios que lo utilizan.</li>
        <li>Los formularios disponibles son de uso exclusivo para fines institucionales. No deben ser usados para spam, contenido ofensivo o recopilación automatizada de datos.</li>
        <li>Queda estrictamente prohibido el uso indebido de imágenes, logos, marcas, textos o cualquier contenido sin autorización escrita.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">📩 3. Comunicaciones Institucionales</h2>
      <p>
        Al enviar mensajes a través de formularios de contacto, inscripción o correo electrónico, usted acepta recibir información relacionada con actividades del Instituto.
        Podrá darse de baja o solicitar la eliminación de su información en cualquier momento conforme a nuestra <a href="/accesibilidad" className="underline text-[var(--violeta-claro)]">política de accesibilidad y confidencialidad</a>.
      </p>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">💡 4. Propiedad Intelectual</h2>
      <p>
        Todos los contenidos presentes en esta web —incluyendo textos, imágenes, documentos descargables, logotipos, recursos audiovisuales y materiales de formación— son propiedad
        del Instituto o de sus respectivas autoras aliadas. Su reproducción, distribución o adaptación está prohibida salvo autorización previa, por escrito y con fines no comerciales.
      </p>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">⚠️ 5. Limitación de Responsabilidad</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>El Instituto no se responsabiliza por decisiones tomadas por usuarios a partir de la información publicada.</li>
        <li>No garantizamos la continuidad absoluta del servicio ni la ausencia de errores técnicos. No obstante, nos esforzamos en mantener el sitio actualizado y funcional.</li>
        <li>Enlaces a sitios externos son facilitados como referencia. El Instituto no controla ni avala su contenido.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">✏️ 6. Modificaciones</h2>
      <p>
        Nos reservamos el derecho de modificar, actualizar o sustituir estos términos en cualquier momento y sin notificación previa. Cualquier cambio será publicado en esta misma sección
        con fecha de actualización. El uso continuo de la plataforma implica la aceptación de dichos cambios.
      </p>

      <h2 className="text-xl font-semibold text-[var(--violeta-claro)]">📝 7. Notificación de Infracciones</h2>
      <p>
        Si usted identifica el uso indebido de la marca, contenido ofensivo, prácticas no éticas o fallas de seguridad, puede reportarlo escribiendo a{" "}
        <a href="mailto:legal@institutodelamujer.org" className="text-[var(--violeta-claro)] underline">
          legal@institutodelamujer.org
        </a>. Garantizamos seguimiento oportuno y confidencial.
      </p>

      <p className="text-sm italic text-gray-600">
        Última actualización: Julio 2025
      </p>
    </div>
  );
}
