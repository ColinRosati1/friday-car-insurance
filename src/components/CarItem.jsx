import React from 'react';
import '../styles/AppBody.css';

const CarItem = (props) => {
  const {make, model, enginePowerPS, enginePowerPW, fuelType, bodyType, engineCapacity} = props
 
  return (
    <div className="car-item">
      <div className="car-item-make">{make}</div>
      <div className="car-item-model">{model}</div>
      <div className="car-item-enginePowerPS">{enginePowerPS}</div>
      <div className="car-item-enginePowerPW">{enginePowerPW}</div>
      <div className="car-item-fuelType">{fuelType}</div>
      <div className="car-item-bodyType">{bodyType}</div>
      <div className="car-item-engineCapacity">{engineCapacity}</div>
    </div>
  );
}
 
export default CarItem
