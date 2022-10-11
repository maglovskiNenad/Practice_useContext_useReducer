import React, { useRef, useState } from "react";
import Input from "../../../UI/Input";

import classes from "./ItemForm.module.css";

const ItemForm = (props) => {
  const onAddInputRef = useRef();
  const [inputIsValid, setInputIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = onAddInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setInputIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <button className={classes.add}>Add:</button>
      <Input
        ref={onAddInputRef}
        input={{
          id: props.id,
          type: "number",
          max: "5",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!inputIsValid && <p>Invalid input please enter a valid input!</p>}
    </form>
  );
};

export default ItemForm;
