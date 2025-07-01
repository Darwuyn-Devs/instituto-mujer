import { Button } from "../Button";
import { Link } from "react-router-dom";

export function CierreInspirador() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div>
        <h3 className="text-3xl font-bold text-[var(--violeta)]">Unidas transformamos futuros</h3>
        <p className="mt-4 text-gray-700">
          Más de 180 mil mujeres han participado en nuestros programas. Desde comunidades indígenas hasta entornos urbanos,
          cada historia es un testimonio de resiliencia.
        </p>
      </div>
      <div>
        <img
          src="/images/empoderadas.jpeg"
          alt="Mujeres empoderadas"
          className="rounded-lg shadow-md w-full object-cover h-72"
        />
      </div>
      <div className="md:col-span-2 text-center pt-6">
        <Link to="/programs">
          <Button>Explora nuestros programas</Button>
        </Link>
      </div>
    </section>
  );
}
