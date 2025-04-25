import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Products, { loader as productsLoader } from "./components/Products";
import Product, { loader as productLoader } from "./components/Product";
import ProtectedRoute from "./components/ProtectRoutes";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/products"
            element={<Products />}
            loader={productsLoader}
          >
            <Route
              path=":productId"
              element={<Product />}
              loader={productLoader}
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
