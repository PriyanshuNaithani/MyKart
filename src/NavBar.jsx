import React, { useContext } from "react";
import { AiOutlineShopping } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { Link } from "react-router-dom";
import AmazonLogo from "./AmazonLogo.svg";
import { TotalCountContext } from "./Context";
import { AiOutlineLogout } from "react-icons/ai";
import withUser from "./withUser";

function NavBar({setUser}) {

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    setUser(undefined);
  }
  const token = localStorage.getItem("token");
  
  const totalCount = useContext(TotalCountContext);
  return (
    <div className="p-5 sm:py-4 bg-white">
      <div className="flex justify-between max-w-6xl mx-auto items-center">
        <img className="h-8 sm:h-12" src={AmazonLogo} />
        <div className="flex justify-center items-center">

          { token ?(
         <div> <AiOutlineLogout className="text-3xl hover:text-primary-500 cursor-pointer" onClick={handleLogout}/></div>):(
        <Link to="/signup/">
          <MdAccountCircle className="text-4xl hover:text-primary-500 ml-5 "/>
        </Link>
         )}

          
        <Link to="/cart/">
        <div className="flex items-center ml-5">
        <AiOutlineShopping className="text-5xl text-primary-500" />
        <span className="relative right-8 top-1 text-md font-semibold">{totalCount}</span>
          </div>
          </Link>
          </div>
      </div>
    </div>
  );
}
export default withUser(NavBar);