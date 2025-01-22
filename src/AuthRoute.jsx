import React, { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "./Contexts";

function AuthRoute({ children }) {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/" />;
  }

  // Ensure valid JSX is returned
  return children || null;
}

export default AuthRoute;
