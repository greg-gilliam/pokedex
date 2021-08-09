import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PokemonContainer from './PokemonContainer.js'
import Home from './Home.js'
import Header from './Header.js';
import PokeDetail from './PokeDetail.js'
import './App.css';



class App extends Component {
  render() {
   return (
   <section className="app">
     <BrowserRouter>
     <Header />
     <Switch>
       <Route path="/pokemon/:id" component={PokeDetail} />
       <Route path="/pokemon" component={PokemonContainer} />
       {/* <Route path="/" exact>
        <h2>All the Pokemon!</h2>
       </Route> */}
       <Route path="/" component={Home} />
     </Switch>
     </BrowserRouter>
   </section>
   );
  }
}

export default App;