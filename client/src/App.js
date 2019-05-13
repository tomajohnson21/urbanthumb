import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search';
import NoMatch from './pages/NoMatch';
import TopNav from './components/Nav';
import Home from '../src/pages/Home';
import FooterPage from './components/Footer/index';
import LoginModal from './components/LoginModal';

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
            <TopNav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search}/>
              <Route exact path="/login" component={LoginModal}/>
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
