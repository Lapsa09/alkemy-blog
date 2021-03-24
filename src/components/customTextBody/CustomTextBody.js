import React from "react";
import "./customTextBody.css";

function CustomTextBody({ label, type, ...props }) {
  return (
    <label className="textInput">
      {label}
      <textarea type={type} {...props} />
    </label>
  );
}

export default CustomTextBody;
