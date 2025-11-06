 import { Link } from "react-router-dom";
import { Product } from "../data/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="card h-100 shadow-sm">

      <div className="card-img-container" style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={product.imageSrc}
          alt={product.name}
          className="card-img-top"
          style={{ objectFit: "cover", height: "100%" }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-truncate">{product.name}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>

        <div className="mt-auto pt-3">
          <p className="card-price fs-5 fw-bold mb-3">
            Precio: ${product.price}
          </p>

          <div className="d-grid gap-2">
            <Link className="btn btn-dark" to={`/products/${product.id}`}>
              Ver detalle
            </Link>

            <button className="btn btn-primary"> to={`/carrito/${product.id}`}
              Agregar al carrito
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}