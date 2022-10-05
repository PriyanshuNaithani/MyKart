import React, { useContext } from "react";
import { Navigate} from "react-router";
import { UserContext } from "./App";

const UserRoute = ({ children})=>{
  const user = useContext(UserContext);
    if(!user) {
    return <Navigate to="/login"/>
  }
  return(
    children
  );
}
export default UserRoute;