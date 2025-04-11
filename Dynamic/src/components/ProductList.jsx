import { Link } from 'react-router-dom';

const products = [
  { id: '1', name: 'iPhone 15', price: 'Rs.999' },
  { id: '2', name: 'Samsung Galaxy S24', price: 'Rs.899' },
  { id: '3', name: 'OnePlus 12', price: 'Rs.799' },
];

function ProductList() {
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/Rs.{product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
