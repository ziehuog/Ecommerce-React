import React, { useState } from 'react';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
  // const [showDropdown, setShowDropdown] = useState('none');
  const navigate = useNavigate()

  return (
    <div
      className="cart-icon"
      onClick={() => navigate('/checkout')}
      // onClick={() => {
      //   showDropdown === 'none' ? setShowDropdown('block') : setShowDropdown('none');
      // }}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> </span>
      {/* <CartDropdown display={showDropdown} /> */}
    </div>
  );
};

export default CartIcon;
