import { useReducer } from "react";
import { cartReducer } from "../context/cartReducer";
import "../styles/Cart.css";


const Cart = ({ cart, dispatch }) => {
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? <p>Your cart is empty</p> :
                cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} width="50" />
                        <h3>{item.name}</h3>
                        <p>Rs.{item.price} x {item.qty}</p>
                        <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}>+</button>
                        <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}>-</button>
                        <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>Remove</button>
                    </div>
                ))
            }
            <h3>Total Price: Rs.{totalPrice}</h3>
        </div>
    );
};

export default Cart;
