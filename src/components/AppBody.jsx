import React, { Component } from 'react';
import '../styles/AppBody.css';

import CarItem from './CarItem'

import { updateDatabase, carDatabaseApiRequest, carMakesApiRequest, showErrorDatabase } from '../actions/database-action'
import { connect } from 'react-redux'

export class AppBody extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       reveal_database: false,
       select_make: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSelectMakeForm = this.handleSelectMakeForm.bind(this)
  }

  async handleClick(){
    await this.props.onDatabaseApiRequest()
    .then( () => this.setState({reveal_database:true}))
    
  }

  async handleSelectMakeForm(event){
    const _make = event.target.value
    await this.setState({select_make:_make})
    console.log(_make)
    // await this.props.onMakesApiRequest(_make)
  }
  
  render() {
    let carData = ''
    let x = this.props.car_data ? carData = this.props.car_data : null;
    
    let carItems = []
    console.log(this.props)
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
          <div className="form-selection">
            <form>
            <select onChange={this.handleSelectMakeForm}>
              {carItems = this.props.car_data.map( (res, i) => {
                  return <option value={res} key={i}>{res}</option>
              })}
            </select>
              <input type="button" value="search"></input>
            </form> 

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
  }
}

const mapDispatchToProps = {
    onUpdateDatabase: updateDatabase,
    onDatabaseApiRequest: carDatabaseApiRequest,
    onMakesApiRequest: carMakesApiRequest,
    onShowError: showErrorDatabase
}


export default connect(mapStateToProps, mapDispatchToProps)(AppBody);
