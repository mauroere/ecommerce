import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { createPayment } from '../services/paymentService';
import { createShippingLabel } from '../services/shippingService';

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const { user } = useAuth();
    const [shippingAddress, setShippingAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit_card');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCheckout = async () => {
        setLoading(true);
        setError('');

        try {
            const orderData = {
                items: cart,
                shippingAddress,
                paymentMethod,
                userId: user.id,
            };

            const paymentResponse = await createPayment(orderData);
            const shippingResponse = await createShippingLabel(paymentResponse.data);

            clearCart();
            // Handle successful checkout (e.g., redirect to confirmation page)
        } catch (err) {
            setError(err.response?.data?.message || 'Checkout failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            {error && <p className="error">{error}</p>}
            <div>
                <h3>Shipping Address</h3>
                <input
                    type="text"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    placeholder="Enter your shipping address"
                />
            </div>
            <div>
                <h3>Payment Method</h3>
                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="credit_card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                </select>
            </div>
            <button onClick={handleCheckout} disabled={loading}>
                {loading ? 'Processing...' : 'Checkout'}
            </button>
        </div>
    );
};

export default Checkout;