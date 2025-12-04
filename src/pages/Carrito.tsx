import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";


export const Carrito = () => {
  const { items, addToCart, removeOne, removeAll, clearCart, formatCLP } = useCart();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/productos"); // o "/products", según tu ruta
  };

  const totalAmount = items.reduce(
    (acum, producto) => acum + producto.price * producto.qty,
    0
  );

  // AQUÍ VA EL RETURN CORREGIDO
  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <main className="container py-4">
          <h1 className="h3">Carrito</h1>
          <p className="text-secondary">Tu carrito está vacío.</p>
        </main>
        <Footer />
      </>
    );
  }

  // El resto del código cuando SÍ hay items
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <header className="d-flex align-items-center justify-content-between mb-3">
          <h1 className="h3">Carrito</h1>
          <button className="btn btn-danger btn-md" onClick={clearCart}>
            Vaciar carrito
          </button>
        </header>

        <section className="row g-3">
          <div className="col-12 col-lg-8">
            <ul className="list-group">
              {items.map((it) => {
                const subtotal = it.price * it.qty;
                return (
                  <li
                    key={it.id}
                    className="list-group-item d-flex align-items-center justify-content-between"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={it.imageSrc}
                        alt={it.title}
                        width={64}
                        height={64}
                        className="object-fit-contain"
                      />
                      <div>
                        <h6 className="mb-1">{it.title}</h6>
                        <small className="text-secondary">
                          {formatCLP(it.price)} c/u
                        </small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => removeOne(it.id)}
                      >
                        -
                      </button>
                      <span className="px-2">{it.qty}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => addToCart(it)}
                      >
                        +
                      </button>
                    </div>

                    <div className="text-end" style={{ minWidth: 120 }}>
                      <div className="fw-bold">{formatCLP(subtotal)}</div>
                      <button
                        className="btn btn-link text-danger p-0 small"
                        onClick={() => removeAll(it.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <aside className="col-12 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resumen</h5>
                <div className="d-flex justify-content-between">
                  <span>Total</span>
                  <span className="fw-bold">{formatCLP(totalAmount)}</span>
                </div>
                <hr />
                <div className="d-grid gap-2">
                  <button className="btn btn-success">
                    Proceder al pago
                  </button>
                  <button className="btn btn-primary" onClick={goBack}>
                    Seguir comprando
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Carrito;