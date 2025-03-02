import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);

    // Ensure `qty` exists in each cart item and calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div className="cart-details">
                            <h3>{item.name}</h3>
                            <p>Rs.{item.price} x {item.qty}</p>
                            <div className="cart-actions">
                                <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}>+</button>
                                <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })} disabled={item.qty <= 1}>-</button>
                                <button className="remove-btn" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))
            )}
            <h3 className="total-price">Total: Rs.{totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
