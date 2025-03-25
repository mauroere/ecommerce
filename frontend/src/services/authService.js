import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust the URL as needed

const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};
const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    if (response.data.token) {
        Cookies.set('token', response.data.token, { secure: true, sameSite: 'Strict' });
    }
    return response.data;
};

const logout = () => {
    Cookies.remove('token');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const isAuthenticated = () => {
    const user = getCurrentUser();
    return user && user.token ? true : false;
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
    isAuthenticated,
};