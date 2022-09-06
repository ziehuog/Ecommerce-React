import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducer';
import { dataService } from '../../shares/dataService';

const MenuItem = () => {
  const { category } = useSelector((state) => state.shopping);
  const navigate = useNavigate();
  const dispatch = useDispatch();
const data = dataService.data

  return (
    <>
      {data.length > 0 &&
        data
          ?.filter(
            (value, index, self) =>
              self.findIndex((item) => item.category === value.category) === index
          )
          .map((data, index) => (
            <div key={index} className="menu-item">
              <div className="background-image">
                <img src={`${data.image}`} alt="" />
              </div>
              <div
                className="content"
                onClick={() => {
                  dispatch(actions.chooseCategory(data.category));
                  navigate('/shop');
                }}
              >
                <h1 className="title">{data.category}</h1>
                <span className="subtitle">SHOP NOW</span>
              </div>
            </div>
          ))}
    </>
  );
};

export default MenuItem;
