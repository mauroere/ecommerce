import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/product/:id" component={ProductDetails} />
          </Switch>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;