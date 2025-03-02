import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../styles/Header.css'

const Header = ({ setView }) => {
    const { cart } = useContext(CartContext);

    return (
        <header className="header">
            <h1>E-Commerce App</h1>
            <nav>
                <button onClick={() => setView("products")}>Products</button>
                <button onClick={() => setView("cart")}>
                    Cart ({cart.length})
                </button>
            </nav>
        </header>
    );
};

export default Header;
