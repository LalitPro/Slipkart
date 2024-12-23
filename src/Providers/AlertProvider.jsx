import React, { useState } from "react";
import { AlertContext } from "../Contexts";

function AlertProvider({ children }) {
<<<<<<< HEAD
  const [alert, setAlert] = useState();
=======
  const [alert, setAlert] = useState({
    type: "success",
    message: "THis is a succuss message",
  });
>>>>>>> 0f75e58 (login)

  const removeAlert = () => {
    setAlert(undefined);
  };
<<<<<<< HEAD

=======
>>>>>>> 0f75e58 (login)
  return (
    <AlertContext.Provider value={{ alert, setAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export default AlertProvider;
