import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Pages/About'
import Vaccination from './Pages/Vaccination'
import FAQ from './Pages/FAQ'
import Refill from './Pages/Refill'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/SignUp'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "vaccination",
    element: <Vaccination />,
  },
  {
    path: "faq",
    element: <FAQ />
  },
  {
    path: "refill",
    element: <Refill />
  },
  {
    path: "shop",
    element: <Shop />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "signup",
    element: <Signup />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
