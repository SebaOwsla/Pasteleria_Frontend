import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartContext";


export const Navbar = () => {
  const { items } = useCart();


  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">
          <NavLink to="/">Origenes Resto Bar</NavLink>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos">Carta</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
