import React from 'react';
import CustomButton from '../../shares/custom-button/custom-button..jsx';

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => {
  const goToCheckout = () => {};
  return (
    <div className="cart-dropdown" style={{ display: `${props.display}` }}>
      <div className="cart-items">
        <span className="empty-message">Your cart is empty</span>
      </div>
      <CustomButton name="GO TO CHECKOUT" onclick={goToCheckout} />
    </div>
  );
};

export default CartDropdown;
