import React from "react";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import Input from "./Input";
import { withFormik } from "formik";
import axios from "axios";



function callSignupApi(values) {
  axios.post("https://myeasyKart.codeyogi.io/signup",{
    email:values.email,
    password:values.password,
    
  }).then((response) => {
    console.log(response.data);
  }).catch(() =>{
    console.log("Invalid Credentials");
  });
  }

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().min(8).required(),

  });


  const initialValues = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    }


export function SignupPage({handleSubmit, values, errors, touched, handleChange, handleBlur}) {

  return (
    
    <div className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-r from-sky-dark to-sky-medium">
     
      <form
        onSubmit = {handleSubmit}
        className="flex flex-col w-96 rounded-3xl shadow-lg p-8 bg-sky-dim">
        <h1 className="text-3xl font-bold font-sans mb-2 text-center">
          Create An Account
      </h1>
        <p className="text-sm text-center px-2 font-normal">Create an account to enjoy all the services without any ads for free!</p>

        <Input
          values={values.email}
          error={errors.email}
          touched={touched.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email Address"
          id = "email-address"
          name="email"
          type="eamil"
          required
          autoComplete="email"
          placeholder="Email Address"
          className="w-80 h-12 mt-6"
          />
        <Input
          values={values.username}
          error={errors.username}
          touched={touched.username}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Username"
          id = "user-name"
          name="username"
          type="text"
          required
          autoComplete="current-text"
          placeholder="Username"
          className="w-80 h-12 mt-2"
          />
        <Input
          values={values.password}
          error={errors.password}
          touched={touched.password}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Password"
          id = "currentPassword"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Password"
          className="w-80 h-12 mt-2"
          />
        <Input
          values={values.confirmPassword}
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Confirm Passsword"
          id = "password"
          name="confirmPassword"
          type="password"
          required
          autoComplete=""
          placeholder="Confirm Passsword"
          className="w-80 h-12 mt-2"
          />
        <button
          type="submit"
          className="bg-sky-dark hover:bg-sky-extradark text-white w-56 px-12 py-4 ml-2  rounded-xl font-sans font-semibold text-lg leading-4 mt-6  self-center disabled:bg-sky-medium"
          >
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
const myHOC = withFormik({
  validationSchema: schema,
  initialValues:initialValues,
  handleSubmit: callSignupApi
});
const EasySignup = myHOC(SignupPage);
export default EasySignup;
