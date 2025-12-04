import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProductById } from "../api/product";
import { useCart, type Product as CartProduct } from "../contexts/CartContext";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const { addToCart, formatCLP } = useCart();

  useEffect(() => {
    if (!id) return;

    getProductById(Number(id))
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando producto:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-5">Cargando producto...</p>;
  if (!product) return <p className="text-center mt-5">Producto no encontrado.</p>;

  const decreaseQuantity = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((q) => q + 1);
  };

  const handleAddToCart = () => {

    const productForCart: CartProduct = {
      id: product.id,
      title: product.nombre,
      description: product.descripcion,
      category: product.categoria,
      price: product.precio,
      imageSrc: product.imagen,
    };

    for (let i = 0; i < quantity; i++) {
      addToCart(productForCart);
    }

    alert(`Se agregaron ${quantity} "${product.nombre}" al carrito ✅`);
  };

  return (
    <div style={{ backgroundColor: "#ffc8a0", minHeight: "100vh" }}>
      <Navbar />

      <div className="container mt-4 mb-5">
        <div className="row">

          <div className="col-md-6 mb-4">
            <img
              src={product.imagen}
              className="img-fluid rounded shadow"
              alt={product.nombre}
              style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
            />
          </div>


          <div className="col-md-6">
            <h2 className="mb-3">{product.nombre}</h2>
            <p className="text-muted mb-3">{product.descripcion}</p>

            <h4 className="fw-bold mb-4">{formatCLP(product.precio)}</h4>


            <div className="d-flex align-items-center mb-3">
              <span className="me-3 fw-bold">Cantidad:</span>
              <div className="input-group" style={{ width: "140px" }}>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  className="form-control text-center"
                  readOnly
                  min={1}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            </div>


            <button
              className="btn btn-dark btn-lg w-100 mt-3"
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
