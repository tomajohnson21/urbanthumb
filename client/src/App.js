import React from 'react';
import Wrapper from './components/Wrapper';
import Search from './components/Search';
import ResultContainer from './components/ResultContainer';

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
        (result) => {
          console.log(result)
          this.setState({
            hasResults: true
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
          <ResultContainer hasResults={this.state.hasResults} />
        </Wrapper>
      )
    }

}

}

export default App;
