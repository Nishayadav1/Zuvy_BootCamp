import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import './Product.css';

const Product = () => {
  const product = useLoaderData();
  const navigate = useNavigate();  
  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <p>ID: {product.id}</p>
      <p>Category: {product.category}</p>
      <p id="price"> Rs. {product.price}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <button onClick={handleBackClick}>Back to products</button>
    </div>
  );
};

export default Product;
