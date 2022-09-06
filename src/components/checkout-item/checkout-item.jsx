import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = (props) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={props.image} alt="item" />
      </div>
      <span className="name">{props.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={props.decrease}>&#10094;</div>
        <span className="value">{props.quantity}</span>
        <div className="arrow" onClick={props.increase}>&#10095;</div>
      </span>
      <span className="price">{props.price}</span>
      <div className="remove-button" onClick={props.onClick}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
