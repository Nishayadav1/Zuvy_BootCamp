import {
    createBrowserRouter,
    Navigate,
  } from 'react-router-dom';
  
  import Home from '../components/Home';
  import Login from '../components/Login';
  import Products, { loader as productsLoader } from '../components/Products';
  import Product from '../components/Product';
  import ProtectedRoute from '../components/ProtecteRoutes';
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: '/products',
          element: <Products />,
          loader: productsLoader,
        },
        {
          path: '/products/:productId',
          element: <Product />,
          loader: async ({ params }) => {
            const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
            const product = await res.json();
            return product;
          },
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);
  
  export default router;
  