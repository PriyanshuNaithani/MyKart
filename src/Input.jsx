import React from "react";
import FormikHOC from "./FormikHOC";

function Input({ name, label, id, className, touched, error, ...rest }) {

  return (
    <div>
      <label
        htmlFor={id} className="sr-only"
      >{label}
      </label>
      <input
        className={"placeholder:text-gray-150 border border-gray-50 p-1.71 bg-gray-100 " + className}
        name={name}
        id={id}
        {...rest} />
      {touched && error && (
        <div className="text-primary-500">{error}</div>
      )}
    </div>
  );
}
export const FormikInput = FormikHOC(Input);
export default Input;