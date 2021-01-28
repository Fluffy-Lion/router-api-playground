import React, { useState, useEffect } from 'react'
import { getAllPokemon } from '../../services/pokemon'
// import PokemonDisplay from '../PokemonDisplay/PokemonDisplay'
// import PokemonMulti from '../PokemonMulti/PokemonMulti'

const PokemonList = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')
    const [loading, setLoading] = useState(true)
    const initialUrl = `https://pokeapi.co/api/v2/pokemon`
    // `https://pokeapi.co/api/v2/pokemon?limit=151`

    useEffect(() => {
            const fetchData = async () => {
                let response = await getAllPokemon(initialUrl)
                console.log(response)
                setPrevUrl(response.previous)
                setNextUrl(response.next)
                setLoading(false)

            }
            fetchData()
        }, [])

    

    // const listPokemon = (e) => {
        
    //     e.preventDefault()
        
        

    //     fetch(url).then(response => {
    //         if(response.ok) {
    //             return response.json()
    //         } else {
    //             throw new Error ("dId YoU sPeLl It WrOnG sOn?")
    //         }})
    //         .then(data => {
    //             data.results.forEach( pokemon => {
    //                 getPokemonData(pokemon)
    //             })
                
    //         })
    //         .catch((error) => {
    //             console.log(error)

    //         })
        
    // }

   
    return(
        <div>
           {loading ? <h1>loading ...</h1> : (
                <h1>data fetched</h1>
           )}
        </div>
    )
}

export default PokemonList