import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../redux/dataSlice";
import "./menu-item.styles.scss";

const MenuItem = () => {
  const { data, loading, message } = useSelector((state) => state.data);
  const navigate = useNavigate();
  // const dispatch = useDispatch()



  console.log(message, data);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      {data.length > 0 &&
        data
          ?.filter(
            (value, index, self) =>
              self.findIndex((item) => item.category === value.category) ===
              index
          )
          .map((data, index) => (
            <div key={index} className="menu-item ">
              <div className="background-image">
                <img src={`${data.image}`} alt="" />
              </div>
              <div className="content" onClick={() => navigate("/shop")}>
                <h1 className="title">{data.category}</h1>
                <span className="subtitle">SHOP NOW</span>
              </div>
            </div>
          ))}
    </>
  );
};

export default MenuItem;
