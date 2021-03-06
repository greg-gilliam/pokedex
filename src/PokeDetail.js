import React, { Component } from 'react';
import './PokeDetail.css'

class PokeDetail extends Component {
    state = {data: {}};

    loadData = async () =>{
        const { id } = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({ data });
    };

    componentDidMount(){
        this.loadData();
    }

    render() { 
        console.log(this.props.match);
        const { data } = this.state;
        return ( 
        <section>
                <h1>{data.pokemon}</h1>
                <img src={data.url_image} alt="pokemon" />
        </section> );
    }
}
 
export default PokeDetail;