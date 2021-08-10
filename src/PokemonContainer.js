import React, { Component } from 'react';
import './App.css';
import PokeList from './PokeList.js'


class PokemonContainer extends Component {
  state = { 
      data: [], 
      loading: true, 
      query: null, 
      sortOrder: 'asc',
      page: 1,
      lastPage: 1,
    };

  componentDidMount() {
    this.fetchData();
  };

  fetchData = async() => {
    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex";
    let searchParams = new URLSearchParams();
    searchParams.set('page', this.state.page);


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
    const lastPage = Math.ceil(data.count / data.perPage);

    this.setState({ data: data.results, loading: false, lastPage });
  };

  updateQuery = (event)=>{
   this.setState({ query: event.target.value });
}
  updateSort = (event)=>{
    this.setState({sortOrder: event.target.value });
  }

  nextPage = async () =>{
      await this.setState({ page: this.state.page + 1});
      this.fetchData();
  };

  prevPage = async () =>{
    await this.setState({ page: this.state.page - 1});
    this.fetchData();
};

goToLast = async () => {
    await this.setState({ page: this.state.lastPage });
    this.fetchData();
};

searchPokemon = async()=>{
    await this.setState({page: 1})
    this.fetchData();
};

  render() { 
    const { loading, sortOrder } = this.state;
    return(
      <>
        <h1>Pokemon!!</h1>
        <div className="search-controls">
            <select defaultValue={sortOrder} onChange={this.updateSort}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <input onChange={this.updateQuery} type="text"></input>
            <button onClick={this.searchPokemon}>Search!</button>
        </div>
        <div className="page-controls">
            {this.state.page > 1 &&  (
            <button onClick={this.prevPage}>Prev</button>
            )}
            {this.state.page < this.state.lastPage && (
            <>
                <button onClick={this.nextPage}>Next</button>
                <button onClick={this.goToLast}>Last page</button>
            </>
            )}
        </div>
            {this.state.loading && <h3> LOADING!! </h3>}
        {!this.state.loading && (
          <section>
            <PokeList characters={this.state.data} />
          </section>
        )}
      </>
    );
  }
}
 
export default PokemonContainer;