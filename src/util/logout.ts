export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("nombreCompleto");
  localStorage.removeItem("tipoUsuario");

  window.location.href = "/"; // o "/login"
};
