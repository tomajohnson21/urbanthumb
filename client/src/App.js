import React from 'react';
import Wrapper from './components/Wrapper';
import Search from './components/Search';
import ResultContainer from './components/ResultContainer';
import ResultCard from './components/ResultCard'

class App extends React.Component {
  
  state = {
    
    hasResults: false,
    search: "",
    results: []
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
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

  render(){

    if(!this.state.hasResults){
      return (
        <Wrapper>
          <Search fetchData={this.fetchData}
            updateSearchTerm={this.updateSearchTerm}
            name="search"
            value={this.state.search}
          />
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Search 
            fetchData={this.fetchData}
            updateSearchTerm={this.updateSearchTerm}
            name="search"
            value={this.state.search}
          />
          <ResultContainer>
            {this.state.results.map(result =>
            <ResultCard
              key={this.state.results.indexOf(result)}
              commonName={result.common_name}
              scientificName={result.scientific_name}
              href={result.link}
            />)}
          </ResultContainer>
        </Wrapper>
      )
    }

}

}

export default App;
