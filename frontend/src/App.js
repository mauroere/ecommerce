import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import "./styles/global.css";
import LandingPage from "./components/LandingPage";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Stores from "./pages/Stores";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> {/* Nueva ruta */}
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} /> {/* Nueva ruta */}
                <Route path="/orders" element={<Orders />} /> {/* Nueva ruta */}
                <Route path="/stores" element={<Stores />} /> {/* Nueva ruta */}
                <Route path="/profile" element={<Profile />} /> {/* Nueva ruta */}
                <Route path="/analytics" element={<Analytics />} /> {/* Nueva ruta */}
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
