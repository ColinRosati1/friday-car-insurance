import React from 'react';
import '../styles/AppBody.css';

function CarItem(props) {
  const {title, details} = props
  return (
    <div className="car-item">
      <div className="car-item-title">{title}</div>
      <div className="car-item-details">{details}</div>
    </div>
  );
}

export default CarItem;
