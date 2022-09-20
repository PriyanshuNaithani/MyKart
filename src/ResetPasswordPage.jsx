import React from "react";
function ResetPasswordPage(){
  return(
        <div className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-r from-sky-dark to-sky-medium">
      <form className="flex flex-col w-96 rounded-3xl shadow-lg p-8 bg-sky-dim  ">
      <h1 className="text-3xl font-bold font-sans mb-2 text-center">
        Forgot your password
      </h1>
        <p className="text-sm text-center px-2 font-normal">Enter your new password below, we're just being extra safe</p>
        
          <label
          htmlFor="newpassword" className="sr-only"
          >New Password
        </label>
        <input
            className=" placeholder:text-gray-150 rounded-md border border-gray-50 p-2.5 bg-gray-100 mt-2"
            type="password"
          id="newpassword"
            placeholder="New Password"
          />
         <label
          htmlFor="confirmPassword" className="sr-only"
          >confirm password
        </label>
        <input
            className=" placeholder:text-gray-150 rounded-md border border-gray-50 p-2.5 bg-gray-100 mt-2"
            type="password"
          id="confirmPassword"
            placeholder="Confirm Password"
          />
      <button
              className="bg-sky-dark hover:bg-sky-extradark text-white w-56 px-12 py-4 ml-2  rounded-xl font-sans font-semibold text-lg leading-4 mt-6  self-center">
              Reset Password
					</button>
        </form>
    </div>
  );
}
export default ResetPasswordPage;