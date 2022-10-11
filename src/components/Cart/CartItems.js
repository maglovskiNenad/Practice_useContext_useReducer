import React from "react";

import classes from "./CartItems.module.css";

const CartItems = (props) => {
  return (
    <div className={classes.cart}>
      <div className={classes.item}>
        <span>{props.name},</span>
        <span>x{props.amount}</span>
        <span>${props.price}</span>
      </div>
      <div className={classes.btnAction}>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>-</button>
      </div>
    </div>
  );
};

export default CartItems;
