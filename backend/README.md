# E-commerce Platform Backend

This is the backend for the E-commerce platform built using Node.js, Express.js, and MongoDB. The backend handles user authentication, payment processing, and shipping management.

## Features

- **User Authentication**: Implements JWT and OAuth for secure user authentication.
- **Payment Integration**: Utilizes the MercadoPago API for processing payments.
- **Shipping Management**: Integrates with Correo Argentino and Andreani APIs for shipping options.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd ecommerce-platform/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Configuration

- Create a `.env` file in the `backend` directory and set the following environment variables:
  ```
  PORT=5000
  MONGODB_URI=<your_mongodb_uri>
  JWT_SECRET=<your_jwt_secret>
  MERCADOPAGO_ACCESS_TOKEN=<your_mercadopago_access_token>
  ```

### Running the Application

To start the backend server, run:
```
npm start
```

The server will run on `http://localhost:5000`.

### API Documentation

Refer to the individual route files in the `src/routes` directory for detailed API documentation.

### License

This project is licensed under the MIT License.