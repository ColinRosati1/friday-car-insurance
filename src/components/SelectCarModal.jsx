import React from 'react';
import Modal from 'react-modal';
import { revealCarModal }  from '../actions/modal-action'
import { connect } from 'react-redux'

 
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
    height                : '30%',
    background            : 'black',
    color                 : 'white'
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
    if(nextProps.select_car!==this.props.select_car){
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
   if(this.props.select_car[0]){
     mission = this.props.select_car[0];
   }
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
          <form onSubmit={this.handleModalSubmit}>
          <label className="modal-form">See insurance offers
            <input type="text" name="name" />
          </label>
          <input type="submit" value="search" />
        </form>
        </Modal>
      </div>
    );
  }
}
 
const mapStateToProps = (state, props) => {
    return{
      car_data: state.database,
      select_car: state.select_car,
    }
  }
  
  const mapDispatchToProps = {
      onRevealCarModal: revealCarModal
  }

export default connect(mapStateToProps, mapDispatchToProps)(SelectCarModal)