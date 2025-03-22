const axios = require('axios');

const CORREO_ARGENTINO_API_URL = 'https://api.correoargentino.com.ar/v1/';
const ANDREANI_API_URL = 'https://api.andreani.com/v1/';

const getShippingOptions = async (req, res) => {
    const { origin, destination, weight, dimensions } = req.body;

    try {
        const correoOptions = await axios.post(`${CORREO_ARGENTINO_API_URL}shipping-options`, {
            origin,
            destination,
            weight,
            dimensions
        });

        const andreaniOptions = await axios.post(`${ANDREANI_API_URL}shipping-options`, {
            origin,
            destination,
            weight,
            dimensions
        });

        res.status(200).json({
            correo: correoOptions.data,
            andreani: andreaniOptions.data
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching shipping options', error: error.message });
    }
};

const createShippingLabel = async (req, res) => {
    const { shippingProvider, shipmentDetails } = req.body;

    try {
        let response;

        if (shippingProvider === 'correo') {
            response = await axios.post(`${CORREO_ARGENTINO_API_URL}create-label`, shipmentDetails);
        } else if (shippingProvider === 'andreani') {
            response = await axios.post(`${ANDREANI_API_URL}create-label`, shipmentDetails);
        } else {
            return res.status(400).json({ message: 'Invalid shipping provider' });
        }

        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error creating shipping label', error: error.message });
    }
};

module.exports = {
    getShippingOptions,
    createShippingLabel
};