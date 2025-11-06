import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Registro: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    password2: "",
    telefono: "",
    region: "",
    comuna: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulario enviado correctamente ✅");
  };

  return (
    <div
      style={{
        backgroundColor: "#ffc8a0",
        minHeight: "100vh",
      }}
    >

      <Navbar />

      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-4">
              <h1
                className="fw-bold"
                style={{
                  color: "white",
                  fontSize: "2rem",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                }}
              >
                Pastelería Mil Sabores
              </h1>
              <p
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  opacity: "0.9",
                }}
              >
                Registro de usuarios
              </p>
            </div>


            <div
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                padding: "30px",
              }}
            >
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label" htmlFor="nombre">
                    Nombres
                  </label>
                  <input
                    id="nombre"
                    className="form-control"
                    type="text"
                    placeholder="Ej: Juan Ignacio"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="apellido">
                    Apellidos
                  </label>
                  <input
                    id="apellido"
                    className="form-control"
                    type="text"
                    placeholder="Ej: Orellana Pérez"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="correo">
                    Correo @duoc.cl || @profesorduoc.cl
                  </label>
                  <input
                    id="correo"
                    className="form-control"
                    type="email"
                    placeholder="usuario@duoc.cl"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="password">
                      Contraseña
                    </label>
                    <input
                      id="password"
                      className="form-control"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <div className="form-text">

                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="password2">
                      Repetir contraseña
                    </label>
                    <input
                      id="password2"
                      className="form-control"
                      type="password"
                      placeholder=" Mín. 8, con mayúscula, minúscula, número y símbolo."
                      value={formData.password2}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3 mt-3">
                  <label className="form-label" htmlFor="telefono">
                    Teléfono (opcional)
                  </label>
                  <input
                    id="telefono"
                    className="form-control"
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="region">
                    Región
                  </label>
                  <select
                    id="region"
                    className="form-select"
                    value={formData.region}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona tu región…</option>
                    <option value="RM">Región Metropolitana</option>
                    <option value="V">Valparaíso</option>
                    <option value="VIII">Biobío</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="comuna">
                    Comuna
                  </label>
                  <select
                    id="comuna"
                    className="form-select"
                    value={formData.comuna}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona tu comuna…</option>
                    <option value="Santiago">Santiago</option>
                    <option value="Ñuñoa">Ñuñoa</option>
                    <option value="Providencia">Providencia</option>
                  </select>
                </div>


                <div className="d-grid gap-2 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{
                      backgroundColor: "#573c3896",
                      border: "none",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "8px",
                    }}
                  >
                    Crear cuenta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Registro;
