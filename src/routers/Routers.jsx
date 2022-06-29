// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// *Styled Components
import { Container } from "../assets/Elements";

// Todo:Components
import Navigation from "../components/Nav/Navigation";

// *Routes
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

// ?Routes Tests
import Parent from "../pages/Test/Props/Parent";

// !Auth
import LoginPage from "../pages/AuthPage/LoginPage";
import RegisterPage from "../pages/AuthPage/RegisterPage";

function Routers() {
  return (
    <main>
      <Router>
        <Navigation />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
          </Routes>
        </Container>
      </Router>
    </main>
  );
}

export default Routers;
