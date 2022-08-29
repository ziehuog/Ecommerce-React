import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-shop-removebg-preview.png';
import { BsSearch } from 'react-icons/bs';
import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt="" />
      </Link>

      <div className="options">
        <div>
          <BsSearch />
        </div>
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/shop">
          CONTACT
        </Link>

        <div className="option">SIGN OUT</div>

        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      </div>

      <CartIcon />
    </div>
  );
};

export default Header;
