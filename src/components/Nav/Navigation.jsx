import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
// ?Iconos
import {
  CommentIcon,
  DotsIcon,
  HomeIcon,
  LikeIcon,
  MessageIcon,
  SaveIcon,
  UserIcon,
} from "../Breadcrumbs/Icons";

function Navigation() {
  const [mode, setMode] = useState();

  if (mode == undefined) {
    setMode("black");
  }

  return (
    <div>
      <h1>Navigation</h1>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/parent">
        <h4>Parent</h4>
      </Link>

      <DarkMode setMode={setMode} />

      <Link to="/">
        <CommentIcon color={mode} />
      </Link>
      <Link to="/">
        <DotsIcon fill={mode} />
      </Link>
      <Link to="/">
        <HomeIcon fill={mode} />
      </Link>
      <Link to="/">
        <LikeIcon fill={mode} />
      </Link>
      <Link to="/">
        <MessageIcon color={mode} fill={mode} />
      </Link>
      <Link to="/">
        <SaveIcon color={mode} />
      </Link>
      <Link to="/">
        <UserIcon fill={mode} />
      </Link>
    </div>
  );
}

export default Navigation;
