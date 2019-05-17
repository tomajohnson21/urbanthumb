import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./style.css";
import { FacebookLoginButton } from 'react-social-login-buttons';

export default class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: true, newUser: {email :'' ,password: '',confirm: ''}};

    this.toggle = this.toggle.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateConfirm = this.validateConfirm.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChangeEmail(event) {
    let newUser = this.state.newUser;
    newUser.email = event.target.value;
    this.setState({newUser});
    console.log(this.state.newUser);
  }

  handleChangePassword(event) {
    let newUser = this.state.newUser;
    newUser.password = event.target.value;
    this.setState({newUser});
    console.log(this.state.newUser);
  }

  handleChangeConfirm(event){
    let newUser = this.state.newUser;
    newUser.confirm = event.target.value;
    this.setState({newUser})
    console.log(this.state.newUser);
  }
  
  handleSubmit(event) {
    
    event.preventDefault();
    if(this.validateForm()){
      fetch("/user/auth/register",
      {method: "POST",
      body: this.state.newUser})
      .then(
        res => res.json()
      )
      .then(
        (results) =>{
          console.log(results)
        },
        (error) =>{
          console.log(error);
        })

    } else {
      console.log("Email: " + this.state.newUser.email + "\nPassword: " + this.state.newUser.password + "\nConfirm: " + this.state.newUser.confirm);
    }
  }

  validateForm(){

    if(!this.validateEmail()){
      return false;
    } else if(!this.validatePassword()){
      return false;
    } else if(!this.validateConfirm()){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(){
    //let email = this.state.email;

    if(!this.state.newUser.email){
      return false;
    }else if(!this.state.newUser.email.includes("@")){
      return false;
    } else {
      return true;
    }
  }

  validatePassword(){
    if(!this.state.newUser.password){
      return false;
    } else if(!this.state.newUser.password.length >= 8){
      return false
    } else {
      return true;
    }
  }

  validateConfirm(){
    if(!this.state.newUser.confirm === this.state.newUser.password){
      return false;
    } else {
      return true;
    }
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
            <label>Email:</label>
                <input type="text" value={this.state.email} onChange={this.handleChangeEmail} className="form-control" placeholder="Email..."/>
               </div>
              </div>
            <div className="row">
             <div className="form-group col-md-4">
              <label>Password:</label>
                <input type="password" value={this.state.password} onChange={this.handleChangePassword} className="form-control" placeholder="Password..."/>
               </div>
              </div>
              <div className="row">
             <div className="form-group col-md-4">
              <label>Confirm Password:</label>
                <input type="password" value={this.state.confim} onChange={this.handleChangeConfirm} className="form-control" placeholder="Confirm Password..."/>
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