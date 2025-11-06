import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "../assets/styles.css";
import Navbar from "../components/Navbar";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const pid = Number(id);
  const product = products.find((p) => p.id === pid);
  const { addToCart, formatCLP } = useCart();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!product) {
    return <p className="text-center mt-5">Producto no encontrado</p>;
  }

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart;
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) addToCart;
    navigate("/carrito"); // o a la página de pago
  };

  const goBack = () => {
    navigate("/productos");
  };

  return (
    <>
      <Navbar />
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="text-center">
              <img
                src={product.imageSrc}
                alt={product.name}
                className="img-fluid rounded shadow"
                style={{
                  maxWidth: "100%",
                  height: "600px",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="product-info">
              <h1 className="titulo_producto">{product.name}</h1>
              <div className="description mb-4">
                <h3 className="fw-bold">Descripción</h3>
                <p className="texto-descripcion">{product.description}</p>
              </div>

              <div className="price-section mb-4">
                <h2 className="text-primary fw-bold d-flex justify-content-end mb-0">
                  {formatCLP(product.price)}
                </h2>
                <small className="text-muted d-flex justify-content-end">
                  Precio por unidad
                </small>
              </div>

              <div className="quantity-section mb-4 d-flex justify-content-end align-items-center">
                <label
                  htmlFor="cantidad"
                  className="form-label fw-bold me-3"
                >
                  Cantidad:
                </label>
                <div className="input-group" style={{ width: "150px" }}>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="form-control text-center"
                    id="cantidad"
                    value={quantity}
                    min="1"
                    readOnly
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-success btn-lg" onClick={goBack}>
                  <i className="bi bi-arrow-left me-2"></i>Volver
                </button>

                <div className="d-flex gap-3">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={handleAddToCart}
                  >
                    <i className="bi bi-cart-plus me-2"></i>Agregar al carrito
                  </button>
                  <button
                    className="btn btn-success btn-lg"
                    onClick={handleBuyNow}
                  >
                    <i className="bi bi-credit-card me-2"></i>Comprar ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;