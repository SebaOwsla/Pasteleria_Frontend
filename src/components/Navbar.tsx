import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { getUserRole } from "../util/auth";
import { logout } from "../util/logout";

export const Navbar = () => {
  const { items } = useCart();
  const totalItems = items.reduce(
    (acc, producto) => acc + producto.qty,
    0
  );

  const token = localStorage.getItem("token");
  const role = getUserRole();
  const upperRole = role ? role.toUpperCase() : "";

  const isAdmin =
    upperRole === "ADMIN" || upperRole === "ROLE_ADMIN";

  return (
    <nav className="navbar">
      <div className="container">

        <div className="brand">
          <NavLink to="/">Pastelería Mil Sabores</NavLink>
        </div>

        <ul className="nav-links">

          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/productos">Productos</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>

          {isAdmin && (
            <li><NavLink to="/admin">Panel Admin</NavLink></li>
          )}

          {!token && (
            <>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/registro">Registro</NavLink></li>
            </>
          )}

          <li>
            <NavLink to="/carrito">
              Carrito🛒({totalItems})
            </NavLink>
          </li>

          {token && (
            <li>
              <button
                className="btn btn-danger ms-3"
                onClick={logout}
              >
                Cerrar sesión
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
