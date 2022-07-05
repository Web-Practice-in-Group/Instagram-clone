// eslint-disable-next-line no-unused-vars
import React from "react";
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

function Navigation({ theme, setTheme }) {
  return (
    <>
      <NavContainer>
        <Navbar>
          <Row border="transparent">
            <Col size="1">
              <NavLogo>
                <Link to="/">
                  <InstagramIcon fill="white" />
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
                <HomeIcon color="white" />
                <MessageIcon color="white" fill="white" />
                <NewIcon color="white" />
                <ModIcon color="white" fill="white" />
                <LikeIcon fill="white" />
                <Link to="/profile">
                  <Avatars />
                </Link>
              </NavAction>
            </Col>
            <Col size="1" collapse="xs">
              <NavAction>
                <DarkMode theme={theme} setTheme={setTheme} />
              </NavAction>
            </Col>
            <Col size="8" collapse="md">
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
