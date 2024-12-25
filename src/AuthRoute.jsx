import React from "react";
import { Navigate } from "react-router";
import withUser from "./withProvider";

function AuthRoute({ children, user }) {
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
}

export default withUser(AuthRoute);
