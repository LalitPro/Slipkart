import React from "react";
import { Navigate } from "react-router";
import withUser from "./withProvider";

function AuthRoute({ user, children }) {
  if (user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>; // Optional wrapper
}

export default withUser(AuthRoute);
