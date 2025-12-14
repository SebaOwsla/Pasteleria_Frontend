import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { getUserRole } from "../util/auth";

export const Navbar = () => {
  const { items } = useCart();
  const totalItems = items.reduce(
    (acumulador, producto) => acumulador + producto.qty,
    0
  );

  const role = getUserRole();
  const upperRole = role ? role.toUpperCase() : "";

  console.log("🔎 ROL LEÍDO EN NAVBAR:", role);

  const isAdmin =
    upperRole === "ADMIN" || upperRole === "ROLE_ADMIN";

  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">
          <NavLink to="/">Pastelería Mil Sabores</NavLink>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>

          {isAdmin && (
            <li>
              <NavLink to="/admin">Perfil Admin</NavLink>
            </li>
          )}

          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/registro">Registro</NavLink>
          </li>
          <li>
            <NavLink to="/carrito">
              Carrito🛒({totalItems})
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
