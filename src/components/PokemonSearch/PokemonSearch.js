import React, { useState } from 'react'
import './PokemonSearch.css'
// import Loading from '../Loading/Loading'
import PokemonDisplay from '../Loading/PokemonDisplay'
// import ErrorDisplay from '../ErrorDisplay/ErrorDisplay'

const PokemonSearch = () => {

    // let loaded = false
    const [loading, setLoading] = useState(true)
    const [userSearch, setUserSearch] = useState("")
    const [error, setError] = useState(false)

    const [pokemon, setPokemon] = useState({
        name: "",
        id: "",
        img: "",
        type: ""
    })
    const searchPokemon = (e) => {

        e.preventDefault()
        setLoading(false)

        //working call (tempermental)

                    // let url = `https://pokeapi.co/api/v2/pokemon/${userSearch}`
                    
                    // fetch(  
                    //     url
                    //     )
                    // .then(response => {

                    //     console.log(response)
                    //     //launch test error component
                    //     // response = false

                    //     if(response.ok) {
                    //         return response.json()
                    //     } else {
                    //         throw new Error ("dId YoU sPeLl It WrOnG sOn?")
                    //     }
            
                    // })

                    // .then(data => {
                    //     setPokemon({
                    //         name: data.name,
                    //         id: data.id,
                    //         img: data.sprites.front_default,
                    //         type: data.types[0].type.name
                    //     })
                        
                    // })
                    // .catch((error) => {
                    //     console.log(error)
                    //     setError(true)
                    // })

        //NO API CALLS, HARD CODED
        setPokemon({
            name: "pikachu",
            id: "25",
            img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            type: "electric"
        })
        
        setTimeout(() => (setLoading(true)), 1000)
    }

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
  
            
           { loading && error === false ? 
            <div>
                <p>{userSearch}</p>
                <p>search api result</p>
                <PokemonDisplay  pokemon={pokemon}/>
            </div> 

            : 

            error !== true ?
            <h1>loading...</h1> 
            :
            <h1>problem</h1>

            }

        </div>
    )
}

export default PokemonSearch