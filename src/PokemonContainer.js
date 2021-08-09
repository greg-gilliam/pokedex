import React, { Component } from 'react';
import './App.css';
import PokeList from './PokeList.js'


class PokemonContainer extends Component {
  state = { data: [], loading: true, query: null, sortOrder: 'asc' };

  componentDidMount() {
    this.fetchData();
  };

  fetchData = async() => {
    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex";
    let searchParams = new URLSearchParams();


    if(this.state.query){
      searchParams.set('pokemon', this.state.query);
    }
    if (this.state.sortOrder) {
      searchParams.set('sort', 'pokemon');
      searchParams.set('direction', this.state.sortOrder);
    }
    
    url = url + `?${searchParams.toString()}`;

    let response = await fetch(url);
    let data = await response.json();

    this.setState({ data: data.results, loading: false });
  };

  updateQuery = (event)=>{
   this.setState({ query: event.target.value });
}
  updateSort = (event)=>{
    this.setState({sortOrder: event.target.value });
  }

  render() { 
    return(
      <>
        <h1>Pokemon!!</h1>
        {this.state.loading && <h3> LOADING!! </h3>}
        {!this.state.loading && (
          <section>
            <select onChange={this.updateSort}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <input onChange={this.updateQuery} type="text"></input>
            <button onClick={this.fetchData}>Search!</button>
            <PokeList characters={this.state.data} />
          </section>
        )}
      </>
    );
  }
}
 
export default PokemonContainer;