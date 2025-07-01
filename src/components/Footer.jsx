export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-sm py-6 px-4 mt-12 bg-[var(--footer-bg)] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {year} Instituto de la Mujer. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/privacy">Privacidad</a>
          <a href="/terms">Términos</a>
          <a href="/accessibility">Accesibilidad</a>
        </div>
      </div>
    </footer>
  );
}
