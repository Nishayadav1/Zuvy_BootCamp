import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../styles/ProductCard.css'



const ProductCard = ({ product }) => {
    const { dispatch } = useContext(CartContext);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Rs.{product.price}</p>
            <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
