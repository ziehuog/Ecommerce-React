import React, { useState } from 'react';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
  const navigate = useNavigate();

  return (
    <div className="cart-icon" onClick={() => navigate('/checkout')}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> </span>
    </div>
  );
};

export default CartIcon;
