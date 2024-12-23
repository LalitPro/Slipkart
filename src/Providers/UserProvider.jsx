<<<<<<< HEAD
import axios from "axios";
import React, { useState, useEffect } from "react";
import { UserContext } from "../Contexts";

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);
=======
import React, { useState, useEffect } from "react";
import { UserContext } from "../Contexts";
import axios from "axios";

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(false);
>>>>>>> 0f75e58 (login)

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
<<<<<<< HEAD
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
=======
          headers: { Authorization: token },
        })
        .then((respone) => {
          setUser(respone.data);
>>>>>>> 0f75e58 (login)
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
<<<<<<< HEAD

  if (loadingUser) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ isLoggedIn: !!token, user, setUser }}>
=======
  return (
    <UserContext.Provider value={{ user, setUser }}>
>>>>>>> 0f75e58 (login)
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
<<<<<<< HEAD




// !! converts truthy to true and falsy value to false
=======
>>>>>>> 0f75e58 (login)
