# E-commerce Platform Frontend

This is the frontend part of the e-commerce platform built using React. The application allows users to browse products, manage their shopping cart, and complete purchases through a secure checkout process.

## Features

- User authentication with JWT and OAuth
- Product listing and details
- Shopping cart management
- Checkout process with payment integration
- Shipping options management

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   git clone <repository-url>

2. Navigate to the frontend directory:

   cd ecommerce-platform/frontend

3. Install the dependencies:

   npm install

### Running the Application

1. Start the backend server:
   ```
   cd ../backend
   npm start
   ```

2. Start the frontend application:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

### Build for Production

To create a production build, run:

npm run build

This will generate a `build` folder with the optimized application.

## Folder Structure

- `public/`: Contains the static files, including the main HTML file.
- `src/`: Contains the React components, pages, services, and styles.
- `components/`: Reusable components like Navbar, AuthForm, Cart, and ProductList.
- `pages/`: Page components for different routes like Home, Login, Checkout, and ProductDetails.
- `services/`: API service functions for authentication, payment, and shipping.
- `context/`: Context providers for managing global state (Auth and Cart).
- `styles/`: Global CSS styles for the application.
- `utils/`: Utility functions used throughout the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.