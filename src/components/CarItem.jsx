import React, { Component } from 'react';
import '../styles/AppBody.css';
import { connect } from 'react-redux'
import { showCarModal }  from '../actions/modal-action'

export class CarItem  extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      key: props.model
    }

    this.vehicalModal = this.vehicalModal.bind(this)
  }
  vehicalModal(event){
    console.log("vehicle modal", this.props.model, event.currentTarget.children)
    let vehicleObj = '';
    let arr = event.currentTarget.children
    let sel = document.querySelectorAll("."+ this.props.model)
    console.log(arr, sel)
    const vehicleArry =  arr.map( (res, i) => {
      return vehicleObj = { ...event.currentTarget.children[i].textContent }
    })
    
    console.log(vehicleObj)
    console.log(vehicleArry)
    const usersCar = {
    vehicleArry
    }
  
    // this.props.onShowCarModal(vehicleArry)
  }
  

  render(){
    const {make, model, enginePowerPS, enginePowerPW, fuelType, bodyType, engineCapacity, key} = this.props
  
    return (
      // <div className="car-item" onClick={this.vehicalModal}>
      <div className="car-item" data-test="car-item" >
        <div className={"car "+this.props.model+" car-item-make"}>{make}</div>
        <div className={"car "+this.props.model+" car-item-model"}>{model}</div>
        <div className={"car "+this.props.model+" car-item-enginePowerPS"}>{enginePowerPS}</div>
        <div className={"car "+this.props.model+" car-item-enginePowerPW"}>{enginePowerPW}</div>
        <div className={"car "+this.props.model+" car-item-fuelType"}>{fuelType}</div>
        <div className={"car "+this.props.model+" car-item-bodyType"}>{bodyType}</div>
        <div className={"car "+this.props.model+" car-item-engineCapacity"}>{engineCapacity}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return{
    car_data: state.car_data,
    select_make: state.select_make,
    select_vehicle: state.select_vehicle
  }
}

const mapDispatchToProps = {
    onShowCarModal: showCarModal
}

export default connect(mapStateToProps, mapDispatchToProps)(CarItem);