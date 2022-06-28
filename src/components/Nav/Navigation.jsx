// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Grid } from "@nextui-org/react";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import Search from "./Search";
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

import {Nav} from "../../assets/Elements";

function Navigation() {
  const [mode, setMode] = useState();

  if (mode == undefined) {
    setMode("black");
  }

  return (
    <div>
      <Nav></Nav>
      <Grid.Container
        justify="center"
        css={{
          borderBottom: "$space$1 solid $gray200",
          backgroundColor: {mode}, // default background color
        }}
      >
        <Grid
          css={{
            border: "$space$1 solid $gray200",
          }}
        >
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="logo"
          />
        </Grid>
        <Grid
          css={{
            border: "$space$1 solid $gray200",
          }}
        >
          <Search />
          <DarkMode setMode={setMode} />
        </Grid>
        <Grid
          css={{
            border: "$space$1 solid $gray200",
          }}
        >
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
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Navigation;
