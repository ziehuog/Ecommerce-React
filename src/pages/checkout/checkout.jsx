import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { cartActions } from '../../redux/reducer';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const { cartStore } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const sum = cartStore
    ?.map((item) => item.price * item.cartQuantity)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  console.log(sum);

  const removeItem = (item) => {
    dispatch(cartActions.removeItem(item));
  };

  const decreaseItem = (item) => {
    dispatch(cartActions.decreaseQuantity(item));
  };

  const increaseItem = (item) => {
    dispatch(cartActions.increaseQuantity(item));
  };

  return (
    <>
      <table className="checkout-page">
        <tr className="checkout-header">
          <th className="header-block">
            <span>Product</span>
          </th>

          <th className="header-block">
            <span>Description</span>
          </th>

          <th className="header-block">
            <span>Quantity</span>
          </th>

          <th className="header-block">
            <span>Price</span>
          </th>

          <th className="header-block">
            <span>Remove</span>
          </th>
        </tr>

        <tbody>
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
        </tbody>
      </table>
      <div className="total">
        <span>TOTAL: ${sum}</span>
      </div>
    </>
  );
};

export default CheckoutPage;
