import React from "react";
import { Buttons } from "../../assets/Elements";
function Button(props) {
  return (
    <Buttons
      border={props.border}
      margin={props.margin}
      width={props.width}
      color={props.color}
      background={props.background}
      active={props.active}
      {...props}
    >
      {props.name}
    </Buttons>
  );
}
export default Button;
