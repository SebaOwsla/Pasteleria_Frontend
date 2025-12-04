import { api } from "./client";

export const getProducts = async () => {
  const response = await api.get("/productos");
  return response.data;
};

export const getProductById = async (id: number) => {
  const response = await api.get(`/productos/${id}`);
  return response.data;
};
