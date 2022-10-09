import React from "react";
import { IconText, IconContainer } from "./style";

export default function IconWithText({ image, text }) {
  return (
    <IconContainer>
      <img src={image} alt="social-icon" />
      <IconText>{text}</IconText>
    </IconContainer>
  );
}
