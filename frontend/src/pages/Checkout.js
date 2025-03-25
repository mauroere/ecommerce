import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { paymentService } from '../services/paymentService';
import { shippingService } from '../services/shippingService';

const Checkout = () => {
    const { cartItems, totalAmount } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [shippingAddress, setShippingAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit_card');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCheckout = async () => {
        setLoading(true);
        setError('');

        try {
            const orderData = {
                items: cartItems,
                total: totalAmount,
                shippingAddress,
                paymentMethod,
                userId: user.id,
            };

            const paymentResponse = await paymentService.processPayment(orderData);
            const shippingResponse = await shippingService.createShippingOrder(paymentResponse.data);

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
            <div>
                <h3>Order Summary</h3>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>
                <p>Total Amount: ${totalAmount}</p>
            </div>
            <button onClick={handleCheckout} disabled={loading}>
                {loading ? 'Processing...' : 'Checkout'}
            </button>
        </div>
    );
};

export default Checkout;