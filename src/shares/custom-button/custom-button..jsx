import React from 'react';
import './custom-button.styles.scss';

const CustomButton = (props) => (
  <button className="custom-button" onClick={props.onClick}>
    {props.name}
  </button>
);

export default CustomButton;
