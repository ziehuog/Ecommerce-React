import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-shop-removebg-preview.png';
import CartIcon from '../cart-icon/cart-icon.component';

import { useSelector } from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import './header.styles.scss';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducer';

const Header = () => {
  // const [showDropDown, setShowDropDown] = useState('none');
  const { cartStore } = useSelector((state) => state.cart);
  const { showUser, showLogin} = useSelector((state) => state.user)
  const dispatch = useDispatch()
  //count the quantity of items in the cart
  const counter = cartStore
    ?.map((item) => item.cartQuantity)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);


  //show dropdown
  // const handleShowDropdown = () => {
  //   showDropDown === 'none' ? setShowDropDown('block') : setShowDropDown('none');
  // };


  // display when login 
  useEffect(() => {
    if(localStorage.getItem('username') !== ''){
      dispatch(userActions.Login(true))
  
    }
  }, [])
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

        <Link className="option" to="/signin" style={{ display: `${showLogin}` }}>
          Sign in/Sign up
        </Link>
      </div>
      <div className="user-container">
        <div className="cart">
          <CartIcon />
          <span>
            <div>{counter}</div>
          </span>
        </div>

        <div
          className="user-manager"
          style={{ display: `${showUser}` }}>
          <FaUserCircle />
        </div>
      </div>
      <div className="drop-down">
      <CartDropdown  />
      </div>
    </div>
  );
};

export default Header;
