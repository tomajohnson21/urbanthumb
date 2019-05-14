import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./style.css";
import { FacebookLoginButton } from 'react-social-login-buttons';

export default class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: true,name: '',email :'' ,password: ''};

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({team: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({country: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
     }


  render() {
    return (

        <div>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Sign up</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-4">
            <label>Username:</label>
            <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" placeholder="Username..."/>
              </div>
              </div>
            <div className="row">
             <div className="form-group col-md-4">
            <label>Email:</label>
                <input type="text" value={this.state.email} onChange={this.handleChangeEmail} className="form-control" placeholder="Email..."/>
               </div>
              </div>
            <div className="row">
             <div className="form-group col-md-4">
              <label>Password:</label>
                <input type="password" value={this.password} onChange={this.handleChangePassword} className="form-control" placeholder="Password..."/>
               </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <div>
            Already have an account? <a href='/login'> Log in </a>
            </div>
            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          <FacebookLoginButton />
          </form>
        </Modal>
        </div>
      
    );
  }
}