import React from "react";
import CustomButton from "../custom-button/custom-button.component.jsx";

import { useEffect, useState } from "react";
import "./collection-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/dataSlice.jsx";

const CollectionItem = () => {
  const {data, loading, message} = useSelector((state) => state.data)
  const dispatch = useDispatch()
  
  useEffect(()=> {
    dispatch(fetchData())
  }, [])
  
  console.log(message, data)

  return (
    <div className="collection-item">
      <button >click</button>
      {/* {data?.map(data => (
        <div key={data.id}> {data.name}</div>
      ))} */}
      {/* {data?.map((data, index) => (
        <div key={index}>
          <div className="image">
            <img src="" alt="" />
          </div>

          <div className="collection-footer">
            <span className="name">{data.name}</span>
            <span className="price">{data.price} </span>
          </div>
        </div>
      ))} */}

      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  );
};

export default CollectionItem;
