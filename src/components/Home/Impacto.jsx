export function Impacto() {
  return (
    <section aria-labelledby="impacto" className="text-center my-16">
      <h3
        id="impacto"
        className="text-2xl font-semibold text-[var(--violeta)] mb-6"
      >
        📊 Impacto en cifras
      </h3>

      <img
        src="/images/impacto.png"
        alt="Gráfico de estadísticas de impacto del Instituto"
        className="w-full h-auto rounded-xl shadow-md object-contain my-12"
      />
    </section>
  );
}
