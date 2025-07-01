import { Button } from "../Button";

export function HeroSection() {
  return (
    <section id="inicio" className="relative bg-[var(--violeta)] text-white overflow-hidden rounded-xl shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 py-16 gap-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Juntas lideramos el cambio
          </h1>
          <p className="mt-4 text-lg text-purple-100 max-w-lg">
            Desde 1998 empoderamos a mujeres para transformar territorios y conquistar sus derechos.
          </p>
          <p className="mt-4 text-md text-purple-100 max-w-md">
            Somos una red que cree en la equidad, la sororidad y la transformación social desde abajo hacia arriba.
          </p>
          <div className="mt-6">
            <a href="#vision">
              <Button>Conoce nuestra Misión y Visión</Button>
            </a>
          </div>
        </div>
        <div className="w-full h-64 md:h-80">
          <img
            src="/images/mujeres.jpeg"
            alt="Mujeres unidas"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[var(--dorado)] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/20 opacity-10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  );
}
