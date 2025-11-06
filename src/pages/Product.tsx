import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import "../assets/styles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../contexts/CartContext"; // ✅ conexión con el contexto

export const Products = () => {
  const { addToCart, formatCLP } = useCart();
  const categories = ["all", ...new Set(products.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h1 className="titulo text-center mb-4">Nuestros Productos</h1>

        <div className="d-flex justify-content-center mb-5">
          <div className="categoria d-flex align-items-center">
            <label htmlFor="category" className="texto-categoria me-3">
              Categoría
            </label>
            <select
              name="category"
              id="category"
              className="form-select form-select-sm w-auto"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "Todos los productos" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row g-4">
          {filteredProducts.map((p) => (
            <div key={p.id} className="col-lg-4 col-md-6 col-12">
              <div className="card h-100 shadow-sm">
                <div
                  className="card-img-container"
                  style={{ height: "200px", overflow: "hidden" }}
                >
                  <img
                    src={p.imageSrc}
                    className="card-img-top"
                    alt={p.name}
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-truncate">{p.name}</h5>
                  <p className="card-text flex-grow-1">{p.description}</p>

                  <div className="mt-auto pt-3">
                    <p className="card-price fs-5 fw-bold mb-3">
                      Precio: {formatCLP(p.price)}
                    </p>

                    <div className="d-grid gap-2">
                      <Link className="btn btn-dark" to={`/products/${p.id}`}>
                        Ver detalle
                      </Link>

                      {/* ✅ Ahora este botón agrega al carrito */}
                      <button
                          className="btn btn-primary btn-sm"
                          onClick={() => addToCart({ ...p, title: p.name })}
                        >
                          Agregar al carrito
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;