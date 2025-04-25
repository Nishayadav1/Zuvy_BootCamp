import React from "react";
import { useSearchParams, Link, Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import './Products.css';

const fetchProducts = async (query) => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  if (query) {
    return data.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  return data;
};

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("q") || "";
  return fetchProducts(search);
};

const Products = () => {
  const products = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    setSearchParams({ q: e.target.value });
  };

  return (
    <div id="products">
      <input
        type="text"
        value={searchParams.get("q") || ""}
        onChange={handleSearch}
        placeholder="Search Products"
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} width="100" />
                <p>Price: Rs. {product.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
};

export default Products;
