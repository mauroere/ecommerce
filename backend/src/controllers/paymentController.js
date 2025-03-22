const Payment = require('../models/Order'); // Assuming Order model is used for payment processing
const axios = require('axios');

const MERCADOPAGO_URL = 'https://api.mercadopago.com/v1/payments';
const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN; // Set your MercadoPago access token in environment variables

exports.createPayment = async (req, res) => {
    const { items, payer } = req.body;

    const paymentData = {
        transaction_amount: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
        description: 'Purchase from E-commerce Platform',
        payer: {
            email: payer.email,
        },
        items: items.map(item => ({
            title: item.title,
            quantity: item.quantity,
            currency_id: 'ARS',
            unit_price: item.price,
        })),
        payment_method_id: 'visa', // Example payment method
    };

    try {
        const response = await axios.post(MERCADOPAGO_URL, paymentData, {
            headers: {
                Authorization: `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });

        const payment = new Payment({
            items,
            payer,
            paymentId: response.data.id,
            status: response.data.status,
        });

        await payment.save();

        res.status(200).json({ payment: response.data });
    } catch (error) {
        console.error('Payment processing error:', error);
        res.status(500).json({ error: 'Payment processing failed' });
    }
};

exports.getPaymentStatus = async (req, res) => {
    const { paymentId } = req.params;

    try {
        const response = await axios.get(`${MERCADOPAGO_URL}/${paymentId}`, {
            headers: {
                Authorization: `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
            },
        });

        res.status(200).json({ payment: response.data });
    } catch (error) {
        console.error('Error fetching payment status:', error);
        res.status(500).json({ error: 'Failed to fetch payment status' });
    }
};