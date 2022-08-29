import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './collection-item.styles.scss';

const CollectionItem = () => {
  const { data } = useSelector((state) => state.data);
  const { category } = useSelector((state) => state.shopping);
  const navigate = useNavigate();

  const categoriesItem = data?.filter((item) => {
    if (category === ' ') {
      return item;
    } else {
      return item.category === category;
    }
  });

  console.log(categoriesItem);

  return (
    <div className="collection">
      {categoriesItem?.map((data, index) => (
        <div key={index} className="collection-container">
          <div className="collection-item">
            <div className="background-image">
              <img src={`${data.image}`} alt="" />
            </div>
            <div className="item-content" onClick={() => navigate(`/details/${data.id}`)}>
              <h3 className="collection-title">Details</h3>
            </div>
          </div>
          <div className="item-info">
            <div>
              <div className="collection-title"> {data.name}</div>
              <div className="subtitle">Price: ${data.price}</div>
            </div>
            <div className="addToCart-icon">
              <FaCartPlus />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionItem;
