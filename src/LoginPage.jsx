import React from "react";
import { Link } from "react-router-dom";
// import FormikInput from "./FormikInput";

function LoginPage() {

 
  return (
  
    <div className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-r from-sky-dark to-sky-medium">
      <form className="flex flex-col w-96 rounded-3xl shadow-lg p-8 bg-sky-dim  " 
        >
        
        <h1 className="text-3xl font-bold font-sans mb-2 text-center ">
          Login
      </h1>

        <label
          htmlFor="email" className="sr-only"
        >email
        </label>
        <input
          className=" placeholder:text-gray-150 rounded-md border border-gray-50 p-2.5 bg-gray-100 mt-6"
          name="email"
          type="email"
          id="email"
          placeholder="Email Address" />

        <label
          htmlFor="password" className="sr-only"
        >password
        </label>
        <input
          className=" placeholder:text-gray-150 rounded-md border border-gray-50 p-2.5 bg-gray-100 mt-2"
          name="password"
          type="password"
          id="password"
          placeholder="Password"
        />
          <button
          type="sumbit"
          className="bg-sky-dark hover:bg-sky-extradark text-white w-56 px-12 py-4 ml-2  rounded-xl font-sans font-semibold text-lg leading-4 mt-6  self-center">
          Log In
					</button>
        <Link className="text-center text-md mt-3" to={"/forgotPassword"}>Forgot password?</Link>
        <div className="flex justify-center mt-2">
          <p className="text-md">No Account?</p>
          <Link className="text-md" to={"/signup"}>Create one</Link>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;