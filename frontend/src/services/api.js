import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:5000/api'; // Ensure this matches the backend URL

// Set up axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
      'Content-Type': 'application/json',
  },
});

// Interceptor to add JWT token to requests
api.interceptors.request.use((config) => {
  const token = Cookies.get('authToken'); // Retrieve token from cookies
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Function to get products
export const getProducts = async () => {
  try {
      const response = await api.get('/products');
      return response.data;
  } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch products');
  }
};

// Function to get a single product by ID
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

// Function to create an order
export const createOrder = async (orderData) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

// Function to get shipping options
export const getShippingOptions = async () => {
  const response = await api.get('/shipping/options');
  return response.data;
};

// Function to handle payment
export const processPayment = async (paymentData) => {
  const response = await api.post('/payment', paymentData);
  return response.data;
};

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export default api;