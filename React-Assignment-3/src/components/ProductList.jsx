import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";
import "./ProductList.css"; 
import Cart from "./Cart";
import Slider from "./Slider";

function ProductList() {
  const { dispatch } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <h2>Products</h2>
     <Slider/>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="product-description">
              {expanded[product.id] ? product.description : ""}
            </p>
            <button className="read-more-btn" onClick={() => toggleReadMore(product.id)}>
              {expanded[product.id] ? "Read Less" : "Read about me"}
            </button>
            <p>Rs. {product.price}</p>
            <button className="add-to-cart-btn" onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
              Add to Cart
            </button>
          </div>
        ))}
        <Cart />
      </div>
    </>
  );
}

export default ProductList;
