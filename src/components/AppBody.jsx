import React, { Component } from 'react';
import '../styles/AppBody.css';

import Form from './Form'
import CarItem from './CarItem'

import { updateDatabase, carDatabaseApiRequest, showErrorDatabase } from '../actions/database-action'
import { carMakesApiRequest } from '../actions/makes-action'
import { connect } from 'react-redux'

export class AppBody extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       reveal_database: false,
       reveal_feed: false,
       select_make: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(){
    await this.props.onDatabaseApiRequest()
    .then( () => this.setState({reveal_database:true}))
    
  }
  
  async componentWillReceiveProps(nextProps){
    console.log("next props", this.props)
    if(nextProps.select_vehicle!==this.props.select_vehicle){
      console.log("next props", nextProps.select_vehicle)
      await this.setState({reveal_feed: true})
      console.log(this.state)
      // this.openModal()
    }
  }
  

 
  render() {
    let carItems ='';
    return (
      <div className="app-body" >
      <div className="app-body-header">
        Car Types
      </div>
      {
        (this.state.reveal_database === false
          ?
            <div className="app-body-search-car" onClick={this.handleClick}> Search Cars </div>
          :
          <Form/>
        )
      }
      {
        (this.state.reveal_feed === false
          ?
            null
          :
            <div>
              {
                carItems = this.props.select_vehicle.map( (res, i) => {
                  console.log(res)
                  return <CarItem key={i} make={res.make} model={res.model} enginePowerPS={res.enginePowerPS} enginePowerPW={res.enginePowerPW} fuelType={res.fuelType} bodyType={res.bodyType} engineCapacity={res.engineCapacity}/>
                })
              }
            </div>
            
        )
      }
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
    onUpdateDatabase: updateDatabase,
    onDatabaseApiRequest: carDatabaseApiRequest,
    onMakesApiRequest: carMakesApiRequest,
    onShowError: showErrorDatabase
}


export default connect(mapStateToProps, mapDispatchToProps)(AppBody);
