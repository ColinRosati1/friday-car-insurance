import React from 'react';
import Modal from 'react-modal';
import { showCarModal }  from '../actions/modal-action'
import { connect } from 'react-redux'
import '../styles/AppBody.css';

 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    padding               : ' 1em',
    transform             : 'translate(-50%, -50%)',
    width                 : '80%',
    height                : '60%',
    background            : 'white',
    color                 : 'black',
    fontsize              : '1.5em'
  }
};
 
Modal.setAppElement(document.getElementById('root'));
 
class SelectCarModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this)
  }
 
  openModal() {
       this.setState({modalIsOpen: true})
  }
 
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    // Modal.setAppElement('body');
 }
 
  // Modal reacts to updata selected mission props
  // using outdated react effect for the time being. I realize this is depricated
  componentWillReceiveProps(nextProps){
    console.log("new car props",this.props.users_vehicle,this.props)
    if(nextProps.users_vehicle!==this.props.users_vehicle){
      console.log("new car props")
      this.openModal()
    }
  }

  // send mission and user input to imaginary API
  handleModalSubmit(event){
    event.preventDefault()
    const eData = new FormData(event.target) // grat the target
    const name = eData.get('name') //get the input data
    const formData = {
      'user_car': name,
    }
    const url = 'http://localhost:8080/api/insurance' // make a fake api which would query insurance based on selected car
    fetch(url, {
      type: "POST",
      data: formData
    })
    .then(res => console.log("imaginary API response",res))
  }


  render() {
   let car = ''
   const {make, model, enginePowerPS, enginePowerPW, fuelType, bodyType, engineCapacity} = this.props.users_vehicle
  console.log("props", this.props.users_vehicle)
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button className={"modal-button"} onClick={this.closeModal}>close</button>
          <div className="modal-wrapper">
            <div>{this.props.users_vehicle[0]}</div>
            <div>{this.props.users_vehicle[1]}</div>
            <div>{this.props.users_vehicle[2]}</div>
            <div>{this.props.users_vehicle[3]}</div>
            <div>{this.props.users_vehicle[4]}</div>
            <div>{this.props.users_vehicle[5]}</div>
            <div>{this.props.users_vehicle[6]}</div>
          </div>
            <form onSubmit={this.handleModalSubmit}>
            <label className="modal-form">See insurance offers</label>
            <input type="submit" value="search" />
          </form>
        </Modal>
      </div>
    );
  }
}
 
const mapStateToProps = (state, props) => {
    return{
      users_vehicle: state.users_vehicle,
    }
  }
  
  const mapDispatchToProps = {
      onShowCarModal:  showCarModal
  }

export default connect(mapStateToProps, mapDispatchToProps)(SelectCarModal)