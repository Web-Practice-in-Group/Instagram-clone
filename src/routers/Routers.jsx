// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Todo:Components
import Navigation from "../components/Navigation";

// *Routes
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

function Routers() {
  return (
    <main>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default Routers;
