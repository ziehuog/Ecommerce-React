import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-shop-removebg-preview.png';
import { BsSearch } from 'react-icons/bs';
import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';
import { useSelector } from 'react-redux';

const Header = () => {

  const { cartStore } = useSelector((state) => state.cart);
  console.log(cartStore);

  const counter = cartStore
    ?.map((item) => item.cartQuantity)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  console.log(counter);
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
      <div className="cart">
        <CartIcon />
        <span>
          <div>{counter}</div>
        </span>
      </div>
    </div>
  );
};

export default Header;
