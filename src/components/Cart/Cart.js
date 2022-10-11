import React, { useContext } from "react";

import CartItems from "./CartItems";
import ModalOverlay from "../Modal/ModalOverlay";

import classes from "./Cart.module.css";
import CardContext from "../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CardContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItem = cartCtx.items.map((item) => (
    <CartItems
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={addItemHandler.bind(null, item)}
      onRemove={removeItemHandler.bind(null, item.id)}
    />
  ));

  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  return (
    <ModalOverlay onHideCart={props.onHideCartHandler}>
      {cartItem}
      <div className={classes.cart}>
        <div className={classes.actions}>
          <div className={classes.amount}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>

          <div className={classes.btnActions}>
            <button onClick={props.onHideCartHandler}>Close</button>
            <button>Order</button>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default Cart;
