import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/cart" exact component={ Cart } />
    </BrowserRouter>
  );
}

export default Routes;