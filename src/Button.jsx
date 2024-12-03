import React from "react";

function Button({ className, children, onClick }, props) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={
        "p-2 px-4 m-2 text-white bg-red-500 hover:bg-red-600 active:bg-red-700 sm:px-16 rounded-xl " +
        className +
        " "
      }
    >
      {children}
    </button>
  );
}

export default Button;
