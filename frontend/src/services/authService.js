import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:5000/api/auth";

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  if (response.data.token) {
    Cookies.set("token", response.data.token, {
      secure: true,
      sameSite: "Strict",
    });
  }
  return response.data;
};

const logout = () => {
  Cookies.remove("token", { secure: true, sameSite: "Strict" });
};

const getCurrentUser = () => {
  const token = Cookies.get("token");
  if (!token) return null;
  // Decode token or fetch user info from the server if needed
  return { token };
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
