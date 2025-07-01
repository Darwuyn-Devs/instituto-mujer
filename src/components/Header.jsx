import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

export function Header() {
  const baseLink = "transition-colors duration-200 hover:underline px-2 py-1";
  const activeStyle = "font-semibold underline";

  return (
    <header>
      <div className="header-container">
        {/* Logo con margen a la derecha */}
        <div className="logo-box mr-10">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Navegación con espacio uniforme */}
        <nav className="main-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeStyle : ""}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeStyle : ""}`
            }
          >
            Quiénes Somos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeStyle : ""}`
            }
          >
            Contacto
          </NavLink>
          <NavLink
            to="/programs"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeStyle : ""}`
            }
          >
            Programas
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
