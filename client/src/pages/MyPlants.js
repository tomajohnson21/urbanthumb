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
                commonName: "Sansevieria",
                latinName: "Sansevieria hyacinthoides",
                image: { rosetest },
                description: "There is great variation within the genus, and species range from succulent desert plants such as Sansevieria pinguicula to thinner leafed tropical plants such as Sansevieria trifasciata. Plants often form dense clumps from a spreading rhizome or stolons.",

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