import React, { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const localUser = localStorage.getItem("@Smart-Inspecs");
  const { userReady } = useContext(UserContext);

  if (!localUser) {
    return <Navigate to="/login" />;
  }
  return <>{userReady ? children : <div> Loading... </div>}</>;
};

export default ProtectedRoute;
