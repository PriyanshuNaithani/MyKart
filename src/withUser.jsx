import React, { useContext } from "react";
import {UserContext} from "./Context";

const withUser = ((IncomingComponent) => {
  const OutgoingComponent = ((props) => {
    const contextData = useContext(UserContext);
    return <IncomingComponent {...props} {...contextData} />
  })
  return OutgoingComponent;
})
export default withUser;