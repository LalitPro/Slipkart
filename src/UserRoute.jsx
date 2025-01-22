import React, { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "./Contexts";

function UserRoute({ children }) {
  const { user } = useContext(UserContext);

  console.log("UserRoute: user =", user); // Debugging log
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Ensure valid JSX is returned
  return children || null;
}

export default UserRoute;
