import React from 'react';
import './collectionsList.css';
import { Link } from 'react-router-dom';

const CollectionList = (props) => {
  return props.items.map((data) => {
    return <div key={data.id} className="collection-container">
      <div className="collection">{data.name}<Link to={`/mycollections/${data.id}`}><span><i className="fas fa-greater-than"></i></span></Link></div>
    </div>
  });
};

export default CollectionList;
