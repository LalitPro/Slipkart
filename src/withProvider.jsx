<<<<<<< HEAD
import React, { useContext } from "react";
import { AlertContext, CartContext, UserContext } from "./Contexts";
=======
import { useContext } from "react";
import { AlertContext, UserContext } from "./Contexts";
>>>>>>> 0f75e58 (login)

const withProvider = (provider) => (IncomingComponent) => (props) => {
  const contextData = useContext(provider);
  return <IncomingComponent {...props} {...contextData} />;
};

export default withProvider;

export const withAlert = withProvider(AlertContext);
<<<<<<< HEAD
export const withUser = withProvider(UserContext);
export const withCart = withProvider(CartContext);
=======

export const withUser = withProvider(UserContext);
>>>>>>> 0f75e58 (login)
