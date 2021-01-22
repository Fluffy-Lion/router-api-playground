import React, { useState } from 'react'
import './PokemonSearch.css'
import Loading from '../Loading/Loading'

const PokemonSearch = () => {
    const [userSearch, setUserSearch] = useState("")
    const [pokemonResult, setPokemonResult] = useState("")

    const [pokemon, setPokemon] = useState({
        name: "",
        id: "",
        img: "",
        type: ""
    })
    const searchPokemon = (e) => {
        e.preventDefault()
        let url = `https://pokeapi.co/api/v2/pokemon/${userSearch}`
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPokemon({
                name: data.name,
                id: data.id,
                img: data.sprites.front_default,
                type: data.types[0].type.name
            })
            console.log(data)
        })

    }

    return (
        <div className="searchBarWrapper">
        <Loading />
            <h1> search</h1>
            <form onSubmit={searchPokemon}> 
                <input 
                    type="text"
                    value={userSearch}
                    onChange={(e) => 
                        {setUserSearch(e.target.value)}
                    }
                />
                <button>submit</button>
            </form>
            
            <p>{userSearch}</p>
            <p>search api result</p>
            <p>{pokemon.name}</p>
            <p>{pokemon.id}</p>
            <p>{pokemon.type}</p>
            <img src={pokemon.img} />
        </div>
    )
}

export default PokemonSearch