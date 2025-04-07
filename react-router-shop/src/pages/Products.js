import React from "react";

const dummyProducts = [
  { id: 1, name: "Shoes", price: "50" },
  { id: 2, name: "Shirt", price: "30" },
  { id: 3, name: "Watch", price: "70" },
];

function Products() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", padding: "1rem" }}>
      {dummyProducts.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
