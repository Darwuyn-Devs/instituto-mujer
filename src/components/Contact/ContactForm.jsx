export function ContactForm() {
  return (
    <section className="contact-card">
      <form className="flex flex-col gap-6">
        <div>
          <label htmlFor="name" className="form-label">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="tucorreo@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="form-input"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>

        <div className="pt-2">
          <button type="button" disabled className="btn w-full">
            Enviar (modo demo)
          </button>
        </div>
      </form>
    </section>
  );
}
