import React, { Component } from 'react';
import '../styles/AppBody.css';

import { updateDatabase, carDatabaseApiRequest, showErrorDatabase } from '../actions/database-action'
import { carMakesApiRequest } from '../actions/makes-action'
import { vehicleApiRequest } from '../actions/vehicle-action'
import { connect } from 'react-redux'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       reveal_database: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSelectMakeForm = this.handleSelectMakeForm.bind(this)
    this.handleSelectVehicleForm = this.handleSelectVehicleForm.bind(this)
  }

  async handleClick(){
    await this.props.onDatabaseApiRequest()
    .then( async() => await this.setState({reveal_database:true}))
    
  }

  async handleSelectMakeForm(event){
    const _make = event.target.value
    await this.setState({select_make:_make})
    await this.props.onMakesApiRequest(_make)
  }

  async handleSelectModelForm(event){
    const _model = event.target.value
    await this.setState({select_model:_model})
    await this.props.onModelApiRequest(_model)
  }

  async handleSelectVehicleForm(event){
    const _model = event.target.value
    await this.setState({select_model:_model})
    await this.props.onVehicleApiRequest(this.state.select_make,_model)
  }

  render() {
    let carData, selectMake = ''
    // let x = this.props.car_data ? carData = this.props.car_data : null;
    // let y = this.props.select_make.length  ? selectMake = this.props.select_make : null;
    
    let carItems, makeItems = []
    return (
          <div className="form-selection"  data-test="form-selection" >
            <form>
              {this.props.car_data === "ERROR!!"
                ?
                  <div onClick={this.handleClick} className={"error"}> OOPs API Error. try again </div>
                :
                <select onChange={this.handleSelectMakeForm}>
                  {carItems = this.props.car_data.map( (res, i) => {
                    return <option className={"select-option"} value={res} key={i}>{res}</option>
                })}
                </select>
              } 
              {!this.props.select_make.length
                ?
                    null
                :
                  <div>{this.props.select_make === "ERROR!!"
                  ?
                    <div className={"error"}> OOPs API Error. try again </div>
                  :
                    <select onChange={this.handleSelectVehicleForm}>
                      {carItems = this.props.select_make.map( (res, i) => {
                          return <option value={res} key={i}>{res}</option>
                      })}
                    </select>
                }</div>
              }
            </form> 
            </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return{
    car_data: state.car_data,
    select_make: state.select_make
  }
}

const mapDispatchToProps = {
    onUpdateDatabase: updateDatabase,
    onDatabaseApiRequest: carDatabaseApiRequest,
    onMakesApiRequest: carMakesApiRequest,
    onVehicleApiRequest: vehicleApiRequest,
    onShowError: showErrorDatabase
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
