import React, { useContext } from "react";
import {AlertContext} from "./Context";

const withAlert = ((IncomingComponent) => {
  const OutgoingComponent = ((props) => {
    const contextData = useContext(AlertContext);
    return <IncomingComponent {...props} {...contextData}/>
  })
  return OutgoingComponent;
})
export default withAlert;