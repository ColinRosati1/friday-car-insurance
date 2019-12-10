import React, { Component } from 'react';
import '../styles/AppBody.css';

import CarItem from './CarItem'

import { updateDatabase, carDatabaseApiRequest, showErrorDatabase } from '../actions/database-action'
import { connect } from 'react-redux'

export class AppBody extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       reveal_database: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(){
    await this.props.onDatabaseApiRequest()
    .then( () => this.setState({reveal_database:true}))
    
  }
  
  render() {
    let carData = ''
    let x = this.props.car_data ? carData = this.props.car_data : null;
    
    let carItems = []
    console.log(this.props.car_data, this.state)
    
    return (
      <div className="app-body" onClick={this.handleClick}>
      <div className="app-body-header">
        Car Data
      </div>
      {
        (this.state.reveal_database === false
          ?
            <div> Search Cars </div>
          :
          <div className="form-selection">
            <form >
            <select>
              {carItems = carData.map( res => {
                  console.log("cars", res)
                  return <option value={res}>{res}</option>
              })}
            </select>
              <input type="button" value="search"></input>
            </form> 

          </div>
            // carItems = carData.map( res => {
            //     console.log("cars", res)
            //   return <CarItem make={"make"} model={"model"} enginePowerPS={"enginePowerPS"} enginePowerPW={"enginePowerPW"} fuelType={"fuelType"} bodyType={"bodyType"} engineCapacity={"engineCapacity"} />
            // })
        )
      }
    </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return{
    car_data: state.car_data,
  }
}

const mapDispatchToProps = {
    onUpdateDatabase: updateDatabase,
    onDatabaseApiRequest: carDatabaseApiRequest,
    onShowError: showErrorDatabase
}


export default connect(mapStateToProps, mapDispatchToProps)(AppBody);
