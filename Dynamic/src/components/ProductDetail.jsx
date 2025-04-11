import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Detail</h2>
      <p>You are viewing details for product ID: <strong>{productId}</strong></p>
    </div>
  );
}

export default ProductDetail;
