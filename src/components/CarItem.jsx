import React, { Component } from 'react';
import '../styles/AppBody.css';
import { connect } from 'react-redux'
import { showCarModal }  from '../actions/modal-action'

export class CarItem  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.i
    }

    this.vehicalModal = this.vehicalModal.bind(this)
  }
  vehicalModal(event){
    let id = this.props.id
    let sel = document.querySelectorAll(".id"+ this.props.id)
    const vehicleArry =  [...sel]
    const obj = vehicleArry.map(res => {
      return res.innerText
    })
  
    this.props.onShowCarModal(obj)
  }
  

  render(){
    const {make, model, enginePowerPS, enginePowerPW, fuelType, bodyType, engineCapacity, id} = this.props
    return (
      <div className="car-item" data-test="car-item" onClick={this.vehicalModal}>
        <div className={"car id"+id+" car-item-make"}>{make}</div>
        <div className={"car id"+id+" car-item-model"}>{model}</div>
        <div className={"car id"+id+" car-item-enginePowerPS"}>{enginePowerPS}</div>
        <div className={"car id"+id+" car-item-enginePowerPW"}>{enginePowerPW}</div>
        <div className={"car id"+id+" car-item-fuelType"}>{fuelType}</div>
        <div className={"car id"+id+" car-item-bodyType"}>{bodyType}</div>
        <div className={"car id"+id+" car-item-engineCapacity"}>{engineCapacity}</div>
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