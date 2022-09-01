import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { cartAcions } from '../../redux/reducer';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const { cartStore } = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const sum = cartStore
    ?.map((item) => item.price * item.cartQuantity)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  console.log(sum);

  const removeItem = (item) => {
    dispatch(cartAcions.removeItem(item))
  }

  const decreaseItem = (item) => {
    dispatch(cartAcions.decreaseQuantity(item))
  }

  const increaseItem = (item) => {
    dispatch(cartAcions.increaseQuantity(item))
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      <div>
        {cartStore?.map((item) => (
          <CheckoutItem
            key={item.id}
            image={item.image}
            name={item.name}
            quantity={item.cartQuantity}
            price={item.price}
            onClick={() => removeItem(item)}
            decrease={() => decreaseItem(item)}
            increase={() => increaseItem(item)}
          />
        ))}
      </div>
      <div className="total">
        <span>TOTAL: ${sum}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
