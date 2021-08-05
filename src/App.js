import { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList.js'


class App extends Component {
  state = { data: [], loading: true };

  fetchData = async() => {
    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    this.setState({ data: data.results, loading: false });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() { 
    return(
      <>
        <h1>Pokemon!!</h1>
        {this.state.loading && <h3> LOADING!! </h3>}
        {!this.state.loading && (
          <CharacterList characters={this.state.data} />
        )}
      </>
    );
  }
}
 
export default App;