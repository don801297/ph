import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Pay from './Payment.jsx';
import { useNavigate } from 'react-router-dom';


import Card from './components/Debit-card.jsx';
import Otp from './Otp.jsx';
import Orderid from './orderid.jsx';




const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  
  {
    path: "/Net-Banking",
    element: <Pay />,
  },


  {
    path: "/Card-Payment",
    element: <Card />,
  },

  {
    path: "Otp-verification",
    element: <Otp />,
  },

  {
    path: "Order id",
    element: <Orderid />,
  },

 
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
