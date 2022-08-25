import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ data }) => {
  const uniqueCategories = data?.filter(
    (value, index, self) =>
      self.findIndex((m) => m.category === value.category) === index
  );

  console.log(uniqueCategories);
  return (
    <>
      {uniqueCategories?.map((data, index) => (
        <div key={index} className="menu-item ">
          <div className="background-image">
            <img src={`${data.image}`} alt="" />
          </div>
          <div className="content">
            <h1 className="title">{data.category}</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuItem;
