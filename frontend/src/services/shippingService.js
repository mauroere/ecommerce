import axios from 'axios';

const API_URL = 'http://localhost:5000/api/shipping'; // Adjust the URL according to your backend setup

export const getShippingOptions = async (address) => {
    try {
        const response = await axios.post(`${API_URL}/options`, { address });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching shipping options');
    }
};

export const createShippingLabel = async (orderDetails) => {
    try {
        const response = await axios.post(`${API_URL}/create-label`, orderDetails);
        return response.data;
    } catch (error) {
        throw new Error('Error creating shipping label');
    }
};

export const trackShipment = async (trackingNumber) => {
    try {
        const response = await axios.get(`${API_URL}/track/${trackingNumber}`);
        return response.data;
    } catch (error) {
        throw new Error('Error tracking shipment');
    }
};