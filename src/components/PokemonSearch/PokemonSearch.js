import React, { useState } from 'react'
import './PokemonSearch.css'
import Loading from '../Loading/Loading'
import PokemonDisplay from '../Loading/PokemonDisplay'


const PokemonSearch = () => {

    // let loaded = false
    const [loading, setLoading] = useState(true)
    const [userSearch, setUserSearch] = useState("")
    // const [pokemonResult, setPokemonResult] = useState("")

    const [pokemon, setPokemon] = useState({
        inputMatch: false,
        name: "",
        id: "",
        img: "",
        type: ""
    })
    const searchPokemon = (e) => {
        setLoading(false)
        e.preventDefault()
        let url = `https://pokeapi.co/api/v2/pokemon/${userSearch}`
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPokemon({
                inputMatch: true,
                name: data.name,
                id: data.id,
                img: data.sprites.front_default,
                type: data.types[0].type.name
            })
            console.log(data)
           
        })
        setTimeout(() => (setLoading(true)), 2000)
    }
    // const loader =(pokemon) => {
    //     console.log(pokemon.inputMatch === true ? true : false)
    // }
    

    return (
        <div className="searchBarWrapper">
       

        
        
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
  
            
           { loading ? 
           <div>
                <p>{userSearch}</p>
                <p>search api result</p>
                <PokemonDisplay pokemon={pokemon}/>
            </div> 
            : <h1>loading...</h1>           }

        </div>
    )
}

export default PokemonSearch