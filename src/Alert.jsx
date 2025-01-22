import React, { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { withAlert } from "./withProvider";

const themeMap = {
  success: {
    Icon: AiOutlineCheckCircle,
    color: "bg-green-300 border-green-500 text-green-700",
  },
  error: {
    Icon: MdOutlineDangerous,
    color: "bg-red-300 border-red-500 text-red-700",
  },
};

function Alert({ alert, setAlert, removeAlert }) {
  // Validate alert object
  if (!alert) {
    return null;
  }

  const { message, type } = alert || {};
  if (!message || !type || !themeMap[type]) {
    return null;
  }

  const { Icon, color } = themeMap[type];

  // Automatically dismiss alert after 3 seconds
  useEffect(() => {
    const dismissTimer = setTimeout(removeAlert, 3000);
    return () => clearTimeout(dismissTimer);
  }, [alert, removeAlert]);

  return (
    <div
      className={
        "rounded-md m-2 mr-4 p-4 flex items-center gap-3 border-l-4 " + color
      }
      role="alert"
    >
      <Icon className="text-xl" />
      <div className="flex-1">
        <p className="font-bold">{type.toUpperCase()}</p>
        <p>{message}</p>
      </div>
      <button
        onClick={removeAlert}
        className="text-gray-500 hover:text-black focus:outline-none"
      >
        <ImCross />
      </button>
    </div>
  );
}

export default withAlert(Alert);
