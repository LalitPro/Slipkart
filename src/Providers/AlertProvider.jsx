import React, { useState } from "react";
import { AlertContext } from "../Contexts";

function AlertProvider({ children }) {
  const [alert, setAlert] = useState({
    type: "success",
    message: "THis is a succuss message",
  });

  const removeAlert = () => {
    setAlert(undefined);
  };
  return (
    <AlertContext.Provider value={{ alert, setAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export default AlertProvider;
