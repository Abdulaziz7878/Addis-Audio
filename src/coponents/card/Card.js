import React from "react";

import StyledCard from "./CardStyle";

const Card = (props) => {
  return (
    <StyledCard className={props.className} style={props.style}>
      {props.children}
    </StyledCard>
  );
};

export default Card;
