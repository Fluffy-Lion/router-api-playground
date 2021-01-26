import React, { useState } from 'react'

const PokemonList = () => {

    const [idNumber, setIdNumber] = useState(0)

    const listPokemon = () => {

        let url = `https://pokeapi.co/api/v2/nature/${idNumber}/`
        
    }

    return(
        <h1>pokemon list component</h1>

    )
}

export default PokemonList