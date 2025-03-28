const express = require("express");
const {
  getShippingOptions,
  createShippingLabel,
  trackShipment,
} = require("../controllers/shippingController"); // Ensure correct import
const router = express.Router();

// Route to get shipping options
router.post("/options", getShippingOptions); // Ensure getShippingOptions is a valid function

// Route to create a shipping label
router.post("/create-label", createShippingLabel); // Ensure createShippingLabel is a valid function

// Route to track a shipment
router.get("/track/:trackingNumber", trackShipment); // Ensure trackShipment is a valid function

module.exports = router;