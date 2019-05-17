import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./style.css";
import { FacebookLoginButton } from 'react-social-login-buttons';

export default class LoginModal extends React.Component {
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

    
    fetch("/users/auth")
    }


  render() {
    return (

        <div>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
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
            Don't have an account? <a href='/signup'> Sign up </a>
            </div>
            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          <FacebookLoginButton />
          </form>
        </Modal>
        {/* <div className="row buttonRow">
        <div className="col-2"></div>
        <Button className='loginButton col-8' onClick={this.toggle}>Login</Button>
        </div> */}
        </div>
      
    );
  }
}