import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";
import "./index.css";

function App() {
    const [view, setView] = useState("products");

    return (
        <CartProvider>
            <Header setView={setView} />
            {view === "products" ? <ProductList /> : <Cart />}
        </CartProvider>
    );
}

export default App;
