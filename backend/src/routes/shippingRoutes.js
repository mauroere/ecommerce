const express = require('express');
const shippingController = require('../controllers/shippingController');
const router = express.Router();

// Route to get shipping options
router.get('/options', shippingController.getShippingOptions);

// Route to create a shipping order
router.post('/create', shippingController.createShippingOrder);

// Route to track a shipping order
router.get('/track/:trackingNumber', shippingController.trackShippingOrder);

module.exports = router;