import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import productData from "./data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="app">
      <h1>Food Store</h1>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
