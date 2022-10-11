import React from "react";
import { Navigate} from "react-router";
import withUser from "./withUser";

const UserRoute = ({ user,children})=>{
    if(!user) {
    return <Navigate to="/login"/>
  }
  return children;
}

export default withUser(UserRoute);