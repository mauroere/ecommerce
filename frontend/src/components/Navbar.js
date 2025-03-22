import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">E-Commerce</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                {user ? (
                    <>
                        <Link to="/cart">Cart</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;