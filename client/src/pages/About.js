import React from 'react';
import '../App.css';
import AboutCard from '../components/AboutCard';
import styled from 'styled-components';

const NewWrapper = styled.div`
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

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <NewWrapper>
            <AboutCard />
            </NewWrapper>
        )
    }
}

export default About;