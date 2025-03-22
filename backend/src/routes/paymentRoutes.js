const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Route to initiate payment
router.post('/initiate', paymentController.initiatePayment);

// Route to handle payment success
router.get('/success', paymentController.paymentSuccess);

// Route to handle payment failure
router.get('/failure', paymentController.paymentFailure);

module.exports = router;