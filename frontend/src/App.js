import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard';
import AuthProvider from './context/AuthContext';
import CartProvider from './context/CartContext';
import './styles/global.css';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;