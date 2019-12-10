import React, { Component } from 'react';
import '../styles/AppBody.css';

import Form from './Form'

import { updateDatabase, carDatabaseApiRequest, showErrorDatabase } from '../actions/database-action'
import { carMakesApiRequest } from '../actions/makes-action'
import { connect } from 'react-redux'

export class AppBody extends Component {
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


export default connect(mapStateToProps, mapDispatchToProps)(AppBody);
