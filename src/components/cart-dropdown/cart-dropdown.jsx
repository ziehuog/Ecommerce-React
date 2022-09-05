import React from 'react';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown" style={{ display: `${props.display}` }}>
      <div className='dropdown-list'>Information</div>
      <div className='dropdown-list'>Setting</div>
      <div className='dropdown-list'>Logout</div>
    </div>
  );
};

export default CartDropdown;
