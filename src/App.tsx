import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";


import './index.css';
import Index from "./pages/Index";
import ProductsPage from "./pages/Product";
import Contact from "./pages/Contact";
import "./assets/styles.css";
import {ProductDetail} from "./pages/ProductDetail";
import Login from "./pages/Login";
import { Carrito } from "./pages/Carrito";
import Registro from "./pages/Registro";
export default function App(){
  return (
     
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<ProductsPage/>} />
          <Route path="/contacto" element={<Contact/>} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}



