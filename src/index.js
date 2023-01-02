import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import HomePage from './components/HomePage'
import ErrorPage from './components/ErrorPage';
import AboutPage from './components/AboutPage';
import LocationPage from './components/LocationPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  }, {
    path: "/location",
    element: <LocationPage />,
    errorElement: <ErrorPage />

  }, {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your HomePage, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
