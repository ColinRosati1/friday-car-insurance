import React, { Component } from 'react';
import '../styles/AppBody.css';

import { updateDatabase, carDatabaseApiRequest, showErrorDatabase } from '../actions/database-action'
import { carMakesApiRequest } from '../actions/makes-action'
import { connect } from 'react-redux'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       reveal_database: false,
       select_make: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(){
    await this.props.onDatabaseApiRequest()
    .then( () => this.setState({reveal_database:true}))
    
  }
  
  render() {
    let carData, selectMake = ''
    let x = this.props.car_data ? carData = this.props.car_data : null;
    let y = this.props.select_make ? selectMake = this.props.select_make : null;
    
    let carItems, makeItems = []
    console.log(this.props)
    return (
          <div className="form-selection">
            <form>
              <select onChange={this.handleSelectMakeForm}>
              {carItems = this.props.car_data.map( (res, i) => {
                  return <option value={res} key={i}>{res}</option>
              })}
              </select>

              <select></select>
              <input type="button" value="search"></input>
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
    onShowError: showErrorDatabase
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
