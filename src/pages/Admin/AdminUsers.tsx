import { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { createUser, deleteUser, getUsers, updateUser } from "../../api/users";
import type { User } from "../../interfaces/User"; // ✅ usa SIEMPRE este User

type FormState = {
  id?: number;
  correo: string;
  nombre: string;
  apellido: string;
  tipoUsuario: User["tipoUsuario"]; // ✅ usa el tipo del interface
  password?: string;
};

const emptyForm: FormState = {
  correo: "",
  nombre: "",
  apellido: "",
  tipoUsuario: "USER",
  password: "",
};

const AdminUsers = () => {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [mode, setMode] = useState<"create" | "edit" | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleBack = () => {
    navigate("/admin");
  };

  const cargar = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsuarios(data ?? []);
    } catch (e) {
      console.error(e);
      alert("No se pudieron cargar los usuarios (¿token admin?).");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargar();
  }, []);

  const title = useMemo(() => {
    if (mode === "create") return "Crear usuario";
    if (mode === "edit") return "Editar usuario";
    return "Administrar usuarios";
  }, [mode]);

  const openCreate = () => {
    setForm(emptyForm);
    setMode("create");
  };

  const openEdit = (u: User) => {
    setForm({
      id: u.id,
      correo: u.correo,
      nombre: u.nombre,
      apellido: u.apellido,
      tipoUsuario: u.tipoUsuario,
      password: "",
    });
    setMode("edit");
  };

  const closeForm = () => {
    setMode(null);
    setForm(emptyForm);
  };

  const onChange = (k: keyof FormState, v: any) => {
    setForm((prev) => ({ ...prev, [k]: v }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.correo || !form.nombre || !form.apellido) {
      alert("Completa correo, nombre y apellido.");
      return;
    }

    try {
      if (mode === "create") {
        if (!form.password || form.password.trim().length < 4) {
          alert("La contraseña es obligatoria al crear (mínimo 4 caracteres).");
          return;
        }

        await createUser({
          correo: form.correo,
          nombre: form.nombre,
          apellido: form.apellido,
          tipoUsuario: form.tipoUsuario,
          password: form.password,
        });
      }

      if (mode === "edit" && form.id != null) {
        await updateUser(form.id, {
          correo: form.correo,
          nombre: form.nombre,
          apellido: form.apellido,
          tipoUsuario: form.tipoUsuario,
          ...(form.password && form.password.trim().length > 0
            ? { password: form.password }
            : {}),
        });
      }

      await cargar();
      closeForm();
    } catch (err) {
      console.error(err);
      alert("No se pudo guardar el usuario (revisa correo duplicado o permisos).");
    }
  };

  const onDelete = async (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar este usuario?")) return;
    try {
      await deleteUser(id);
      await cargar();
    } catch (err) {
      console.error(err);
      alert("No se pudo eliminar el usuario.");
    }
  };

  return (
    <div style={{ backgroundColor: "#ffc8a0", minHeight: "100vh" }}>
      <Navbar />

      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="m-0">{title}</h2>

          <div className="d-flex gap-2">
            <button className="btn btn-secondary" onClick={handleBack}>
              ⬅ Volver
            </button>

            <button className="btn btn-success" onClick={openCreate}>
              + Agregar usuario
            </button>

            <button className="btn btn-danger" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>

        {mode && (
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <form onSubmit={onSubmit} className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Correo</label>
                  <input
                    className="form-control"
                    value={form.correo}
                    onChange={(e) => onChange("correo", e.target.value)}
                    placeholder="correo@..."
                  />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Nombre</label>
                  <input
                    className="form-control"
                    value={form.nombre}
                    onChange={(e) => onChange("nombre", e.target.value)}
                  />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Apellido</label>
                  <input
                    className="form-control"
                    value={form.apellido}
                    onChange={(e) => onChange("apellido", e.target.value)}
                  />
                </div>

                <div className="col-md-2">
                  <label className="form-label">Rol</label>
                  <select
                    className="form-select"
                    value={form.tipoUsuario}
                    onChange={(e) => onChange("tipoUsuario", e.target.value)}
                  >
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label">
                    Contraseña {mode === "edit" ? "(opcional)" : "(obligatoria)"}
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    value={form.password || ""}
                    onChange={(e) => onChange("password", e.target.value)}
                    placeholder={
                      mode === "edit" ? "Dejar vacío para no cambiar" : "********"
                    }
                  />
                </div>

                <div className="col-12 d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={closeForm}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {loading ? (
          <p className="text-center mt-4">Cargando usuarios...</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle text-center">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Correo</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Rol</th>
                  <th style={{ width: "220px" }}>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.correo}</td>
                    <td>{u.nombre}</td>
                    <td>{u.apellido}</td>
                    <td>
                      <span
                        className={`badge ${u.tipoUsuario === "ADMIN" ? "bg-primary" : "bg-secondary"
                          }`}
                      >
                        {u.tipoUsuario}
                      </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() => openEdit(u)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => onDelete(u.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {usuarios.length === 0 && (
                  <tr>
                    <td colSpan={6}>No hay usuarios registrados.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AdminUsers;
