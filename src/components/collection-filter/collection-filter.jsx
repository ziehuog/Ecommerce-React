import React, { useState } from 'react';
import './collection-filter.style.scss';
import { BsSearch } from 'react-icons/bs';
import { BiArrowFromTop, BiArrowFromBottom } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { actions, filterActions } from '../../redux/reducer';
import { dataService } from '../../shares/dataService';

function CollectionFilter() {
  const data = dataService.data
  const dispatch = useDispatch();

  const arrCategories = data?.filter(
    (value, index, self) => self.findIndex((item) => item.category === value.category) === index
  );

  const sortAscending = () => {
    // const fakeData = [...data];
    // const newData = fakeData?.sort(function(item1, item2) {return item1.price - item2.price} );
    dispatch(filterActions.sortWithPrice(function(item1, item2) {return item1.price - item2.price}));
  };

  const sortDescending = () => {
    // const fakeData = [...data];
    // const newData = fakeData?.sort((item1, item2) => item2.price - item1.price);
    dispatch(filterActions.sortWithPrice(function(item1, item2) {return item1.price - item2.price}));
  };

  const typingInput = (e) => {
    dispatch(actions.addSearchKey(e.target.value));
  };

  return (
    <div className="filter">
      <h2>Search</h2>
      <div className="search__input">
        <input type="text" name="" id="" onChange={(e) => typingInput(e)} />
        <span>
          <BsSearch />
        </span>
      </div>
      <h2>Sort</h2>
      <div className="filter-price">
        <label htmlFor="price">Price : </label>
        <button className="btn-sort" onClick={sortAscending}>
          <BiArrowFromBottom />
        </button>
        <button className="btn-sort" onClick={sortDescending}>
          <BiArrowFromTop />
        </button>
      </div>
      <div className="filter-category">
        <h3 htmlFor="">Categories</h3>
        {arrCategories?.map((data) => (
          <div key={data.id}>
            <input type="checkbox" name={data.category} id={data.category} />
            <label htmlFor={data.category}>{data.category}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionFilter;
