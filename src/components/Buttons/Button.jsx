import React from "react";
import { NavButton } from "../../assets/Elements";
function Button(props) {
  return (
    <NavButton color={props.color} background={props.background}>
      {props.name}
    </NavButton>
  );
}
export default Button;
