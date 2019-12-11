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
    if(nextProps.select_vehicle!==this.props.select_vehicle){
      // await this.setState({reveal_feed: true})
      setTimeout(async()=>{ await this.setState({reveal_feed: true})},100)
      // .then( async() => await this.setState({reveal_feed: true}}))
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
               {this.props.select_vehicle === "ERROR!!"
                ?
                  // <div onClick={this.handleClick}> OOPs API Error. try again </div>
                  <div className={"error"}> OOPs API Error. try again </div>
                :
                <div>{
                  carItems =  this.props.select_vehicle.map( (res, i) => {
                    return <CarItem key={i} id={i} make={res.make} model={res.model} enginePowerPS={res.enginePowerPS} enginePowerPW={res.enginePowerPW} fuelType={res.fuelType} bodyType={res.bodyType} engineCapacity={res.engineCapacity}/>
                  })
                }</div>
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
