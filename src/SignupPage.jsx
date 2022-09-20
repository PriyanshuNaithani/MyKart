import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from 'yup';
function SignupPage() {
  function callSignupApi(){
    console.log("sending data",values.email,values.username,values.password,values.confirmPassword);
  }

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().min(8).required(),
                     
  });

  
  const {handleSubmit,values,handleChange,errors,handleBlur,touched,isValid,} = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: callSignupApi,
    validationSchema: schema,
  });
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-r from-sky-dark to-sky-medium">
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col w-96 rounded-3xl shadow-lg p-8 bg-sky-dim">
        <h1 className="text-3xl font-bold font-sans mb-2 text-center">
          Create An Account
      </h1>
        <p className="text-sm text-center px-2 font-normal">Create an account to enjoy all the services without any ads for free!</p>
        <label
          htmlFor="email" className="sr-only"
        >email
        </label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className=" placeholder:text-gray-150 rounded-md border border-gray-50 p-2.5 bg-gray-100 mt-6"
          type="email"
          id="email"
          name="email"
          placeholder="Email Address" />
        {touched.email && errors.email && (
          <div className="text-primary-500">{errors.email}</div>
        )}

        <label
          htmlFor="username" className="sr-only"
        >username
        </label>
        <input
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          className=" placeholder:text-gray-150 rounded-md border border-gray-50 p-2.5 bg-gray-100 mt-2"
          type="text"
          id="username"
          placeholder="username"
          name="username"
        />
        {touched.username && errors.username && (
          <div className="text-primary-500">{errors.username}</div>
        )}
        
        <label
          htmlFor="password" className="sr-only"
        >password
        </label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className=" placeholder:text-gray-150 rounded-md border border-gray-50 p-2.5 bg-gray-100 mt-2"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <div className="text-primary-500">{errors.password}</div>
        )}
        
        <label
          htmlFor="confirm password" className="sr-only"
        >confirm password
        </label>
        <input
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className=" placeholder:text-gray-150 rounded-md border border-gray-50 p-2.5 bg-gray-100 mt-2"
          type="password"
          id="confirm password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <div className="text-primary-500">{errors.confirmPassword}</div>
        )}
        <button
          type="submit"
          className="bg-sky-dark hover:bg-sky-extradark text-white w-56 px-12 py-4 ml-2  rounded-xl font-sans font-semibold text-lg leading-4 mt-6  self-center disabled:bg-sky-medium"
          disabled={!isValid}>
          Create Account
					</button>
        <div className="flex justify-center mt-3">
          <span className="text-sm">Already Have An Account?</span>
          <Link
            className="text-sm underline underline-offset-1 text-sky-extradark"
            to={"/login"}>Sign In</Link>
        </div>
      </form>
    </div>
  );
}
export default SignupPage;