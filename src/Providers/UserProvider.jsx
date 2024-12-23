import React, { useState, useEffect } from "react";
import { UserContext } from "../Contexts";
import axios from "axios";

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: { Authorization: token },
        })
        .then((respone) => {
          setUser(respone.data);
          setLoadingUser(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
