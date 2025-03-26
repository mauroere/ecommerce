const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const productRoutes = require("./routes/productRoutes");
const shippingRoutes = require("./routes/shippingRoutes");
const storeRoutes = require("./routes/storeRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const errorHandler = require("./middlewares/errorHandler");
const envConfig = require("./config/env");
const { connectDB, sequelize } = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const startServer = async () => {
  try {
    await connectDB();
    await sequelize.sync(); // Sincronizar modelos con la base de datos
    console.log("Database synchronized");

    // Rutas
    app.use("/api/auth", authRoutes);
    app.use("/api/payment", paymentRoutes);
    app.use("/api/products", productRoutes);
    app.use("/api/shipping", shippingRoutes);
    app.use("/api/uploads", uploadRoutes);
    app.use("/api/stores", storeRoutes);

    // Middleware de manejo de errores
    app.use(errorHandler);

    // Iniciar el servidor
    const PORT = envConfig.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error.message);
    console.error(error.stack); // Agregar para depuración
    process.exit(1); // Salir del proceso con un código de error
  }
};

startServer();
