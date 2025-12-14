import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "#ffc8a0", minHeight: "100vh" }}>
      <Navbar />

      <main className="container py-5">
        <h2 className="mb-4 text-center">Perfil Admin</h2>


        <div className="row justify-content-center g-4">

          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h4 className="card-title mb-3">Gestión de tortas</h4>
                <p className="card-text">
                  Desde aquí puedes agregar, editar y eliminar tortas de la tienda.
                </p>
                <Link
                  to="/admin/productos"
                  className="btn btn-dark mt-auto w-100"
                >
                  Ir a gestión de tortas
                </Link>
              </div>
            </div>
          </div>


          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h4 className="card-title mb-3">Gestión de usuarios</h4>
                <p className="card-text">
                  Desde aquí puedes ver y administrar los usuarios registrados.
                </p>
                <Link
                  to="/admin/usuarios"
                  className="btn btn-dark mt-auto w-100"
                >
                  Ir a gestión de usuarios
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <button
              className="btn btn-danger w-100"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Admin;
