import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Admin = () => {
  return (
    <div style={{ backgroundColor: "#ffc8a0", minHeight: "100vh" }}>
      <Navbar />

      <main className="container py-5">
        <h2 className="mb-4 text-center">Perfil Admin</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-3">Gestión de tortas</h4>
                <p className="card-text">
                  Desde aquí puedes agregar, editar y eliminar tortas de la tienda.
                </p>
                <Link
                  to="/admin/productos"
                  className="btn btn-dark w-100"
                >
                  Ir a gestión de tortas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
