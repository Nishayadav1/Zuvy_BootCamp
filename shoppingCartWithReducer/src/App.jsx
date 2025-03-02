import { useReducer } from "react";
import { cartReducer } from "./context/cartReducer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <div className="App">
            <h1>Shopping Cart</h1>
            <ProductList dispatch={dispatch} />
            <Cart cart={cart} dispatch={dispatch} />
        </div>
    );
}

export default App;
