import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { api } from "../../api/client";

type AdminProduct = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
};

const AdminProducts = () => {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleBack = () => {
    navigate("/admin");
  };

  const cargarProductos = () => {
    setLoading(true);
    api
      .get("/admin/productos")
      .then((res) => {
        setProducts(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando productos admin:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const eliminarProducto = async (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar este producto?")) return;

    try {
      await api.delete(`/admin/productos/${id}`);
      cargarProductos();
    } catch (err) {
      console.error("Error eliminando producto:", err);
      alert("No se pudo eliminar el producto.");
    }
  };

  if (loading) {
    return (
      <div style={{ backgroundColor: "#ffc8a0", minHeight: "100vh" }}>
        <Navbar />
        <div className="container py-5">
          <h2 className="text-center">Gestión de tortas</h2>
          <p className="text-center mt-3">Cargando productos...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#ffc8a0", minHeight: "100vh" }}>
      <Navbar />

      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Gestión de tortas</h2>

          <div className="d-flex gap-2">
            <button
              className="btn btn-secondary"
              onClick={handleBack}
            >
              ⬅ Volver
            </button>

            <Link
              to="/admin/productos/nuevo"
              className="btn btn-success"
            >
              + Agregar torta
            </Link>

            <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        </div>


        {products.length === 0 ? (
          <p>No hay productos cargados.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th style={{ width: "220px" }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>
                      <img
                        src={p.imagen}
                        alt={p.nombre}
                        style={{
                          width: "80px",
                          height: "60px",
                          objectFit: "cover",
                          borderRadius: "4px",
                        }}
                      />
                    </td>
                    <td>{p.nombre}</td>
                    <td>{p.categoria}</td>
                    <td>${p.precio}</td>
                    <td>
                      <div className="btn-group">
                        <Link
                          to={`/admin/productos/editar/${p.id}`}
                          className="btn btn-sm btn-primary"
                        >
                          Editar
                        </Link>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => eliminarProducto(p.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AdminProducts;
