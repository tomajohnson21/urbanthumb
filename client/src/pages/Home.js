import React from 'react';
import Background from '../static/BGUrbanThumb.jpg';
import styled from 'styled-components';
import TopNav from '../components/Nav/index';

const NewWrapper = styled.div`
background-image: url(${Background});

background-size: 100%;

text-align: center;
 
min-height: 100vh;
background-size: cover;
background-repeat: no-repeat;
`

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modalShow: false,
        }
      }


    render() {
        return (
          <NewWrapper>
          <TopNav />
          </NewWrapper>
        )
    }

}

export default Home;