import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewPlant from './pages/NewPlant';
import NoMatch from './pages/NoMatch';
import TopNav from './components/Nav';
import Home from '../src/pages/Home';
import FooterPage from './components/Footer/index';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUp/index';
import About from './pages/About';
import MyPlants from './pages/MyPlants';
import styled from 'styled-components';


import Background from './static/BGUrbanThumb.jpg';


const NewWrapper = styled.div`
background-image: url(${Background});
// background-repeat: no-repeat
// height: 500px;
background-size: cover;
// margin: auto, auto;
text-align: center;
// background-attachment: fixed;
// background-position: center; 
min-height: 100vh;
background-size: cover;
background-repeat: no-repeat;`

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    }
  }
  render() {
    return (
      <div>
       
        
        <Router>
            <NewWrapper>
            <TopNav />
            
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/newplant" component={NewPlant}/>
              <Route exact path="/login" component={LoginModal}/>
              <Route exact path='/signup' component={SignUpModal}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/myplants' component={MyPlants}/>
              <Route component={NoMatch} />
            </Switch>
            </NewWrapper>
        </Router>
        <FooterPage />
      </div>
      

    );
  }
}

export default App;
