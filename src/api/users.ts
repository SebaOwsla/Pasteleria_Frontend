import type { User } from "../interfaces/User";
import { api } from "./client";

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get<User[]>("/admin/usuarios");
  return res.data;
};

export const createUser = async (payload: Partial<User> & { password: string }) => {
  const res = await api.post("/admin/usuarios", payload);
  return res.data;
};

export const updateUser = async (id: number, payload: Partial<User> & { password?: string }) => {
  const res = await api.put(`/admin/usuarios/${id}`, payload);
  return res.data;
};

export const deleteUser = async (id: number) => {
  await api.delete(`/admin/usuarios/${id}`);
};
