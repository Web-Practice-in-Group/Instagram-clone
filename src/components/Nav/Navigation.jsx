// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

// *DarkMode
import DarkMode from "../DarkMode/DarkMode";
// *SearchBar
import Search from "./Search";
// *Button
import Buttons from "../Buttons/Button";
// *Avatars
import Avatars from "../Breadcrumbs/Avatars";

// ?Iconos
import {
  HomeIcon,
  MessageIcon,
  NewIcon,
  ModIcon,
  LikeIcon,
  InstagramIcon,
} from "../Breadcrumbs/Icons";

// ?Styled components
import {
  Row,
  Col,
  NavContainer,
  Navbar,
  NavLogo,
  NavSearch,
  NavAction,
} from "../../assets/Elements";

function Navigation() {

  const [mode, setMode] = useState();
  const [background, setBackground] = useState();

  if (mode === undefined) {
    setMode("black");
    setBackground("white");
  }

  return (
    <>
      <NavContainer primary={background}>
        <Navbar>
          <Row border="transparent">
            <Col size="1">
              <NavLogo>
                <Link to="/">
                  <InstagramIcon fill={mode} />
                </Link>
              </NavLogo>
            </Col>
            <Col size="4" collapse="md">
              <NavSearch>
                <Search />
              </NavSearch>
            </Col>
            <Col size="2">
              <NavAction>
                <HomeIcon color={mode} />
                <MessageIcon color={mode} fill={mode} />
                <NewIcon color={mode} />
                <ModIcon color={mode} fill={mode} />
                <LikeIcon fill={mode} />
                <Avatars size="sm"/>
              </NavAction>
            </Col>
            <Col size="1" collapse="xs">
              <NavAction>
                <DarkMode setMode={setMode} setBackground={setBackground} />
              </NavAction>
            </Col>
            <Col size="5" collapse="md">
              <NavAction>
                <Link to="/auth/login">
                  <Buttons
                    color="#fff"
                    background="#0095f6"
                    name="Iniciar Sesion"
                    border="transparent"
                  />
                </Link>
                <Link to="/auth/register">
                  <Buttons
                    color="#0095f6"
                    background="#fff"
                    name="Registrarse"
                    border="transparent"
                  />
                </Link>
              </NavAction>
            </Col>
          </Row>
        </Navbar>
      </NavContainer>
    </>
  );
}

export default Navigation;
