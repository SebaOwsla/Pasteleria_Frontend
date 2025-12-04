import { useEffect, useState } from "react";
import { api } from "../../api/client";

export const AdminUsers = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api.get("/usuarios").then((res) => setUsuarios(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Administrar Usuarios</h2>

      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Correo</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Tipo Usuario</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((u: any) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.correo}</td>
              <td>{u.nombre}</td>
              <td>{u.apellido}</td>
              <td>{u.tipoUsuario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminUsers;