import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-grid">
      {products.length === 0 ? (
        <p>No results found.</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))
      )}
    </div>
  );
};

export default ProductList;
