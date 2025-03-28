const Payment = require("../models/Order"); // Assuming Order model is used for payment processing
const axios = require("axios");
const { body, validationResult } = require("express-validator");

const MERCADOPAGO_URL = "https://api.mercadopago.com/v1/payments";
const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN; // Set your MercadoPago access token in environment variables

// Create a payment
const createPayment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { items, payer } = req.body;

  try {
    const paymentData = {
      transaction_amount: items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
      description: "Purchase from E-commerce Platform",
      payer: { email: payer.email },
      items: items.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        currency_id: "ARS",
        unit_price: item.price,
      })),
      payment_method_id: "visa",
    };

    const response = await axios.post(MERCADOPAGO_URL, paymentData, {
      headers: {
        Authorization: `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
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
    res.status(500).json({
      error: "Payment processing failed",
      details: error.response?.data || error.message,
    });
  }
};

// Get payment status
const getPaymentStatus = async (req, res) => {
  const { paymentId } = req.params;

  try {
    const response = await axios.get(`${MERCADOPAGO_URL}/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
      },
    });

    res.status(200).json({ payment: response.data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch payment status" });
  }
};

// Validation middleware for creating a payment
const validateCreatePayment = [
  body("items")
    .isArray({ min: 1 })
    .withMessage("Items must be an array with at least one item"),
  body("payer.email").isEmail().withMessage("Payer email is invalid"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Placeholder functions for unimplemented routes
const initiatePayment = (req, res) => res.status(501).json({ message: "Not implemented" });
const paymentSuccess = (req, res) => res.status(501).json({ message: "Not implemented" });
const paymentFailure = (req, res) => res.status(501).json({ message: "Not implemented" });

module.exports = {
  createPayment,
  getPaymentStatus,
  validateCreatePayment,
  initiatePayment,
  paymentSuccess,
  paymentFailure,
};
