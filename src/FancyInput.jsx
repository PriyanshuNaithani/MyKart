import React from "react";
import FormikHOC from "./FormikHOC";

function FancyInput({ name, label,  id, className, touched, error, ...rest }) {

  return (
    <div>
      <label
        htmlFor={id} className="sr-only"
      >{label}
        </label>
      <input
        className={"placeholder:text-gray-150 rounded-md border-t-4 border-b-4 border-sky-extradark p-2.5 bg-gray-100 w-80 " + className}
        name={name}
        id={id}
        {...rest}/>
      {touched && error && (
        <div className="text-primary-500">{error}</div>
      )}
    </div>
  );
}
export const FormikFancyInput = FormikHOC(FancyInput);
export default FancyInput;