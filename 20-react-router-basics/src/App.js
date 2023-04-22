import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

// const router = createBrowserRouter([
//   { path: '/', element: <HomePage /> },
//   { element: <ProductsPage />, path: '/products' }
// ])
// 1 object represents 1 route

const router = createBrowserRouter([
  { path: '/h', element: <HomePage /> },
  { element: <ProductsPage />, path: '/products' },
  {},
  {}
])


function App() {
  return (
    <>
      <div>React router 5555555555</div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
