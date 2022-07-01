import React from "react";
import { Inputs } from "../../assets/Elements";

function Input(props) {
  return (
    <Inputs
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
}
export default Input;
