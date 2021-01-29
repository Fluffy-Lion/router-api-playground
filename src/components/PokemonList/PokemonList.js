import React, { useState, useEffect } from 'react'
import { getAllPokemon, getPokemon } from '../../services/pokemon'
import Loading from '../Loading/Loading'
import './PokemonList.css'

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
                setPrevUrl(response.previous)
                setNextUrl(response.next)
                await loadingPokemon(response.results)
                setLoading(false)

            }
            fetchData()
        }, [])

        const loadingPokemon = async (data) => {
            let pokemonData = await Promise.all(data.map(async pokemon => {
                let pokemonRecord = await getPokemon(pokemon.url)
                return pokemonRecord
            }))
            setPokemonData(pokemonData)
        }
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
    const PokemonListDisplay = ({ pokemon }) => {
        return (
            <div className="listItem">
                <p>{pokemon.name}</p>
                <p>{pokemon.id}</p>
                <img src={pokemon.sprites.front_default}/>

            </div>
        )
    }

    return(
        <div>
           {
           loading ? <Loading /> : (
                <>
                    <div className="listWrapper">
                        {pokemonData.map((pokemon, index) => {
                            return <PokemonListDisplay key={index} pokemon={pokemon} />
                        })}
                    </div>
                </>
             )
           }
        </div>
    )
}

export default PokemonList