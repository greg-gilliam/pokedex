import React, { Component } from 'react';

class PokeItem extends Component {
    render() { 
        return ( 
            <li>
                <h3>{this.props.character.pokemon}</h3>
            </li>
         );
    }
}
 
export default PokeItem