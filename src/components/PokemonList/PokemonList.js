import React, { useState } from 'react'
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay'

const PokemonList = () => {

    const [idNumber, setIdNumber] = useState(0)
    const [pokemon, setPokemon] = useState({
        name: "",
        id: "",
        img: "",
        type: ""
    })
    const [pokeData, setPokeData] = useState({})

    const getPokemonData = (pokemon) => {
        let url = pokemon.url
        fetch(url)
        .then(response => response.json())
        .then(pokeData => 
            setPokeData(pokeData)
            )
    }

    const PokemonDisplayData = (pokeData) => {
        return(
            <>
                {pokeData.map}
            </>
        )
    }
    const listPokemon = (e) => {
        
        e.preventDefault()
        
        let url = `https://pokeapi.co/api/v2/pokemon?limit=151`
        // console.log(idNumber)
    //    fetch(url)
    //    .then(response => response.json())
    //    .then(allPokemon => console.log(allPokemon))
        fetch(url).then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error ("dId YoU sPeLl It WrOnG sOn?")
            }})
            .then(data => {
                data.results.forEach( pokemon => {
                    getPokemonData(pokemon)
                })
                
            })
            .catch((error) => {
                console.log(error)

            })
        
    }

   

    

    return(
        <div>
            <button onClick={listPokemon}>fire</button>
            {/* <button onClick={updateId}>plus one</button> */}
            {/* <button onClick={listData}>list data func</button> */}
            
            <PokemonDisplay pokemon={pokemon} />

            {/* <h1>{pokemon.name}</h1>
            <p>{pokemon.id}</p>
            <p>{pokemon.type}</p>
            <img src={pokemon.img} /> */}
        </div>
    )
}

export default PokemonList