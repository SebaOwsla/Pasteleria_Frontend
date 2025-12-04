import { api } from "../api/client";
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
}
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/productos");
  return response.data;
};
export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get<Product>(`/productos/${id}`);
  return response.data;
};
