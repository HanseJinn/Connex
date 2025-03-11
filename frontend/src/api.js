import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};
