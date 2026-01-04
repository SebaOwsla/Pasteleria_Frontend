import { Routes, Route, Navigate } from "react-router-dom";

import Inicio from "./pages/Inicio";     // 👈 HOME
import Carta from "./pages/Index";       // 👈 MENÚ
import Contact from "./pages/Contact";
import Forbidden from "./pages/Forbidden";

import "./index.css";
import "./assets/styles.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Carta />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/403" element={<Forbidden />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
