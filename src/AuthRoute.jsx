import React from "react";
import { Navigate } from "react-router";
<<<<<<< HEAD
import withUser from "./withProvider";

function AuthRoute({ user, children }) {
  if (user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>; // Optional wrapper
=======
import withUser from "./withUser";

function AuthRoute({ children, user }) {
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
>>>>>>> 0f75e58 (login)
}

export default withUser(AuthRoute);
