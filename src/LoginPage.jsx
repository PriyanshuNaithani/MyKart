
import React from "react";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import Input from "./Input";
import { withFormik } from "formik";
import axios from "axios";
// import { SetUserContext } from "./App";


function callLoginApi(values , bag ) {

  axios.post("https://myeasyKart.codeyogi.io/login",{
    email:values.email,
    password:values.password,
  }).then((response) => {
    const {user , token} = response.data;
    localStorage.setItem("token",token);
    console.log(bag);
    bag.props.setUser(user);
  }).catch(() =>{
    console.log("Invalid Credentials");
  });
  }


  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });


  const initialValues = {
      email: "",
      password: "",
    }

export function LoginPage({handleSubmit, values, errors, touched, handleChange, handleBlur ,}) {

  // const setUser = useContext(SetUserContext);
  // const User=useContext(UserContext);
  // console.log("logged in user is",User);


 
  return (
  
    <div className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-r from-sky-dark to-sky-medium">
      <form className="flex flex-col w-96 rounded-3xl shadow-lg p-8 bg-sky-dim  " 
        onSubmit={handleSubmit}
        >
        
        <h1 className="text-3xl font-bold font-sans mb-2 text-center ">
          Login
      </h1>

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

const myHOC = withFormik({
  validationSchema: schema,
  initialValues:initialValues,
  handleSubmit: callLoginApi,
});
const EasyLogin = myHOC(LoginPage);


export default EasyLogin;