import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default RoutesMain;
