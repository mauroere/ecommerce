# E-commerce Platform

This project is a full-stack e-commerce platform built with React for the frontend, Node.js and Express.js for the backend, and MongoDB for the database. It includes features such as user authentication, payment processing, and shipping management.

## Project Structure

```
ecommerce-platform
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── config
│   │   │   ├── db.js
│   │   │   └── env.js
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   ├── paymentController.js
│   │   │   └── shippingController.js
│   │   ├── middlewares
│   │   │   ├── authMiddleware.js
│   │   │   └── errorHandler.js
│   │   ├── models
│   │   │   ├── Order.js
│   │   │   ├── Product.js
│   │   │   └── User.js
│   │   ├── routes
│   │   │   ├── authRoutes.js
│   │   │   ├── paymentRoutes.js
│   │   │   ├── productRoutes.js
│   │   │   └── shippingRoutes.js
│   │   └── utils
│   │       ├── jwtUtils.js
│   │       └── oauthUtils.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── AuthForm.js
│   │   │   ├── Cart.js
│   │   │   ├── Navbar.js
│   │   │   └── ProductList.js
│   │   ├── context
│   │   │   ├── AuthContext.js
│   │   │   └── CartContext.js
│   │   ├── pages
│   │   │   ├── Checkout.js
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   └── ProductDetails.js
│   │   ├── services
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── paymentService.js
│   │   │   └── shippingService.js
│   │   ├── styles
│   │   │   └── global.css
│   │   └── utils
│   │       └── helpers.js
│   ├── package.json
│   └── README.md
├── database
│   └── seed.js
└── README.md
```

## Features

- **User Authentication**: Secure login and registration using JWT and OAuth.
- **Payment Integration**: Process payments using the MercadoPago API.
- **Shipping Management**: Manage shipping options through Correo Argentino and Andreani APIs.
- **Product Management**: Display and manage products in the store.
- **Shopping Cart**: Users can add products to their cart and proceed to checkout.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ecommerce-platform
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

### Environment Variables

Create a `.env` file in the backend directory and add the following variables:
```
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
MERCADOPAGO_ACCESS_TOKEN=<your_mercadopago_access_token>
```

### API Documentation

Refer to the backend README for detailed API documentation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.