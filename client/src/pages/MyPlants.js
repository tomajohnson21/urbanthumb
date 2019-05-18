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
        .then(res => res.json)
        .then((results) => {
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
                    {this.state.results.map(results =>
                    <MyPlantCard
                        commonName={results.commonName} 
                        latinName={results.latinName}
                        image={results.image}
                        description={results.description}
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