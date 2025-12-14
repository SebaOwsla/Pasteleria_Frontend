import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { api } from "../../api/client";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState<number | string>("");
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("tortaClasica");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;


    api
      .get(`/productos/${id}`)
      .then((res) => {
        const p = res.data;
        setNombre(p.nombre);
        setDescripcion(p.descripcion);
        setPrecio(p.precio);
        setImagen(p.imagen);
        setCategoria(p.categoria);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando producto:", err);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    const precioNumber = Number(precio);
    if (isNaN(precioNumber) || precioNumber <= 0) {
      alert("El precio debe ser mayor a 0");
      return;
    }

    try {
      await api.put(`/admin/productos/${id}`, {
        nombre,
        descripcion,
        precio: precioNumber,
        imagen,
        categoria,
      });

      alert("Producto actualizado correctamente");
      navigate("/admin/productos");
    } catch (err) {
      console.error("Error actualizando producto:", err);
      alert("No se pudo actualizar el producto");
    }
  };

  if (loading) {
    return (
      <div style={{ backgroundColor: "#ffc8a0", minHeight: "100vh" }}>
        <Navbar />
        <div className="container py-5">
          <h2 className="text-center">Editar producto</h2>
          <p className="text-center mt-3">Cargando datos...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#ffc8a0", minHeight: "100vh" }}>
      <Navbar />

      <div className="container py-4">
        <h2 className="mb-4">Editar producto</h2>

        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              className="form-control"
              rows={3}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Precio</label>
            <input
              type="number"
              className="form-control"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              min={5000}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">URL de imagen</label>
            <input
              className="form-control"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              placeholder="https://..."
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Categoría</label>
            <select
              className="form-select"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="tortaClasica">Torta clásica</option>
              <option value="tortaPersonalizada">Torta personalizada</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Guardar cambios
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default EditProduct;
