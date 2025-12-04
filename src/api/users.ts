import type { User } from "../interfaces/User";
import { api } from "./client";

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get<User[]>("/usuarios");
  return res.data;
};

