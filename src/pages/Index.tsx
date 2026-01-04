import React, { useEffect, useState } from "react";
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
    <div style={{ backgroundColor: "#ffc8a0" }}>
      <Navbar />

      <section id="productos" className="p-4" style={{ backgroundColor: "#ffc8a0" }}>
        <div className="container my-5 p-5 rounded-3" style={{ backgroundColor: "#5d4037e0" }}>
          <h1 className="text-center text-white mb-5">Productos Destacados</h1>

          {loading ? (
            <p className="text-center text-white">Cargando productos...</p>
          ) : productos.length === 0 ? (
            <p className="text-center text-white">No hay productos disponibles.</p>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
              {productos.slice(0, 6).map((producto) => (
                <div key={producto.id} className="col d-flex justify-content-center">
                  <div
                    className="card h-100 text-center"
                    style={{
                      backgroundColor: "#5D4037",
                      color: "aliceblue",
                      width: "100%",
                      maxWidth: "350px",
                    }}
                  >
                    <img
                      src={producto.imagen}
                      className="card-img-top"
                      height={200}
                      alt={producto.nombre}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{producto.nombre}</h5>
                      <p className="card-text flex-grow-1">{producto.descripcion}</p>
                      <a href="/productos" className="btn btn-dark mt-auto">
                        Saber más
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="misionyvision" className="py-5">
        <div className="container">
          <header className="text-center mb-4">
            <h2 className="h1">Misión y Visión</h2>
          </header>
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <h3 className="h5 text-center">Misión</h3>
              <div className="p-3 rounded-3" style={{ backgroundColor: "#5D4037" }}>
                <p className="mb-0 text-light">
                  Ofrecer una experiencia dulce y memorable, proporcionando productos de repostería de alta calidad y
                  celebrando nuestras raíces.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <h3 className="h5 text-center">Visión</h3>
              <div className="p-3 rounded-3" style={{ backgroundColor: "#5D4037" }}>
                <p className="mb-0 text-light">
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
