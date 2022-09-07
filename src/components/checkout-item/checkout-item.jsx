import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = (props) => {
  return (
    <tr className="checkout-item">
      <td className="image-container">
        <img src={props.image} alt="item" />
      </td>
      <td className="name">{props.name}</td>
      <td className="quantity">
        <div className="arrow" onClick={props.decrease}>&#10094;</div>
        <span className="value">{props.quantity}</span>
        <div className="arrow" onClick={props.increase}>&#10095;</div>
      </td>
      <td className="price">{props.price}</td>
      <td className="remove-button" onClick={props.onClick}>&#10005;</td>
    </tr>
  );
};

export default CheckoutItem;
