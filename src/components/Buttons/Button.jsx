import React from "react";
import { Buttons } from "../../assets/Elements";
function Button(props) {
  return (
    <Buttons width={props.width} color={props.color} background={props.background} active={props.active}>
      {props.name}
    </Buttons>
  );
}
export default Button;
