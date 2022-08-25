import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';

import { useEffect, useState } from 'react';
import './collection-item.styles.scss';


const CollectionItem = () => {
   

    const [DATA, setDATA] = useState()
    useEffect(() => {
      
      fetch(`https://course-api.com/react-store-products`)
      .then(res => res.json())
      .then(users => setDATA(users))
  }, [])
  console.log(DATA)
    return (
      <div className="collection-item">
        
        <div
          className="image"
          
        />
        <div className="collection-footer">
          <span className="name"> name</span>
          <span className="price">price </span>
        </div>

        <CustomButton  inverted>Add to cart</CustomButton>
      </div>
    );
}



export default CollectionItem;