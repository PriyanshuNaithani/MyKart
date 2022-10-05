import React, { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "./App";

const AuthRoute = ({ children }) => {

  const user = useContext(UserContext);
  if (user) {
    return <Navigate to="/" />
  }
  return (
    children
  );


}
export default AuthRoute;