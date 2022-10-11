import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.inputs}>
      <input ref={ref} {...props.input} className={classes.input} />
    </div>
  );
});

export default Input;
