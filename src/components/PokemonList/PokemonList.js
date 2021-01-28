import React, { useState } from 'react'
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay'
import PokemonMulti from '../PokemonMulti/PokemonMulti'

const PokemonList = () => {
    const [pokemons] = useState([
        {id: 1, name: "bulbasaur"},
        {id: 2, name: "charmander"},
        {id: 3, name: "squirtle"}
    ])
    const getPokemonData = (pokemonreq) => {
        let url = pokemonreq.url
        fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data.name)
        })
    }


    const listPokemon = (e) => {
        
        e.preventDefault()
        
        let url = `https://pokeapi.co/api/v2/pokemon?limit=151`

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
            <h2>pokemon list</h2>
            {pokemons.map((pokemon) =>
               <div key={`${pokemon.id} - ${pokemon.name}`}>
                   <p>{pokemon.id}</p>
                   <p>{pokemon.name}</p>
               </div> )}
        </div>
    )
}

export default PokemonList