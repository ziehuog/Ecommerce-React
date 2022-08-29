import React, { useState } from 'react';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const CartIcon = () => {
  const [showDropdown, setShowDropdown] = useState('none');

  return (
    <div
      className="cart-icon"
      onClick={() => {
        showDropdown === 'none' ? setShowDropdown('block') : setShowDropdown('none');
      }}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> </span>
      <CartDropdown display={showDropdown} />
    </div>
  );
};

export default CartIcon;
