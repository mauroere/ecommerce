const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const productRoutes = require('./routes/productRoutes');
const shippingRoutes = require('./routes/shippingRoutes');
const errorHandler = require('./middlewares/errorHandler');
const envConfig = require('./config/env');
const storeRoutes = require('./routes/storeRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect(envConfig.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/products', productRoutes);
app.use('/api/shipping', shippingRoutes);
app.use('/api/uploads', uploadRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/products', productRoutes);


// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = envConfig.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});