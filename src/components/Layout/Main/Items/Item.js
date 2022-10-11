import React, { useContext } from "react";

import CardContext from "../../../store/cart-context";
import classes from "./Item.module.css";
import ItemForm from "./ItemForm";

const Item = (props) => {
  const cartCtx = useContext(CardContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.list}>
      <span className={classes.name}>{props.name}</span>
      <span className={classes.description}>{props.description}</span>
      <span className={classes.price}>${props.price}</span>
      <div className={classes.order}>
        <ItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Item;
