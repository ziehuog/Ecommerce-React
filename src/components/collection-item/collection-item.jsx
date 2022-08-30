import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './collection-item.styles.scss';
import { cartAcions } from '../../redux/reducer';
import { useDispatch } from 'react-redux';

const CollectionItem = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.data);
  const { category } = useSelector((state) => state.shopping);
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const categoriesItem = data?.filter((item) => {
    if (category === ' ') {
      return item;
    } else {
      return item.category === category;
    }
  });
  console.log(cart)

  return (
    <div className="collection">
      {categoriesItem?.map((item, index) => (
        <div key={index} className="collection-container">
          <div className="collection-item">
            <div className="background-image">
              <img src={`${item.image}`} alt="" />
            </div>
            <div className="item-content" onClick={() => navigate(`/details/${item.id}`)}>
              <h3 className="collection-title">Details</h3>
            </div>
          </div>
          <div className="item-info">
            <div>
              <div className="collection-title"> {item.name}</div>
              <div className="subtitle">Price: ${item.price}</div>
            </div>
            <div className="addToCart-icon" onClick={()=> {
              dispatch(cartAcions.addItems(item))
            }}>
              <FaCartPlus />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionItem;
