import axios from 'axios';

const API_URL = 'http://localhost:5000/api/payments'; // Adjust the URL as needed

export const createPayment = async (paymentData) => {
    try {
        const response = await axios.post(`${API_URL}/create`, paymentData);
        return response.data;
    } catch (error) {
        throw new Error('Payment creation failed: ' + error.message);
    }
};

export const getPaymentStatus = async (paymentId) => {
    try {
        const response = await axios.get(`${API_URL}/status/${paymentId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to retrieve payment status: ' + error.message);
    }
};