import React, { useReducer } from "react";

// Initial State
const initialState = {
  cart: [],
};

// Reducer Function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ),
      };

    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Headphones", price: 50 },
    { id: 3, name: "Keyboard", price: 30 },
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name} - ${product.price}</p>
          <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Shopping Cart</h2>
      {state.cart.length > 0 ? (
        state.cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - ${item.price} x {item.quantity}
            </p>
            <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}>
              +
            </button>
            <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}>
              -
            </button>
            <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
