import React, { Component } from 'react';

import CharacterItem from './CharacterItem.js'

class CharacterList extends Component {
    render() { 
        return ( 
            <ul>
                {this.props.characters.map((char) => {
                    return <CharacterItem key={char.pokemon} character={char} />;
                })}
            </ul>
         );
    }
}
 
export default CharacterList;