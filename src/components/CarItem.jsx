import React from 'react';
import '../styles/AppBody.css';


/**
 *
 * @param {*} props
 * @returns make: string `// the make of the car`
 * @returns model: string `// the model of the car`
 * @returns enginePowerPS: number `// engine power in Horsepower units`
 * @returns enginePowerPW: number `// engine power in KiloWatts`
 * @returns fuelType: string `// fuel type`
 * @returns bodyType: string `// body type`
 * @returns engineCapacity: number `// engine capacity in cc`
 * 
 */
function CarItem(props) {
  const {title, details} = props
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

export default CarItem;
