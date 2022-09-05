import React from 'react';
import { useParams } from 'react-router-dom';
import CollectionFilter from '../../components/collection-filter/collection-filter';
import CollectionItem from '../../components/collection-item/collection-item';

import '../shop/shop.style.scss'

const ShopPage = () => {
  let { details } = useParams();

  return (
    <div className="shop-page">
      <div className="display-filter">
        <CollectionFilter />
      </div>
      <div className="display-items">
        <CollectionItem />
      </div>
    </div>
  );
};

export default ShopPage;
