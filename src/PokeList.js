import React, { Component } from 'react';

import PokeItem from './PokeItem.js'

class PokeList extends Component {
    render() { 
        return ( 
            <ul>
                {this.props.characters.map((char) => {
                    return <PokeItem key={char.pokemon} character={char} />;
                })}
            </ul>
         );
    }
}
 
export default PokeList;