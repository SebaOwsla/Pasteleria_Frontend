import { NavLink } from "react-router-dom";
import logo from "../assets/imagenes/logito.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark elegant-navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/" end>
          <img src={logo} alt="Orígenes" height={34} />
          <span className="brand-text">Orígenes</span>
        </NavLink>

       
        <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" end>
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Productos">
              Menu
            </NavLink>
          </li>
               <li className="nav-item">
            <NavLink className="nav-link" to="/Index">
              Carta
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
