const express = require("express");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables before anything else
const { connectSequelize } = require("./config/sequelize"); // Import Sequelize connection
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const storeRoutes = require("./routes/storeRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const shippingRoutes = require("./routes/shippingRoutes");

connectSequelize(); // Connect to SQLite

const app = express();

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/shipping", shippingRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
