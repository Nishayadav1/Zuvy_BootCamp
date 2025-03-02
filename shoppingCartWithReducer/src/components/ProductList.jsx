import products from "../data/products";
import "../styles/ProductList.css";


const ProductList = ({ dispatch }) => {
    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} width="100" />
                        <h3>{product.name}</h3>
                        <p>Rs.{product.price}</p>
                        <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
