import React, { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { withAlert } from "./withProvider";

const themeMap = {
  success: {
    Icon: AiOutlineCheckCircle,
    color: " bg-green-300  border-green-500 text-green-700 ",
  },
  error: {
    Icon: MdOutlineDangerous,
    color: " bg-red-300 border-red-500  text-red-700 ",
  },
};

function Alert({ alert, setAlert, removeAlert }) {
  if (!alert) {
    return;
  }

  useEffect(() => {
    if (alert) {
      const dismissTimer = setTimeout(removeAlert, 3 * 1000);

      return () => clearTimeout(dismissTimer);
    }
  }, [alert]);

  const { message, type } = alert;
  const { Icon, color } = themeMap[type];

  return (
    <div
      className={
        "rounded-md m-2 mr-4 p-4 justify-between items-center gap-3 flex-row flex border-l-4 " +
        color
      }
      role="alert"
    >
      <div className="flex items-center gap-3">
        <Icon />
        <p className="font-bold">{type}</p>
        <p>{message}</p>
      </div>
      <button onClick={removeAlert} className="justify-self-end">
        <ImCross />
      </button>
    </div>
  );
}

export default withAlert(Alert);
