import React from 'react';
import '../App.css';
import AboutCard from '../components/AboutCard';


class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            
            <AboutCard />
        )
    }
}

export default About;