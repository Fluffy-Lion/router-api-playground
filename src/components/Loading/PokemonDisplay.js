import React from 'react'

const PokemonDisplay = (props) => {
 
    return (
    <div>

            <div>
                <h1>pokemon display component</h1>
                    <p>{props.pokemon.name}</p>
                    <p>{props.pokemon.id}</p>
                    <p>{props.pokemon.type}</p>
                    <img src={props.pokemon.img} />
            </div> 
        
    </div>
    )

}

export default PokemonDisplay