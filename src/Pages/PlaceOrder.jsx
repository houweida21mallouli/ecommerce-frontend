import React, { useContext } from 'react';
import './CSS/PlaceOrder.css';
import { ShopContext } from '../Context/ShopContext';

const PlaceOrder = () => {
    const { getTotalCartAmount, cartItems, clearCart } = useContext(ShopContext);

    const placeOrder = async (event) => {
        event.preventDefault();
        const products = Object.keys(cartItems).map(key => ({
            productId: key,
            quantity: cartItems[key]
        }));
        const order = {
            products,
            total: getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 7)
        };
    
        const token = localStorage.getItem('token');
        console.log('Auth Token:', token);
    
        if (!token) {
            alert('No token found. Please log in again.');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:4000/createorder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token,
                },
                body: JSON.stringify(order)
            });
    
            console.log('Response status:', response.status);
            
            if (response.status === 401) {
                alert('Unauthorized. Please log in again.');
                return;
            }
    
            const data = await response.json();
            if (data.success) {
                alert('Order placed successfully!');
                clearCart();
            } else {
                alert('Failed to place order. Please try again.');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('An error occurred. Please try again.');
        }
    };
    

    return (
        <form className="place-order" onSubmit={placeOrder}>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <input type="text" placeholder='Nom et Pénom' required />
                <input type="email" placeholder='Email' required />
                <input type="text" placeholder='Num tél' required />
                <input type="text" placeholder='Adresse' required />
            </div>
            <div className="place-order-right">
                <div className="cartitems-total">
                    <h1>Total</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()} DT</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>{getTotalCartAmount() === 0 ? 0 : 7} DT</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 7} DT</h3>
                        </div>
                    </div>
                    <button type="submit">Confirmer</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
