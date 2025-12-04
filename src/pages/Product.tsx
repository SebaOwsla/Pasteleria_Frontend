import { useEffect, useState } from "react";
import { getProducts } from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export const Product = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando productos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-5">Cargando productos...</p>;
  if (products.length === 0)
    return <p className="text-center mt-5">No hay productos disponibles.</p>;

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.categoria === category);

  return (
    <div style={{ backgroundColor: "#ffc8a0", minHeight: "100vh" }}>
      <Navbar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">Nuestros Productos</h2>

        <div className="d-flex justify-content-center mb-3 gap-3">
          <button
            className="btn btn-outline-dark"
            onClick={() => setCategory("all")}
          >
            Todos
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => setCategory("tortaPersonalizada")}
          >
            Personalizadas
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => setCategory("tortaClasica")}
          >
            Clásicas
          </button>
        </div>


        <div className="row">
          {filtered.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.imagen}
                  className="card-img-top"
                  alt={product.nombre}
                  style={{
                    objectFit: "cover",
                    height: "250px",
                    borderRadius: "8px",
                  }}
                />


                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.nombre}</h5>

                  <p className="card-text flex-grow-1">
                    {product.descripcion}
                  </p>


                  <div className="mt-auto">
                    <p className="fw-bold mb-2">$ {product.precio}</p>

                    <Link
                      to={`/productos/${product.id}`}
                      className="btn btn-dark w-100"
                    >
                      Ver Detalle
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
