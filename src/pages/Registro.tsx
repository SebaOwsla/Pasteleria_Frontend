import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { api } from "../api/client";

type FormValues = {
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  password2: string;
  telefono: string;
  fechaNacimiento: string;
  region: string;
  comuna: string;
  tipoUsuario: string;
};

export const Registro: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const password = watch("password");

  const validarEdad = (fecha: string) => {
    const cumpleaños = new Date(fecha);
    const hoy = new Date();

    const edad =
      hoy.getFullYear() -
      cumpleaños.getFullYear() -
      (hoy < new Date(hoy.getFullYear(), cumpleaños.getMonth(), cumpleaños.getDate()) ? 1 : 0);

    return edad >= 18 || "Debes ser mayor de edad (+18)";
  };

  const onSubmit = async (data: FormValues) => {
    const payload = {
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.correo,
      password: data.password,
      fechaNacimiento: data.fechaNacimiento,
      tipoUsuario: data.tipoUsuario,
      telefono: data.telefono,
      region: data.region,
      comuna: data.comuna,
    };

    try {
      const res = await api.post("/usuarios", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 201 || res.status === 200) {
        alert("Registro exitoso. Bienvenido: " + res.data.nombre);
      } else {
        alert("Respuesta inesperada del servidor: " + res.status);
      }
    } catch (err: any) {
      console.error("Error en registro:", err);
      const serverMessage =
        err.response?.data?.error ||
        err.response?.data?.message ||
        JSON.stringify(err.response?.data) ||
        err.message;
      alert("Error al registrar usuario: " + serverMessage);
    }
  };

  return (
    <div style={{ backgroundColor: "#ffc8a0", minHeight: "100vh" }}>
      <Navbar />

      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                padding: "30px",
              }}
            >
              <h2 className="text-center mb-4">Registro de usuarios</h2>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mb-3">
                  <label className="form-label">Nombres</label>
                  <input
                    className="form-control"
                    {...register("nombre", {
                      required: "El nombre es obligatorio",
                      minLength: { value: 3, message: "Debe tener mínimo 3 letras" },
                      pattern: { value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/, message: "Solo letras" },
                    })}
                  />
                  {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Apellidos</label>
                  <input
                    className="form-control"
                    {...register("apellido", {
                      required: "El apellido es obligatorio",
                      minLength: { value: 3, message: "Debe tener mínimo 3 letras" },
                      pattern: { value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/, message: "Solo letras" },
                    })}
                  />
                  {errors.apellido && <p className="text-danger">{errors.apellido.message}</p>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Fecha de nacimiento</label>
                  <input
                    type="date"
                    className="form-control"
                    {...register("fechaNacimiento", {
                      required: "La fecha es obligatoria",
                      validate: validarEdad,
                    })}
                  />
                  {errors.fechaNacimiento && (
                    <p className="text-danger">{errors.fechaNacimiento.message}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo permitido</label>
                  <input
                    type="email"
                    className="form-control"
                    {...register("correo", {
                      required: "El correo es obligatorio",
                      pattern: {
                        value: /^[A-Za-z0-9._%+-]+@(duoc\.cl|profesorduoc\.cl|gmail\.com|admin\.cl)$/,
                        message: "Correo válido: @duoc.cl / @profesorduoc.cl / @gmail.com / @admin\.cl",
                      },
                    })}
                  />
                  {errors.correo && <p className="text-danger">{errors.correo.message}</p>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Tipo de usuario</label>
                  <select
                    className="form-select"
                    {...register("tipoUsuario", {
                      required: "Seleccione el tipo de usuario",
                    })}
                  >
                    <option value="">Seleccione un tipo...</option>
                    <option value="USER">Usuario</option>
                    <option value="ADMIN">Administrador</option>
                  </select>
                  {errors.tipoUsuario && (
                    <p className="text-danger">{errors.tipoUsuario.message}</p>
                  )}
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      {...register("password", {
                        required: "La contraseña es obligatoria",
                        minLength: { value: 8, message: "Mínimo 8 caracteres" },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
                          message: "Debe incluir mayúscula, minúscula, número y símbolo",
                        },
                      })}
                    />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Repetir contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      {...register("password2", {
                        required: "Debe repetir la contraseña",
                        validate: (value) => value === password || "Las contraseñas no coinciden",
                      })}
                    />
                    {errors.password2 && <p className="text-danger">{errors.password2.message}</p>}
                  </div>
                </div>

                <div className="mb-3 mt-3">
                  <label className="form-label">Teléfono</label>
                  <input
                    className="form-control"
                    placeholder="+56912345678"
                    {...register("telefono", {
                      required: "El teléfono es obligatorio",
                      pattern: {
                        value: /^\+569\d{8}$/,
                        message: "Formato válido: +569XXXXXXXX",
                      },
                    })}
                  />
                  {errors.telefono && <p className="text-danger">{errors.telefono.message}</p>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Región</label>
                  <select
                    className="form-select"
                    {...register("region", { required: "Seleccione una región" })}
                  >
                    <option value="">Selecciona tu región…</option>
                    <option value="RM">Región Metropolitana</option>
                    <option value="V">Valparaíso</option>
                    <option value="VIII">Biobío</option>
                  </select>
                  {errors.region && <p className="text-danger">{errors.region.message}</p>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Comuna</label>
                  <select
                    className="form-select"
                    {...register("comuna", { required: "Seleccione una comuna" })}
                  >
                    <option value="">Selecciona tu comuna…</option>
                    <option value="Santiago">Santiago</option>
                    <option value="Ñuñoa">Ñuñoa</option>
                    <option value="Providencia">Providencia</option>
                  </select>
                  {errors.comuna && <p className="text-danger">{errors.comuna.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Crear cuenta
                </button>
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
