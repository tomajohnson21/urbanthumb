import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from '../components/Nav/index';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import LoginModal from '../components/LoginModal/index';
import Wrapper from '../components/Wrapper';
import ControlledCarousel from '../components/Carousel';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modalShow: false,
        }
      }
    render() {
        return (
            <Wrapper>

                <h1>Title</h1>
                <h5><i>slogan or more filler text.....</i></h5>
                
                <ControlledCarousel />

                <LoginModal />
            </Wrapper>
        )
    }

}

export default Home;