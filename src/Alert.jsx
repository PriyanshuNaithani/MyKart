import React, { useEffect } from "react";
import { BiError } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
// import withProvider from "./withProvider";
import {withAlert} from "./withProvider";

const themeMap = {
  success: {
    color: "bg-green-light",
    Icon: <TiTick />
  },
  error: {
    color: "bg-primary-600",
    Icon: <BiError />
  }
}

const Alert = ({ alert, removeAlert }) => {

  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(removeAlert, 3 * 1000);
      return () => {
        clearTimeout(timeout);
      }
    }
  }, [alert]);

  if (!alert) {
    return <></>;
  }


  const { message, type } = alert;
  const { Icon, color } = themeMap[type];



  return (

    <div className="flex items-center justify-center ">
      <div
        role="alert" id="alert" className="transition duration-150 ease-in-out w-full lg:w-11/12 mx-auto bg-white dark:bg-gray-800 shadow rounded flex flex-col py-4 md:py-0 items-center md:flex-row justify-between">
        <div className="flex flex-col items-center md:flex-row">
          <div className={"mr-3 p-4 " + color}>
            {Icon}
          </div>
          <p className="mr-2 text-base font-bold text-gray-800 dark:text-gray-100 mt-2 md:my-0">{type}</p>
          <div className="h-1 w-1 bg-gray-300 dark:bg-gray-800 rounded-full mr-2 hidden xl:block"></div>
          <p className="text-sm lg:text-base text-gray-800 lg:pt-1 xl:pt-0 sm:mb-0 mb-2 text-center sm:text-left ">{message}</p>
        </div>
        <div className="flex xl:items-center lg:items-center sm:justify-end justify-center pr-4">

          <button className="cursor-pointer " onClick={removeAlert}>Dismiss</button>
        </div>
      </div>
    </div>
  );
}
export default withAlert(Alert);
