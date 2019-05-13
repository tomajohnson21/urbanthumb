import React from 'react';
import LoginModal from '../components/LoginModal/index';
import Wrapper from '../components/Wrapper';
import ControlledCarousel from '../components/Carousel';
import SignUpModal from '../components/SignUp/index';

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

                
            </Wrapper>
        )
    }

}

export default Home;