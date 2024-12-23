import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Navigate } from "react-router";
import Button from "./Button";
import withUser from "./withProvider";

function Dashboard({ user, setUser }) {
  console.log("Dashboard: user =", user); // Debugging
  function handleLogout() {
    localStorage.removeItem("token");
    setUser(undefined);
    // ek api call karni hai token ko expire karne ke liye
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="px-3 py-16 m-2 mx-auto bg-white border sm:m-10 sm:px-10 md:px-20">
      <h1 className="text-2xl md:text-4xl">DASHBOARD</h1>
      <div className="flex items-center gap-3 m-3 sm:m-5 md:m-10">
        <IoPersonCircleSharp className="text-4xl md:text-7xl" />
        <h1 className="text-3xl font-semibold md:text-6xl">
          {user.full_name.toUpperCase()}
        </h1>
      </div>
      <div className="flex items-center gap-3 m-3 sm:m-5 md:m-10">
        <MdEmail className="text-3xl sm:text-4xl md:text-7xl" />
        <h1 className="text-2xl md:text-6xl ">{user.email}</h1>
      </div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default withUser(Dashboard);
