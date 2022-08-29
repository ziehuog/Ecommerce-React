import React from "react";

import { useSelector } from "react-redux";
import "./collection-item.styles.scss";

const CollectionItem = () => {
  const { data } = useSelector((state) => state.data);
  const { category} = useSelector((state) => state.shopping);

  const categoriesItem = data?.filter(item => item.category === category)


  return (
    <div className="collection">
      {categoriesItem?.map((data, index) => (
        <div key={index} className="collection-item">
          <div className="background-image">
            <img src={`${data.image}`} alt="" />
          </div>
          <div className="item-content">
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
