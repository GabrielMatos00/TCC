import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Brasileirão from './pages/Brasileirao';
import PremierLeague from './pages/PremierLeague';
import SerieA from './pages/SerieA';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Brasileirão",
    element: <Brasileirão />,
  },
  {
    path: "/PremierLeague",
    element: <PremierLeague />,
  },
  {
    path: "/SerieA",
    element: <SerieA />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
