import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PokeItem.css';

class PokeItem extends Component {
    render() { 
        const { character } = this.props;
        return ( 
                    <Link to={`/pokemon/${this.props.character._id}`} 
                    className="poke-card">
                    <div className="pokemon">
                        {character.pokemon}
                        <img src={character.url_image} alt="pokemon" />
                        </div>
                    </Link>
         );
    }
}
 
export default PokeItem