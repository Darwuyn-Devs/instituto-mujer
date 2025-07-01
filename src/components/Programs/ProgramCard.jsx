export function ProgramCard({ title, emoji, description, tags, link, modalidad, objetivos, ubicaciones }) {
  return (
    <li className="bg-[var(--lavanda)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-[var(--violeta)] mb-2 flex items-center gap-2">
          <span className="text-2xl">{emoji}</span> {title}
        </h3>
        <p className="text-gray-700">{description}</p>

        {modalidad && (
          <p className="mt-2 text-sm text-gray-600">
            <strong>Modalidad:</strong> {modalidad}
          </p>
        )}

        {objetivos && (
          <div className="mt-3">
            <p className="text-sm font-semibold text-[var(--violeta)] mb-1">Objetivos:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {objetivos.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          </div>
        )}

        {tags && (
          <ul className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className="bg-[var(--violeta-claro)] text-[var(--blanco)] px-2 py-1 text-xs rounded-full"
              >
                #{tag}
              </li>
            ))}
          </ul>
        )}

        {ubicaciones && (
          <p className="mt-2 text-sm text-gray-600">
            <strong>Sedes:</strong> {ubicaciones.join(", ")}
          </p>
        )}
      </div>

      {link && (
        <a
          href={link}
          className="inline-block mt-4 text-sm font-medium text-[var(--violeta)] hover:underline self-start"
        >
          Conocer más →
        </a>
      )}
    </li>
  );
}
