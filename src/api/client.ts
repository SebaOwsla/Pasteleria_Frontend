import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const isLoginRequest = config.url?.includes("/auth/login");
    if (token && config.headers && !isLoginRequest) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
