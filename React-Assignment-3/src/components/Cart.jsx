import { useCart } from "../context/CartContext";
import "./Cart.css"; 

function Cart() {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h4>{item.title}</h4>
                <p>Price: Rs. {item.price}</p>
              </div>
              <div className="quantity-controls">
                <button
                  onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity - 1 } })}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity + 1 } })}
                >
                  +
                </button>
              </div>
              <button className="remove-button" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
                Remove
              </button>
            </div>
          ))}
          <h3 className="total-price">Total: Rs. {total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
