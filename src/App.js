import { Component } from 'react';
import './App.css';
import PokeList from './PokeList.js'
import PokemonContainer from './PokemonContainer.js'


class App extends Component {
  render() {
   return <PokemonContainer />;
  }
}

export default App;