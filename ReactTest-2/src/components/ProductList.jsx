import products from "../data/products";
import ProductCard from "./ProductCard";
import '../styles/ProductList.css'

const ProductList = () => {
    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
