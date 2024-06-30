import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './Components/MainLayout/MainLayout.jsx';
import Home from './Components/Home/Home.jsx';
import OnewaySearchResults from './Components/OnewaySearchResults/OnewaySearchResults.jsx';
import RoundwaySearchResults from './Components/RoundwaySearchResults/RoundwaySearchResults.jsx';
import HotelSearchResults from './Components/HotelSearchResults/HotelSearchResults.jsx';
import Signup from './Components/Registration/Signup/Signup.jsx';
import Login from './Components/Registration/Login/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/onewaysearchresults",
        element: <OnewaySearchResults/>
      },
      {
        path: "/roundwaysearchresults",
        element: <RoundwaySearchResults/>
      },


      {
        path: "/hotelsearchresults",
        element: <HotelSearchResults/>
      },

      









    ],
  },
  {
    path: "/signup",
    element: <Signup/>
  },

  {
    path: "/login",
    element:<Login/>
  },

 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
