import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles.css";
import Navbar from "../components/Navbar";
import { api } from "../api/client";
import { getUserRole } from "../util/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState<"success" | "danger" | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setAlertMsg("");
    setAlertType("");

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

    try {
      const response = await api.post("/auth/login", {
        correo: email,
        password,
      });


      localStorage.setItem("token", response.data.token);
  

      setAlertType("success");
      setAlertMsg("Inicio de sesión exitoso ");

      setTimeout(() => {
        const role = getUserRole();
        const upperRole = role ? role.toUpperCase() : "";

        if (upperRole === "ADMIN") {

          navigate("/admin");
        } else {

          navigate("/");
        }
      }, 800);
    } catch (error: any) {
      console.error("Error en login:", error);

      setAlertType("danger");
      setAlertMsg(
        error?.response?.data?.message ||
        error?.response?.data?.mensaje ||
        "Credenciales inválidas o error en el servidor."
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Iniciar sesión</h2>

        {alertMsg && (
          <div
            className={`alert alert-${alertType === "" ? "info" : alertType
              } text-center`}
          >
            {alertMsg}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo institucional
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@duoc.cl"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>

          <p className="text-center mt-3">
            ¿No tienes cuenta?{" "}
            <Link to="/registro" className="text-decoration-none">
              Regístrate aquí
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
