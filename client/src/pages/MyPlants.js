import React from 'react';
import Card from 'react-bootstrap/Card';
import rosetest from '../assets/rosetest.jpg';
import MyPlantCard from '../components/MyPlantsCard';
import Wrapper from '../components/Wrapper';

class MyPlants extends React.Component {
    
    state = {

        hasResults: false,
        // showResults: false,
        // search: "",
        results: [
            {
                commonName: "Rose",
                latinName: "Plebeus Rosius",
                image: { rosetest },
                description: "this is a rose this is a rose this is a rose this is a rose this is a rose this is a rose this is a rose this is a rose this is a rose this is a rose this is a rose",

            }
        ],
    }

    render() {

        if (!this.state.hasResults) {
            return (
                <Wrapper>
                    {this.state.results.map(results =>
                    <MyPlantCard
                    commonName={results.commonName} 
                    latinName={results.latinName}
                    image={results.image}
                    description={results.description}
                    />)}
                </Wrapper>

            )
        }
    }
}

export default MyPlants;