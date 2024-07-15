import React from "react";

import { StyledAvatar, StyledImg } from "./AvatarStyle";

const Avatar = (props) => {
  return (
    <StyledAvatar className={props.className} style={props.style}>
      <StyledImg
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </StyledAvatar>
  );
};

export default Avatar;
