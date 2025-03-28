import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

// Function to log in a user
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    const { token } = response.data;

    // Save the token in cookies
    Cookies.set('authToken', token, { expires: 7 }); // Expires in 7 days

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

// Function to log out a user
export const logout = () => {
  // Remove the token from cookies
  Cookies.remove('authToken');
};

// Function to get the current user
export const getCurrentUser = async () => {
  try {
    const token = Cookies.get('authToken');
    if (!token) {
      throw new Error('No authentication token found. Please log in.');
    }

    const response = await axios.get(`${API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user:', error.response?.data || error.message);
    if (error.response?.status === 401) {
      throw new Error('Unauthorized. Please log in again.');
    }
    throw new Error(error.response?.data?.message || 'Failed to fetch user');
  }
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
