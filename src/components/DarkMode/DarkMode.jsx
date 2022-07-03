import React from "react";
import { MoonIcon, SunIcon } from "../Breadcrumbs/Icons";
import {Switch} from "../../assets/Elements";

function DarkMode(props) {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };
  const icon =
    props.theme === "light" ? (
      <MoonIcon color="dark" fill="dark" />
    ) : (
      <SunIcon color="white" fill="white" />
    );
  return <Switch onClick={changeTheme}>{icon}</Switch>;
}
export default DarkMode;
