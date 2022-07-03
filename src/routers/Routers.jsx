// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// *Styled Components
import { ContainerRoutes, Themes, Container } from "../assets/Elements";

// Todo:Components
import Navigation from "../components/Nav/Navigation";

// *Routes
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

// !Auth
import LoginPage from "../pages/AuthPage/LoginPage";
import RegisterPage from "../pages/AuthPage/RegisterPage";

// ?Profile
import ProfilePage from "../pages/ProfilePage/ProfilePage";

import { ThemeProvider } from "styled-components";

function Routers() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={Themes[theme]}>
      <Container>
        <Router>
          <Navigation theme={theme} setTheme={setTheme} />
          <ContainerRoutes>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </ContainerRoutes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default Routers;
