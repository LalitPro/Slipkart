<<<<<<< HEAD
import React from "react";
import { Navigate } from "react-router";
import withUser from "./withProvider";

function UserRoute({ user, children }) {
=======
import { Navigate } from "react-router";
import withUser from "./withUser";

function UserRoute({ children, user }) {
  console.log("UserRoute: user =", user); // Debugging
>>>>>>> 0f75e58 (login)
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default withUser(UserRoute);
