import React, { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './collection-item.styles.scss';
import { cartActions } from '../../redux/reducer';
import { useDispatch } from 'react-redux';

const CollectionItem = () => {
  //dispatch reducer
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const { filteredData } = useSelector((state) => state.filter);
  const { searchKey, category } = useSelector((state) => state.shopping);
  const navigate = useNavigate();

  console.log(filteredData)
  // filter item with categories
  const categoriesItem = data?.filter((item) => {
    if (category === ' ') {
      return item;
    } else {
      return item.category === category;
    }
  });

  // filter item with search
  const searchResult = data.filter((value) => {
    if (searchKey === '') {
      return value;
    } else if (value.name.toLowerCase().includes(searchKey.toLowerCase())) {
      return value;
    }
  });

  //dispatch function add to cart
  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  //set data to show after filter
  const [showData, setShowData] = useState();
  
  
  useEffect(() => {
    if (searchKey === '') {
      setShowData(categoriesItem);
    } else {
      setShowData(searchResult);
    }
  }, [searchKey]);

  return (
    <div className="collection">
      {filteredData?.map((item, index) => (
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
            <div className="addToCart-icon" onClick={() => handleAddToCart(item)}>
              <FaCartPlus />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionItem;
