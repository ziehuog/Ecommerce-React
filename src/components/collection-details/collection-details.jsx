import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './collection-details.styles.scss';
import CustomButton from '../../shares/custom-button/custom-button';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/reducer';

const CollectionDetails = () => {
  const [item, setItem] = useState();
  const [mainColor, setMainColor] = useState();
  const { details } = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart(product))
  }

  useEffect(() => {
    const getDetails = async () =>{
      const response = await fetch(
        `https://course-api.com/react-store-single-product?id=${details}`
      );
      const data = await response.json();
      setItem(data);
    };
    getDetails();
  }, [details]);

  const checkImg = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="details-container">
        {/* display images */}
        <div className="details-img">
          <div className="display-img">
          <img src={item?.images[0]?.url} alt="" />

          </div>
          <div className="all-image">
          {item?.images?.map((image) => (
              <div key={image.id}>
                <img src={image.url} alt="" onClick={() => checkImg(image.id)} />
              </div>
            ))}
          </div>
          {/* <div className="btn-container">
            <div className="btn-next">
              <AiOutlineLeft />
            </div>
            <div className="btn-next">
              <AiOutlineRight />
            </div>
          </div> */}
        </div>

        {/* display description */}
        <div className="details-description">
          <h1 className="title">{item?.name}</h1>
          <div className="description">
            <span>Company: </span>
            {item?.company}
          </div>
          <div className="description">
            <span>Category: </span>
            {item?.category}
          </div>
          <div className="description">
            <span>Description: </span>
            {item?.description}
          </div>
          <h3 className="description">
            <span>Price: </span> ${item?.price}
          </h3>
          <div className="description">
            <span>Color: </span>
            {item?.colors?.map((color, index) => (
              <div key={index} className="colors">
                <button
                  key={index}
                  style={{ background: color }}
                  className={`${mainColor === color ? 'color-btn active' : 'color-btn'}`}
                  onClick={() => setMainColor(color)}>
                  {mainColor === color ? <FaCheck className="checkedIcon" /> : null}
                </button>
              </div>
            ))}
          </div>
          <CustomButton name="Add to cart" 
          
          onClick={() => handleAddToCart(item)}
          />
        </div>
      </div>

      <div className="other-items">{console.log(item)}</div>
    </>
  );
};
export default CollectionDetails;

//setSTATE(images[index])
