import React, { Component } from 'react';
import '../styles/AppBody.css';

import CarItem from './CarItem'

import { updateDatabase, carDatabaseApiRequest, showErrorDatabase } from '../actions/database-action'
import { connect } from 'react-redux'

export class AppBody extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       reveal_history: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(){
    await this.props.onHistoryApiRequest()
    .then( () => this.setState({reveal_history:true}))
    
  }
  
  render() {
    let carData = this.props.car_data
    let carItems = []
    
    return (
      <div className="app-body" onClick={this.handleClick}>
      <header className="app-body-header">
        History
      </header>
      {
        (this.state.reveal_history === false
          ?
            <div> Search Cars </div>
          :
            CarItems = car.map( res => {
                console.log("cars", res)
              return <CarItem title={"title"} details={"details"} />
            })
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
