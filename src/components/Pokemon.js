import React, { useState } from 'react'
import PokemonSearch from './PokemonSearch/PokemonSearch'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState("")
    const [mainImg, setMainImg] = useState("")


   const findDitto = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => {
        setPokemon(data.name)
        setMainImg(data.sprites.front_default)
    })
    }
return (
    <div>
        <h1> pokemon component file</h1>
        <button onClick={() => findDitto()}>find ditto</button>
        <h1>{pokemon}</h1>
        <img src={mainImg} />
        <PokemonSearch />
    </div>
)
}

export default Pokemon