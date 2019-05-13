import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Home from '../src/pages/Home';
import LoginModal from './components/LoginModal/index';
import FooterPage from './components/Footer/index';

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
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search}/>
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        <FooterPage />
      </div>
      

    );
  }
}

export default App;
