import React from "react";

function Button({ className, children, onClick }, props) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={
        " px-4 py-2 text-white disabled:bg-indigo-400 bg-indigo-700 rounded-md " +
        className +
        " "
      }
    >
      {children}
    </button>
  );
}

export default Button;
