import { Routes, Route } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import Admin from "./pages/Admin/Admin";
import AdminProducts from "./pages/Admin/AdminProducts";
import CreateProduct from "./pages/Admin/CreateProduct";
import EditProduct from "./pages/Admin/EditProduct";
import AdminUsers from "./pages/Admin/AdminUsers";
import Forbidden from "./pages/Forbidden";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Carrito from "./pages/Carrito";
import "./index.css";
import "./assets/styles.css";
import { useEffect, useState } from "react";

export default function App() {

  
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/productos" element={<Product />} />
      <Route path="/productos/:id" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/403" element={<Forbidden />} />
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/productos"
        element={
          <AdminRoute>
            <AdminProducts />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/productos/nuevo"
        element={
          <AdminRoute>
            <CreateProduct />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/productos/editar/:id"
        element={
          <AdminRoute>
            <EditProduct />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/usuarios"
        element={
          <AdminRoute>
            <AdminUsers />
          </AdminRoute>
        }
      />

      <Route path="/contacto" element={<Contact />} />
    </Routes>

    
  );
}
