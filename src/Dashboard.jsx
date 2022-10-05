import React, { useContext } from "react"
import { UserContext } from "./App";
function Dashboard(){
  const user = useContext(UserContext);

  return(
    <div>
      <h1 className="text-3xl font-bold">Welcome! {user.full_name}</h1>
    </div>
  );
}
export default Dashboard;