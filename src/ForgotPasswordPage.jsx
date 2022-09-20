import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
function ForgotPasswordPage(){
  return(
    <div className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-r from-sky-dark to-sky-medium">
      <form className="flex flex-col w-96 rounded-3xl shadow-lg p-8 bg-sky-dim  ">
      <h1 className="text-3xl font-bold font-sans mb-4 text-center">
        Forgot your password
      </h1>
        <p className="text-sm text-center px-2 font-normal">Enter your username below to receive password reset instructions</p>
         <label
          htmlFor="username" className="sr-only"
          >Registerd email ID
        </label>
        <input
            className=" placeholder:text-gray-150 rounded-md border border-gray-50 p-2.5 bg-gray-100 mt-6"
            type="email"
          id="username"
            placeholder="Registerd email ID"
          />
      <button
              className="bg-sky-dark hover:bg-sky-extradark text-white w-56 px-12 py-4 ml-2  rounded-xl font-sans font-semibold text-lg leading-4 mt-6  self-center">
              Send
					</button>
        <div className="flex justify-center items-center mt-4 gap-x-2">
        <Link to={"/login"}><HiArrowLeft className="text-lg"/></Link>
        <span className="font-sans text-md font-normal">Back to Login Page </span>
        </div>
        </form>
    </div>
  );
}
export default ForgotPasswordPage;