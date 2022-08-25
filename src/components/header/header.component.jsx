import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-shop-removebg-preview.png";

import CartIcon from "../cart-icon/cart-icon.component";

import "./header.styles.scss";

const Header = () => (
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

      <div className="option">SIGN OUT</div>

      <Link className="option" to="/signin">
        SIGN IN
      </Link>

      <CartIcon />
    </div>

    <p className="king">#169 2021</p>
  </div>
);

export default Header;
