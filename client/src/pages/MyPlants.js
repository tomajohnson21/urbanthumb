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

    imageUpload = (id, event) => {

        event.preventDefault();

        const files = event.target.files

        console.log(id);
        console.log(files)

        const formData = new FormData();

        const file = files[0];

        formData.append("image", file, file.name);

        console.log(formData);

        let url = "/api/plants/" + id;

        fetch(url, {
            method: 'PUT',
            body: formData
        })
        .then(res => res.json())
        .then(images => {
            console.log(images);
            this.loadPlants();
        })
    }

    render() {

        if (this.state.hasResults) {
            return (
                <Wrapper>
                    {this.state.results.map(plant =>
                    <MyPlantCard
                        key={plant._id}
                        id={plant._id}
                        commonName={plant.common_name} 
                        scientificName={plant.scientific_name}
                        growthPeriod={plant.growth_period}
                        water={plant.water}
                        toxicity={plant.toxicity}
                        shadeTolerance={plant.shade_tolerance}
                        imageUrl={plant.image_url}
                        imageUpload={this.imageUpload}
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