import axios from 'axios';

const API_URL = 'http://localhost:5000/api/shipping';

export const getShippingOptions = async (address) => {
    const response = await axios.post(`${API_URL}/options`, { address });
    return response.data;
};

export const createShippingLabel = async (orderDetails) => {
    const response = await axios.post(`${API_URL}/create-label`, orderDetails);
    return response.data;
};

export const trackShipment = async (trackingNumber) => {
    const response = await axios.get(`${API_URL}/track/${trackingNumber}`);
    return response.data;
};