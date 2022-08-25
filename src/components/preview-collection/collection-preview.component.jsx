import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = () => (
  <div className="collection-preview">
    <h1 className="title">title</h1>
    <div className="preview">
      <CollectionItem />
    </div>
  </div>
);

export default CollectionPreview;
