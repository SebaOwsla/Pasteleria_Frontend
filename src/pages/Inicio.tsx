import { Link } from "react-router-dom";
import logo from "../assets/imagenes/logo2.png";

import "./inicio.css"; 

export default function Inicio() {
  return (
    <main className="inicio">
      <div className="inicio__card">
        <img className="inicio__logo" src={logo} alt="Logo Orígenes" />

        <h1 className="inicio__title">Bienvenido a Orígenes</h1>
        <p className="inicio__subtitle">Resto Bar</p>

       
        <Link className="inicio__btn" to="/productos">
          Ir al menú
        </Link>

        <p className="inicio__hint">
        
        </p>
      </div>
    </main>
  );
}
