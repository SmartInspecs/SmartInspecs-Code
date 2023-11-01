import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import Home from "../components/home";
import ProtectedRoute from "../components/protectedRoute";
import NotFoundPage from "../pages/notFoundPage";
import { WorkingInProgress } from "../pages/workingInProgress";
import DashContentAdm from "../components/home/dash-content";
import ObraSelected from "../components/home/obraSelect";
import AgendamentoPage from "../pages/agendamento";
import InspecaoSegPage from "../pages/inspecaoSegPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashContentAdm />} />
        <Route path="obra" element={<ObraSelected />} />
        <Route path="obra/agendamento" element={<AgendamentoPage />} />
        <Route path="inspecao-seguranca" element={<InspecaoSegPage />} />
      </Route>
      <Route path="/working-progress" element={<WorkingInProgress />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesMain;
