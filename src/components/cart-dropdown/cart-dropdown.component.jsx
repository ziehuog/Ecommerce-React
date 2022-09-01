import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../shares/custom-button/custom-button.jsx';
import CartItem from '../cart-item/cart-item.jsx';

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => {
  const { cartStore } = useSelector((state) => state.cart);
  console.log(cartStore);

  const navigate = useNavigate();
  return (
    <div className="cart-dropdown" style={{ display: `${props.display}` }}>
      <div className="cart-items">
        {/* <span className="empty-message">Your cart is empty</span> */}
        {cartStore?.map((item) => (
          <div key={item.id}>
            <CartItem
              image={item.image}
              name={item.name}
              quantity={item.cartQuantity}
              price={item.price}
            />
          </div>
        ))}
      </div>
      <CustomButton name="GO TO CHECKOUT" onClick={() => navigate('/checkout')} />
    </div>
  );
};

export default CartDropdown;
