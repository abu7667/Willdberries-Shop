import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import About from './pages/About.jsx';
import Buildings from './pages/Buildings.jsx';
import Workwb from './pages/Workwb.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import Product from './pages/Product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/buildings",
    element: <Buildings />,
  },
  {
    path: "/workwb",
    element: <Workwb />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/product/:id",
    element: <Product />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
