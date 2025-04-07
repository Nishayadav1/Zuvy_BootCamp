import React from 'react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;