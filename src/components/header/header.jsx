import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-shop-removebg-preview.png';
import CartIcon from '../cart-icon/cart-icon.component';

import { useSelector } from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import './header.styles.scss';

const Header = () => {
  const [showDropDown, setShowDropDown] = useState('none');

  const { cartStore } = useSelector((state) => state.cart);

  const counter = cartStore
    ?.map((item) => item.cartQuantity)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  const handleShowDropdown = () => {
    showDropDown === 'none' ? setShowDropDown('block') : setShowDropDown('none');
  };
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt="" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/shop">
          CONTACT
        </Link>

        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      </div>
      <div className="user-container">
        <div className="cart">
          <CartIcon />
          <span>
            <div>{counter}</div>
          </span>
        </div>
        <div className="user-manager" onClick={() => handleShowDropdown()}>
          <FaUserCircle />
        </div>
      </div>
      <CartDropdown display={showDropDown} />
    </div>
  );
};

export default Header;
