import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles.css"; // opcional si tienes estilos globales
import Navbar from "../components/Navbar";
export default function Login() {
  const navigate = useNavigate();
                   

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState<"success" | "danger" | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.endsWith("@duoc.cl")) {
      setAlertType("danger");
      setAlertMsg("El correo debe terminar en @duoc.cl");
      return;
    }

    if (password.trim().length < 4) {
      setAlertType("danger");
      setAlertMsg("La contraseña es incorrecta.");
      return;
    }

    // Simula login correcto
    setAlertType("success");
    setAlertMsg("Inicio de sesión exitoso ✅");

    setTimeout(() => {
      navigate("/"); // redirige a inicio
    }, 1200);
  };

  return (
    <div style={{ backgroundColor: "#ffc8a0", minHeight: "100vh" }}>
        <Navbar />
      <div
        style={{
          width: "100%",
          padding: "0px",
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "#ffc8a0",
          top: 0,
          left: 0,
        }}
      >
      </div>

      <main className="container py-5">
          
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="text-center mb-4">
              <h1 className="fw-bold">Pasteleria</h1>
              <h2 className="fw-bold">Mil Sabores</h2>
              <p className="text-muted mb-0">Iniciar Sesión</p>
            </div>

            <div
              className="card shadow-sm border-0 rounded-4"
              style={{ backgroundColor: "#310701d0" }}
            >
              <div className="card-body p-4">
                {alertMsg && (
                  <div className={`alert alert-${alertType}`} role="alert">
                    {alertMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="loginCorreo" className="form-label">
                      Correo@duoc.cl
                    </label>
                    <input
                      id="loginCorreo"
                      className="form-control"
                      type="email"
                      placeholder="usuario@duoc.cl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="loginPass" className="form-label">
                      Contraseña
                    </label>
                    <input
                      id="loginPass"
                      className="form-control"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-grid gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn"
                      style={{ backgroundColor: "#E98B47", color: "#000" }}
                    >
                      Ingresar
                    </button>

                    <Link
                      to="/register"
                      className="btn"
                      style={{ backgroundColor: "#F4A261", color: "#2F2F2F" }}
                    >
                      Crear una cuenta
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
