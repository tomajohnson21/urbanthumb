import React from 'react';
import MyPlantCard from '../components/MyPlantsCard';
import Wrapper from '../components/Wrapper';
import NoPlants from '../components/NoPlants';

class MyPlants extends React.Component {
    
    state = {

        hasResults: false,
        results: []
    }

    componentDidMount() {
        
        this.loadPlants();
    }

    loadPlants = () => {
        fetch("/api/plants",
        {method: "GET"})
        .then(res => res.json())
        .then((results) => {
            console.log(results)
            this.setState({
              results
            })
  
            if(this.state.results.length > 0){
              this.setState({
                hasResults: true
              })
            }
          },
          (error) => {
            console.log(error)
          }
        )
    }

    render() {

        if (this.state.hasResults) {
            return (
                <Wrapper>
                    {this.state.results.map(plant =>
                    <MyPlantCard
                        commonName={plant.common_name} 
                        scientificName={plant.scientific_name}
                        growthPeriod={plant.growth_period}
                        water={plant.water}
                        toxicity={plant.toxicity}
                        shadeTolerance={plant.shade_tolerance}
                        image={plant.image}
                    />)}
                </Wrapper>

            )
        } else {
            return (
                <Wrapper>
                    <NoPlants />
                </Wrapper>
            )
        }
    }
}

export default MyPlants;