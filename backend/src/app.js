const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { connectSequelize } = require("./config/sequelize");
const cors = require("cors");
const validateEnv = require("./middlewares/validateEnv");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const storeRoutes = require("./routes/storeRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const shippingRoutes = require("./routes/shippingRoutes");
const path = require("path");

connectSequelize(); // Connect to SQLite

const app = express();

validateEnv(); // Ensure required environment variables are set

console.log("Environment variables loaded:");
console.log("PORT:", process.env.PORT);
console.log("JWT_SECRET:", process.env.JWT_SECRET ? "Loaded" : "Missing");
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "../../frontend/public")));

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
  console.error("Error stack:", err.stack);
  res.status(500).json({ message: "Server error", error: err.message });
});

// Manejar todas las rutas no definidas con el archivo index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/public/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
