import React from "react";

import { useSelector } from "react-redux";
import "./collection-item.styles.scss";

const CollectionItem = () => {
  const { data, loading, message } = useSelector((state) => state.data);

  return (
    <div className="collection">
      {data?.map((data, index) => (
        <div key={index} className="collection-item">
          <div className="background-image">
            <img src={`${data.image}`} alt="" />
          </div>
          <div className="content">
            <span> Name: {data.name}</span>
            <h1 className="collection">category: {data.category}</h1>
            <span className="subtitle">Price: ${data.price}</span>
          </div>
        </div>
      ))}
      {/* <CustomButton>Add to cart</CustomButton> */}
    </div>
  );
};

export default CollectionItem;
