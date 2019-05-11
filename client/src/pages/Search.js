import React from 'react';
import Wrapper from '../components/Wrapper';
import SearchForm from '../components/SearchForm';
import Modal from '../components/Modal'
import ResultContainer from '../components/ResultContainer';
import ResultCard from '../components/ResultCard';
import ResultFail from '../components/ResultFail';

class Search extends React.Component {
  
  state = {
    
    hasResults: false,
    showResults: false,
    search: "",
    results: []
  }

  showModal = () => {
    this.setState({ showResults: true });
  }
  
  hideModal = () => {
    this.setState({ showResults: false });
  }

  updateSearchTerm = (event) => {

    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  fetchData = (event) => {

    event.preventDefault();
    
    if(!this.state.search){
      console.log("No search term :(")
    } else {
      const url = "http://localhost:3001/api/search/" + this.state.search;

      fetch(url)
      .then(res => res.json())
      .then(
        (results) => {
          console.log(results)
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

    if(!this.state.hasResults){
      return(
        <Wrapper>
          <SearchForm
            fetchData={this.fetchData}
            updateSearchTerm={this.updateSearchTerm}
            name="search"
            value={this.state.search}
          />
          <Modal>
            <ResultContainer>
              <ResultFail />
            </ResultContainer>
          </Modal>
        </Wrapper>
      )
    } else {
      return (
        <Wrapper>
          <SearchForm
            fetchData={this.fetchData}
            updateSearchTerm={this.updateSearchTerm}
            name="search"
            value={this.state.search}
          />
          <Modal>
            <ResultContainer>
              {this.state.results.map(result =>
              <ResultCard
                key={this.state.results.indexOf(result)}
                commonName={result.common_name}
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