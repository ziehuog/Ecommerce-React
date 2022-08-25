import React from "react";
import CustomButton from "../custom-button/custom-button.component.jsx";

import { useEffect, useState } from "react";
import "./collection-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";

const CollectionItem = () => {

  const {data, loading} = useSelector(state => state.data)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [])

  // const [DATA, setDATA] = useState();
  // useEffect(() => {
  //   fetch(`https://course-api.com/react-store-products`)
  //     .then((res) => res.json())
  //     .then((users) => setDATA(users));
  // }, []);
  // console.log(DATA);
  return (
    <div className="collection-item">
      {data?.map((data, index) => (
        <div key={index}>
          <div className="image">
            <img src="" alt="" />
          </div>

          <div className="collection-footer">
            <span className="name">{data.name}</span>
            <span className="price">{data.price} </span>
          </div>
        </div>
      ))}

      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  );
};

export default CollectionItem;
