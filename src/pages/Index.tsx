import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";



interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

export const Home: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);


  return (
    <div className="elegant-bg">
      <Navbar />

      {/* HERO / DESTACADOS */}
      <section id="productos" className="elegant-wrap">
        <div className="container elegant-card">
          <h1 className="text-center elegant-title mb-2">Productos Destacados</h1>
          <p className="text-center elegant-subtitle mb-4">
            Sabores con identidad. Hechos para compartir.
          </p>

          {loading ? (
            <p className="text-center elegant-subtitle">Cargando productos...</p>
          ) : productos.length === 0 ? (
            <p className="text-center elegant-subtitle">No hay productos disponibles.</p>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
              {productos.slice(0, 6).map((producto) => (
                <div key={producto.id} className="col d-flex justify-content-center">
                  <div className="card h-100 text-center elegant-product" style={{ width: "100%", maxWidth: "350px" }}>
                    <img
                      src={producto.imagen}
                      className="card-img-top"
                      height={200}
                      alt={producto.nombre}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title" style={{ color: "var(--gold2)" }}>
                        {producto.nombre}
                      </h5>
                      <p className="card-text flex-grow-1" style={{ color: "var(--muted)" }}>
                        {producto.descripcion}
                      </p>

                      {/* ✅ Link (no <a>) para SPA */}
                      <Link to="/productos" className="elegant-btn mt-auto">
                        Ir al menú
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MISION / VISION */}
      <section id="misionyvision" className="pb-5">
        <div className="container">
          <header className="text-center mb-4">
            <h2 className="h1 section-title">Misión y Visión</h2>
            <p className="elegant-subtitle">
              Tradición, calidad y una experiencia con carácter.
            </p>
          </header>

          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <h3 className="h5 text-center section-title">Misión</h3>
              <div className="section-box">
                <p className="mb-0" style={{ color: "var(--muted)" }}>
                  Ofrecer una experiencia dulce y memorable, proporcionando productos de repostería de alta calidad y
                  celebrando nuestras raíces.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <h3 className="h5 text-center section-title">Visión</h3>
              <div className="section-box">
                <p className="mb-0" style={{ color: "var(--muted)" }}>
                  Convertirnos en la tienda online líder en repostería, destacando por innovación, calidad e impacto en
                  la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
