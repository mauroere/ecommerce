const express = require("express");
const router = express.Router();
const {
  initiatePayment,
  paymentSuccess,
  paymentFailure,
  createPayment,
  validateCreatePayment,
} = require("../controllers/paymentController");

// Route to initiate payment
router.post("/initiate", initiatePayment);

// Route to handle payment success
router.get("/success", paymentSuccess);

// Route to handle payment failure
router.get("/failure", paymentFailure);

//Crear ruta de método de pago
router.post("/create", validateCreatePayment, createPayment);

module.exports = router;
