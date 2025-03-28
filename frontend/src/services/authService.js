import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Interceptor para agregar el token a las solicitudes
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('authToken');
    if (token) {
      console.log("Adding token to request headers:", token);
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("No token found in cookies");
    }
    config.headers["Content-Type"] = "application/json"; // Asegúrate de incluir este encabezado
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar errores globalmente
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || 'An error occurred';

    if (!status) {
      console.error("Network error:", error.message);
      return Promise.reject(new Error("Network error. Please check your connection."));
    }

    console.error(`Error ${status}:`, message);
    return Promise.reject(new Error(message));
  }
);

export const register = async (userData) => {
  try {
    console.log("Sending registration request with data:", userData);
    const response = await axiosInstance.post("/auth/register", userData);
    console.log("Registration successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in register function:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};

export const login = async (credentials) => {
  try {
    if (!credentials.email || !credentials.password) {
      throw new Error("Email and password are required.");
    }

    console.log("Sending login request with credentials:", credentials);
    const response = await axiosInstance.post("/auth/login", credentials);
    const { token } = response.data;
    if (!token) {
      throw new Error("Token not received from server");
    }
    Cookies.set('authToken', token, { expires: 7 });
    console.log("Token saved to cookies:", token);
    return response.data;
  } catch (error) {
    console.error("Error in login function:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const logout = () => {
  Cookies.remove('authToken');
};

export const getCurrentUser = async () => {
  try {
    const token = Cookies.get('authToken');
    if (!token) {
      throw new Error('No authentication token found. Please log in.');
    }

    const response = await axiosInstance.get("/auth/me");
    return response.data;
  } catch (error) {
    console.error('Error in getCurrentUser:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw new Error(error.response?.data?.message || 'Failed to fetch user');
  }
};

export default { register, login, logout, getCurrentUser };
