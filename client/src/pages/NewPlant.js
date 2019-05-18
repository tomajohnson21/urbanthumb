import React from 'react';
import Wrapper from '../components/Wrapper';
import SearchForm from '../components/SearchForm';
import Modal from '../components/Modal'
import ResultContainer from '../components/ResultContainer';
import ResultCard from '../components/ResultCard';
import ResultFail from '../components/ResultFail';
import PlantForm from '../components/PlantForm';
import { Redirect } from 'react-router-dom'

class Search extends React.Component {
  
  state = {
    
    hasResults: false,
    showResults: false,
    toMyPlants: false,
    search: "",
    common_name: "",
    scientific_name: "",
    water: "",
    shade_tolerance: "",
    toxicity: "",
    growth_period: "",
    results: []
  }

  showModal = () => {
    this.setState({ showResults: true });
  }
  
  hideModal = () => {
    this.setState({ showResults: false, hasResults: false });
  }

  handleChange = (event) => {


    const {name, value} = event.target;

    this.setState({
      [name]: value
    });

    console.log(this.state)
  }

  submitPlant = (event) => {

      event.preventDefault();
    
      let newPlant = {
        common_name: this.state.common_name,
        scientific_name: this.state.scientific_name,
        water: this.state.water,
        shade_tolerance: this.state.shade_tolerance,
        toxicity: this.state.toxicity,
        growth_period: this.state.growth_period
      }
      console.log(newPlant);

      fetch("/api/plants",
        {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newPlant)
        }
        )
      .then(res => res.json())
      .then(
        (results) => {
          console.log(results);

          this.setState({toMyPlants: true})
        },
        (error) => {
          console.log(error)
        }
      )
  }

  handlePlantClick = (plant_id) => {

    
    let url = "/api/plants/" + plant_id;

    fetch(url,
      {method: "POST"}
      )
    .then(res => res.json())
    .then(
      (results) => {
        console.log(results);

        this.setState({toMyPlants: true})
      },
      (error) => {
        console.log(error)
      }
    )
  }

  fetchData = (event) => {

    event.preventDefault();
    
    if(!this.state.search){
      console.log("No search term :(")
    } else {
      
      let url = "/api/search/" + this.state.search;

      fetch(url,
        {method: "GET"})
      .then(res => res.json())
      .then(
        (results) => {
          this.setState({
            results
          })

          if(this.state.results.length > 0){
            this.setState({
              hasResults: true
            })
          }

          this.showModal();
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

  render(){

    if(this.state.toMyPlants){
      return <Redirect to="/myplants" />
    }

    if(!this.state.hasResults){
      
      return(
        <Wrapper>
          <SearchForm
            fetchData={this.fetchData}
            updateSearchTerm={this.handleChange}
            name="search"
            value={this.state.search}
          />
          <br />
          <br />
          <br />
          <PlantForm 
                    handleChange={this.handleChange}
                    submitPlant={this.submitPlant}
                />
          <Modal
            handleClose={this.hideModal}
            show={this.state.showResults}
          >
            <ResultContainer>
              <ResultFail 
                search={this.state.search}
              />
            </ResultContainer>
          </Modal>
        </Wrapper>
      )
    } else {

      return (
        <Wrapper>
          <SearchForm
            fetchData={this.fetchData}
            updateSearchTerm={this.handleChange}
            name="search"
            value={this.state.search}
          />
          <br />
          <br />
          <br />
          <PlantForm 
            handleChange={this.handleChange}
            submitPlant={this.submitPlant}
            commonName={this.state.common_name}
            scientificName={this.state.common_name}
            toxicity={this.state.toxicity}
            water={this.state.water}
            growthPeriod={this.state.growth_period}
          />
          <Modal
          handleClose={this.hideModal}
          show={this.state.showResults}>
            <ResultContainer>
              {this.state.results.map(result =>
              <ResultCard
                key={this.state.results.indexOf(result)}
                handlePlantClick={this.handlePlantClick}
                plant_id={result.id}
                commonName={result.common_name}
                completeData={result.complete_data}
                scientificName={result.scientific_name}
                href={result.link}
              />)}
            </ResultContainer>
          </Modal>
        </Wrapper>
      )
    }
  }
}

export default Search;