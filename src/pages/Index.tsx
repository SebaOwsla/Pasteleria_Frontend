import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

/* IMÁGENES */
import img8361 from "../assets/imagenes/IMG_8361-Mejorado-NR.jpg";
import img8398 from "../assets/imagenes/IMG_8398-Mejorado-NR.jpg";
import img8410 from "../assets/imagenes/IMG_8410-Mejorado-NR.jpg";
import img8414 from "../assets/imagenes/IMG_8414-Mejorado-NR.jpg";
import img8510 from "../assets/imagenes/IMG_8510-Mejorado-NR.jpg";
import img8571 from "../assets/imagenes/IMG_8571-Mejorado-NR.jpg";
import img8594 from "../assets/imagenes/IMG_8594-Mejorado-NR.jpg";
import img8613 from "../assets/imagenes/IMG_8613-Mejorado-NR.jpg";
import img8740 from "../assets/imagenes/IMG_8740-Mejorado-NR.jpg";
import img8767 from "../assets/imagenes/IMG_8767-Mejorado-NR.jpg";
import img8882 from "../assets/imagenes/IMG_8882-Mejorado-NR.jpg";
import img8938 from "../assets/imagenes/IMG_8938-Mejorado-NR.jpg";
import img8996 from "../assets/imagenes/IMG_8996-Mejorado-NR.jpg";
import img9051 from "../assets/imagenes/IMG_9051-Mejorado-NR.jpg";
import img9054 from "../assets/imagenes/IMG_9054-Mejorado-NR.jpg";
import img9124 from "../assets/imagenes/IMG_9124-Mejorado-NR.jpg";

/* TIPADO */
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

  /* SLIDES (img9124 sube más arriba) */
  const slides = [
    { src: img8361, alt: "Orígenes - Ambiente" },
    { src: img8398, alt: "Orígenes - Cocina" },
    { src: img8410, alt: "Orígenes - Cocina" },
    { src: img8414, alt: "Orígenes - Preparaciones" },
    { src: img8510, alt: "Orígenes - Bar" },
    { src: img8571, alt: "Orígenes - Experiencia" },
    { src: img8594, alt: "Orígenes - Detalles" },
    { src: img8613, alt: "Orígenes - Cocina" },
    { src: img8740, alt: "Orígenes - Ambiente" },
    { src: img8767, alt: "Orígenes - Bar" },
    { src: img8882, alt: "Orígenes - Preparaciones" },
    { src: img8938, alt: "Orígenes - Detalles" },
    { src: img8996, alt: "Orígenes - Experiencia" },
    { src: img9051, alt: "Orígenes - Ambiente" },
    { src: img9054, alt: "Orígenes - Bar" },
    {
      src: img9124,
      alt: "Orígenes - Cocina",
      position: "center 25", // ⬅ sube esta imagen (ajusta 0% / 10% / 20%)
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  /* AUTO-PLAY */
  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="elegant-bg">
      <Navbar />

      {/* HERO */}
      <section id="productos" className="elegant-wrap">
        <div className="container elegant-card">
          <h1 className="text-center elegant-title mb-2">
            Esto es Orígenes RestoBar
          </h1>
          <p className="text-center elegant-subtitle mb-4">
            Sabores con identidad. Hechos para compartir.
          </p>

          {/* CARRUSEL */}
          <div className="origenes-slider">
            <button
              type="button"
              className="origenes-slider__btn origenes-slider__btn--left"
              onClick={prevSlide}
              aria-label="Imagen anterior"
            >
              ‹
            </button>

            <div className="origenes-slider__frame">
              <img
                src={slides[slideIndex].src}
                alt={slides[slideIndex].alt}
                className="origenes-slider__img"
                style={{
                  objectPosition:
                    (slides[slideIndex] as any).position ?? "center center",
                }}
              />
            </div>

            <button
              type="button"
              className="origenes-slider__btn origenes-slider__btn--right"
              onClick={nextSlide}
              aria-label="Imagen siguiente"
            >
              ›
            </button>
          </div>

          {/* GRID PRODUCTOS */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {productos.slice(0, 6).map((producto) => (
              <div
                key={producto.id}
                className="col d-flex justify-content-center"
              >
                <div
                  className="card h-100 text-center elegant-product"
                  style={{ width: "100%", maxWidth: "350px" }}
                >
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
                    <p
                      className="card-text flex-grow-1"
                      style={{ color: "var(--muted)" }}
                    >
                      {producto.descripcion}
                    </p>

                    <Link to="/productos" className="elegant-btn mt-auto">
                      Ir al menú
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIA / MISION / VISION */}
      <section id="misionyvision" className="pb-5">
        <div className="container">
          <header className="text-center mb-4">
            <h2 className="h1 section-title">Historia</h2>
            <p className="elegant-subtitle">
              Orígenes nace en el corazón de San José de Maipo, inspirado en
              nuestras raíces y en el camino que cada uno de nosotros ha
              recorrido. Creemos que la cocina es memoria, identidad y
              encuentro. Por eso cuidamos cada detalle de nuestras
              preparaciones, respetando la tradición que nos formó, pero
              atreviéndonos a innovar con nuevos sabores y técnicas. Somos un
              resto bar donde lo clásico y lo moderno conviven, donde cada plato
              cuenta una historia y cada copa acompaña un momento. En Orígenes
              honramos de dónde venimos, para crear experiencias que se disfrutan
              hoy.
            </p>
          </header>

          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <h3 className="h5 text-center section-title">Misión</h3>
              <div className="section-box">
                <p className="mb-0" style={{ color: "var(--muted)" }}>
                  Brindar una experiencia gastronómica auténtica en San José de
                  Maipo, elaborando cada plato con dedicación y respeto por
                  nuestras raíces, combinando la tradición culinaria con la
                  innovación, cuidando cada detalle en nuestras preparaciones y
                  ofreciendo un espacio acogedor donde la comida, la bebida y
                  el encuentro se convierten en momentos memorables.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <h3 className="h5 text-center section-title">Visión</h3>
              <div className="section-box">
                <p className="mb-0" style={{ color: "var(--muted)" }}>
                  Ser un referente gastronómico en la zona cordillerana,
                  reconocido por la calidad de nuestras preparaciones, el
                  respeto por la identidad local y la capacidad de innovar sin
                  perder la esencia, convirtiendo a Orígenes en un lugar donde
                  las personas se conecten con los sabores, la historia y el
                  origen de cada experiencia.
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
