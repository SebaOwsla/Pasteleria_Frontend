import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';




<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
export const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#ffc8a0" }}>
      <Navbar />

      <section id="productos" className="p-4" style={{ backgroundColor: "#ffc8a0" }}>
        <div className="container my-5 p-5 rounded-3" style={{ backgroundColor: "#5d4037e0" }}>
          <h1 className="text-center text-white mb-5">Productos Destacados</h1>


          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">

            {[
              {
                titulo: "Torta Selva Negra",
                img: "https://www.paulinacocina.net/wp-content/uploads/2022/04/selva-negra-receta-1.jpg",
                descripcion:
                  "Bizcocho de chocolate, crema chantilly y cerezas. Una combinación perfecta de dulzura y textura.",
              },
              {
                titulo: "Torta Panqueque Naranja",
                img: "https://www.lomismoperosano.cl/wp-content/uploads/2022/01/receta-torta-panqueque-naranja.jpg",
                descripcion:
                  "Ligera y esponjosa, con un fresco sabor cítrico y glaseado de naranja que realza su aroma.",
              },
              {
                titulo: "Torta Tres Leches",
                img: "https://wattsindustrial.cl/wp-content/uploads/2023/03/tortatresleches-min.jpeg",
                descripcion:
                  "Empapada en la mezcla perfecta de leche evaporada, condensada y crema. Suave y húmeda en cada bocado.",
              },
              {
                titulo: "Torta de Chocolate",
                img: "https://www.recetasnestle.com.ve/sites/default/files/srh_recipes/e2928ff551a360cdadb4e5a2528841b7.jpg",
                descripcion:
                  "Intensa y cremosa, con capas de bizcocho húmedo y cobertura de ganache de chocolate.",
              },
              {
                titulo: "Torta de Frutilla",
                img: "https://i.ytimg.com/vi/q_QK8YNrSLY/maxresdefault.jpg",
                descripcion:
                  "Refrescante mezcla de crema y frutillas naturales en una base de bizcocho suave.",
              },
              {
                titulo: "Torta Mil Hojas",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalqv-ALvURS8aYM7a6_vJPXJTgBbyhhk-og&s",
                descripcion:
                  "Crujiente y dulce, con finas capas de masa y manjar artesanal.",
              },
            ].map((producto) => (
              <div key={producto.titulo} className="col d-flex justify-content-center">
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
                    src={producto.img}
                    className="card-img-top"
                    height={200}
                    alt={producto.titulo}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{producto.titulo}</h5>
                    <p className="card-text flex-grow-1">{producto.descripcion}</p>
                    <a href="/productos" className="btn btn-dark mt-auto">
                      Saber más
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* MISIÓN Y VISIÓN */}
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
                  Ofrecer una experiencia dulce y memorable, proporcionando productos de repostería de alta calidad,
                  celebrando nuestras raíces y fomentando la creatividad.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <h3 className="h5 text-center">Visión</h3>
              <div className="p-3 rounded-3" style={{ backgroundColor: "#5D4037" }}>
                <p className="mb-0 text-light">
                  Convertirnos en la tienda online líder de repostería en Chile, destacando por innovación, calidad e
                  impacto positivo en la comunidad gastronómica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default Home;
