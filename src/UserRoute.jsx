import { Navigate } from "react-router";
import withUser from "./withUser";

function UserRoute({ children, user }) {
  console.log("UserRoute: user =", user); // Debugging
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default withUser(UserRoute);
