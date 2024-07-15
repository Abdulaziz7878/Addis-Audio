import React from "react";
import ReactDOM from "react-dom";

import StyledBackdrop from "./BackdropStyle";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <StyledBackdrop onClick={props.onClick}></StyledBackdrop>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
