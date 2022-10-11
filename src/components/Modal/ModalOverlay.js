import React from "react";
import ReactDOM from "react-dom";

import classes from "./ModalOverlay.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onHide}>
      {props.children}
    </div>
  );
};

const portalElements = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHide={props.onHideCart} />,
        portalElements
      )}
      {ReactDOM.createPortal(<Modal>{props.children}</Modal>, portalElements)}
    </React.Fragment>
  );
};

export default ModalOverlay;
