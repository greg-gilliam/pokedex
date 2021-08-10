import React, { Component } from 'react';

import PokeItem from './PokeItem.js'

class PokeList extends Component {
    render() { 
        return ( 
            <div className="poke-list">
                {this.props.characters.map((char) => {
                    return <PokeItem key={char.pokemon} character={char} />;
                })}
            </div>
         );
    }
}
 
export default PokeList;