import { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList.js'


class App extends Component {
  state = { data: [], loading: true, query: null, sort: '' };

  fetchData = async() => {
    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex";
    if(this.state.query){
      url = url + `?pokemon=${this.state.query}`;
    }
    let response = await fetch(url);
    let data = await response.json();

    this.setState({ data: data.results, loading: false });
  };

  updateQuery = (event)=>{
   this.setState({ query: event.target.value });
}
componentDidMount() {
  this.fetchData();
};

  render() { 
    return(
      <>
        <h1>Pokemon!!</h1>
        {this.state.loading && <h3> LOADING!! </h3>}
        {!this.state.loading && (
          <section>
            <input onChange={this.updateQuery} type="text"></input>
            <button onClick={this.fetchData}>Search!</button>
            <CharacterList characters={this.state.data} />
          </section>
        )}
      </>
    );
  }
}
 
export default App;