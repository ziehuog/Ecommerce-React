import React from "react";

import "./custom-input.styles.scss";

const FormInput = (props) => (
  <div className="group">
    <label>
      {props.label}
      <input
        className="form-input"
        value={props.value}
        onChange={props.onChange}
        type={props.type}
      />
    </label>
  </div>
);

export default FormInput;
