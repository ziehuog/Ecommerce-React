import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../redux/reducer';

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // logout function
  const logout = () => {
    localStorage.removeItem('username');
    dispatch(userActions.LogOut(false))
    navigate('/');
    console.log('out')
  }
  return (
    <div className="cart-dropdown" style={{ display: `${props.display}` }}>
      <div className='dropdown-list'>Information</div>
      <div className='dropdown-list'>Setting</div>
      <div className='dropdown-list' onClick={logout}>Logout</div>
    </div>
  );
};

export default CartDropdown;
