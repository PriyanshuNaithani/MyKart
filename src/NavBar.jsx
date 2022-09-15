import React from "react";
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from "react-router-dom";
import AmazonLogo from "./AmazonLogo.svg";
function NavBar({ productCount }) {
  return (
    <div className="p-5 sm:py-4 bg-white">
      <div className="flex justify-between max-w-6xl mx-auto items-center">
        <img className="h-8 sm:h-12" src={AmazonLogo} />
        <Link to="/cart/">
        <div className="flex flex-col items-center">
        <AiOutlineShopping className="text-5xl text-primary-500" />
        <span className="relative  bottom-8 text-md font-semibold">{productCount}</span>
          </div>
          </Link>
      </div>
    </div>
  );
}
export default NavBar;