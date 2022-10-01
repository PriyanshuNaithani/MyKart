import React from "react";
function Button({className, ...rest}){
  return(
      <div>
        <button
          {...rest}
          className={"bg-primary-500 hover:bg-primary-600 text-white px-10 py-2.5 ml-2  rounded-md font-sans font-bold text-sm leading-4 " + className}>
            
					</button>
      </div>
    );
}
export default Button;