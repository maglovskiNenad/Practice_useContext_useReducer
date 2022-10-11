import React from "react";

import HeaderBtn from "./HeaderBtn";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li>
          <span>Your shoping day!</span>
        </li>

        <li>
          <HeaderBtn onShowCart={props.onShowCartHandler} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
