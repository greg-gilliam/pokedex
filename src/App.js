import { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList.js'

class App extends Component {
  state = { data: [], loading: true, query: null  };

  fetchData = async () => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };
  componentDidMount(){
    this.fetchData();
  }

  render() { 
    return ( 
      <>
        <h1>Pokedex!</h1>
        <CharacterList characters={this.state.data} />
        </>
     );
  }
}
 
export default App;
