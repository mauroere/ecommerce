const express = require("express");
const {
  validateCreatePayment,
  createPayment,
  getPaymentStatus,
  initiatePayment,
  paymentSuccess,
  paymentFailure,
} = require("../controllers/paymentController");
const router = express.Router();

// Payment creation route with validation
router.post("/create", validateCreatePayment, createPayment);

// Route to get payment status
router.get("/status/:paymentId", getPaymentStatus);

// Placeholder routes
router.post("/initiate", initiatePayment);
router.get("/success", paymentSuccess);
router.get("/failure", paymentFailure);

module.exports = router;
