// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Todo:Components
import Navigation from "../components/Nav/Navigation";

// *Routes
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

// ?Routes Tests
import Parent from "../pages/Test/Props/Parent";

// !Loader
import Login from "../components/Login/login";

function Routers() {
  return (
    <main>      
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Login/>
    </main>
  );
}

export default Routers;
