require('dotenv').config();

const env = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    MERCADOPAGO_ACCESS_TOKEN: process.env.MERCADOPAGO_ACCESS_TOKEN || 'your_mercadopago_access_token',
    CORREO_ARGENTINO_API_KEY: process.env.CORREO_ARGENTINO_API_KEY || 'your_correo_argentino_api_key',
    ANDREANI_API_KEY: process.env.ANDREANI_API_KEY || 'your_andreani_api_key',
};

module.exports = env;