import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './Routes/ErrorPage'
import {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import PadrePage from './Routes/Padre';
import RodrigoPage from './Routes/Rodrigo';
import PedraPage from './Routes/Pedra';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Cracolandia from './Routes/Cracolandia';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "contact",
    element: <Contact/>
  },
  {
    path: "padre",
    element:<PadrePage/>
  },
  {
    path:"rodrigo",
    element:<RodrigoPage/>
  },
  {
    path:"pedra",
    element:<PedraPage/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"cracolandia",
    element:<Cracolandia/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
