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
    await this.props.onMakesApiRequest(_make)
    console.log(this.props)
  }

  async handleSelectModelForm(event){
    const _model = event.target.value
    await this.setState({select_model:_model})
    console.log(_model)
    // await this.props.onModelApiRequest(_model)
  }
  
  render() {
    let carData, selectMake = ''
    let x = this.props.car_data ? carData = this.props.car_data : null;
    let y = this.props.select_make.length  ? selectMake = this.props.select_make : null;
    
    let carItems, makeItems = []
    console.log(this.props, this.props.select_make.length)
    return (
          <div className="form-selection">
            <form>
              <select onChange={this.handleSelectMakeForm}>
              {carItems = this.props.car_data.map( (res, i) => {
                  return <option value={res} key={i}>{res}</option>
              })}
              </select>
              {!this.props.select_make.length
                ?
                    null
                :
                    <select>
                        {carItems = this.props.select_make.map( (res, i) => {
                            return <option value={res} key={i}>{res}</option>
                        })}
                    </select>
                   
              }
              
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
