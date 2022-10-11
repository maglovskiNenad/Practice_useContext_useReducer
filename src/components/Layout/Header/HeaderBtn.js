import React, { useContext } from "react";

import CartIcon from "../../Cart/CartIcon";
import CardContext from "../../store/cart-context";

import classes from "./HeaderBtn.module.css";

const HeaderBtn = (props) => {
  const cardCtx = useContext(CardContext);

  const { items } = cardCtx;

  const numberOfItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.shopBtn} onClick={props.onShowCart}>
      <span>Shop:</span>
      <span>{numberOfItems}</span>
      <span className={classes.icon}>
        <CartIcon />
      </span>
    </button>
  );
};

export default HeaderBtn;
