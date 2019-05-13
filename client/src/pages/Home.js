import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from '../components/Nav/index';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import LoginModal from '../components/LoginModal/index';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modalShow: false,
        }
      }
    render() {
        return (
            <div>
                <div>
                    <Nav></Nav>
                </div>
                <div className="App">
                    <LoginModal />
                </div>
            </div>
        )
    }

}