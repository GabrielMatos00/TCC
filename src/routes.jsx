import React from "react";
import { Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Brasileirão from "./pages/Brasileirao";
import PremierLeague from "./pages/PremierLeague";
import SerieA from "./pages/SerieA";

const RoutesA = () => {
   return(
       <BrowserRouter>
           <Routes component = { Home }  path="/" exact />
           <Routes component = { Brasileirão }  path="/Brasileirão" />
           <Routes component = { PremierLeague }  path="/PremierLeague" />
           <Routes component = { SerieA }  path="/SerieA" />
       </BrowserRouter>
   )
}

export default RoutesA;