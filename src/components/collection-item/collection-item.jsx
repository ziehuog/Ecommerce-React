import React, { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './collection-item.styles.scss';
import { cartActions } from '../../redux/reducer';
import { dataService } from '../../shares/dataService';

const CollectionItem = () => {
  //dispatch reducer
  const dispatch = useDispatch();
  const { sortCondition } = useSelector((state) => state.filter);
  const { searchKey, category } = useSelector((state) => state.shopping);
  const navigate = useNavigate();
  console.log(sortCondition)
  const data = dataService.data

  // filter item with categories
  const categoriesItem = data?.filter((item) => {
    if (category === ' ') {
      return item;
    } else {
      return item.category === category;
    }
  });

  // filter item with search
  const searchResult = data
    .filter((value) => {
      if (searchKey === '') {
        return value;
      } else if (value.name.toLowerCase().includes(searchKey.toLowerCase())) {
        return value;
      }
    })
    .sort(sortCondition);

  //dispatch function add to cart
  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  //set data to show after filter
  const [showData, setShowData] = useState();

  // useEffect(() => {
  //   if (searchKey !== '') {
  //     setShowData(searchResult);
  //   } else if (filteredData !== []) {
  //     setShowData(filteredData);
  //   } else {
  //     setShowData(data);
  //   }
  // }, [searchKey || filteredData]);

  return (
    <div className="collection">
      {searchResult?.map((item, index) => (
        <div key={index} className="collection-container">
          <div className="collection-item" onClick={() => navigate(`/details/${item.id}`)}>
            <div className="background-image">
              <img src={`${item.image}`} alt="" />
            </div>
            <div className="item-content">
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
