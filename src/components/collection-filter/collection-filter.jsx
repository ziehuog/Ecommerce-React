import React, { useState } from 'react';
import './collection-filter.style.scss';
import { BsSearch } from 'react-icons/bs';
import { BiArrowFromTop, BiArrowFromBottom } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { actions, filterActions } from '../../redux/reducer';
import { dataService } from '../../shares/dataService';

function CollectionFilter() {
  const data = dataService.data;
  const dispatch = useDispatch();
  const { categoriesSelected } = useSelector((state) => state.filter);

  // unique category showing in options
  const uniqueCategories = data?.filter(
    (value, index, self) => self.findIndex((item) => item.category === value.category) === index
  ).map(item => item.category);

  //sort item with price
  const sortAscending = () => {
    dispatch(
      filterActions.sortWithPrice(function (item1, item2) {
        return item1.price - item2.price;
      })
    );
  };

  const sortDescending = () => {
    dispatch(
      filterActions.sortWithPrice(function (item1, item2) {
        return item2.price - item1.price;
      })
    );
  };

  // search input
  const typingInput = (e) => {
    dispatch(actions.addSearchKey(e.target.value));
  };

  //select categories
  const selectCategories = (e) => {
    const value = e.target.value;
    const arrCates = categoriesSelected?.includes(value)
      ? categoriesSelected.filter((option) => option !== value)
      : [...categoriesSelected, value];

    dispatch(filterActions.selectCategory(arrCates));
  };



console.log(categoriesSelected)
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
        {uniqueCategories?.map((category, index) => (
          <div key={index}>
            <input
              type="checkbox"
              value={category}
              id={category}
              onClick={selectCategories}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionFilter;
