import React from 'react'
import './PokemonDisplay.css'

const PokemonDisplay = ({ pokemon }) => {
    console.log(pokemon)
    return (
    <div>

            <div>
                <h1>pokemon display component</h1>
                    <p>{pokemon.name}</p>
                    <p>{pokemon.id}</p>
                    <p>{pokemon.type}</p>
                    <img src={pokemon.img} />
            </div> 
        
    </div>
    )

}

export default PokemonDisplay