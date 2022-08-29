import React from 'react';
import { useParams } from 'react-router-dom';
import CollectionFilter from '../../components/collection-filter/collection-filter';
import CollectionItem from '../../components/collection-item/collection-item';

const ShopPage = () => {
  let { details } = useParams();
  console.log(details);

  return (
    <div className="shop-page">
      <CollectionFilter />
      <CollectionItem />
    </div>
  );
};

export default ShopPage;
