import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PokeItem.css';


class PokeItem extends Component {
    render() { 
        return ( 
            <li>
                <h3>
                    <Link to={`/pokemon/${this.props.character._id}`}>
                    {this.props.character.pokemon}
                    </Link>
                    </h3>
            </li>
         );
    }
}
 
export default PokeItem