import "./App.css";
import React, { useState } from "react";

import CardProvider from "./components/store/CardProvider";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CardProvider>
      <Header onShowCartHandler={showCartHandler} />
      {showCart && <Cart onHideCartHandler={hideCartHandler} />}
      <Main />
    </CardProvider>
  );
}

export default App;
