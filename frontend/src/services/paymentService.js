import axios from 'axios';

const API_URL = 'http://localhost:5000/api/payments';

export const createPayment = async (paymentData) => {
    const response = await axios.post(`${API_URL}/create`, paymentData);
    return response.data;
};

export const getPaymentStatus = async (paymentId) => {
    const response = await axios.get(`${API_URL}/status/${paymentId}`);
    return response.data;
};