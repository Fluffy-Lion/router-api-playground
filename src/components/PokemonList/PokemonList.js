import React, { useState, useEffect } from 'react'
import { getAllPokemon, getPokemon } from '../../services/pokemon'
import Loading from '../Loading/Loading'
import './PokemonList.css'
import anime from 'animejs'

import Anime from 'react-anime'

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

        const next = async () => {
            setLoading(true)
            let data = await getAllPokemon(nextUrl)
            await loadingPokemon(data.results)
            setNextUrl(data.next)
            setPrevUrl(data.previous)
            setLoading(false)
        }
        const prev = async () => {
            if (!prevUrl) return
            setLoading(true)
            let data = await getAllPokemon(prevUrl)
            await loadingPokemon(data.results)
            setNextUrl(data.next)
            setPrevUrl(data.previous)
            setLoading(false)
        }

        const loadingPokemon = async (data) => {
            let pokemonData = await Promise.all(data.map(async pokemon => {
                let pokemonRecord = await getPokemon(pokemon.url)
                return pokemonRecord
            }))
            setPokemonData(pokemonData)

        }
useEffect(() => {

    anime({
        targets: '.pokemonImg',
        rotateZ: 360,
        delay: anime.stagger(100)

    })

})

    const PokemonListDisplay = ({ pokemon }) => {
        return (
            <div className="listItem">
                <Anime className="list"
                //  {...anime}
                 >
                    <p className="pokemonName">{pokemon.name}</p>
                    <p className="pokemonId">{pokemon.id}</p>
                    <img className="pokemonImg" src={pokemon.sprites.front_default}/>
                </Anime>
            </div>
        )
    }

    return(
        <div>
           {
           loading ? <Loading /> : (
                <div className="listComponent">
                    <div className="buttonWrapper">
                        <Anime>
                            <button className="buttonPrev" onClick={prev}>prev</button>
                            <button className="buttonNext" onClick={next}>next</button>
                        </Anime>
                    </div>
                    <div className="listWrapper">
                        {pokemonData.map((pokemon, index) => {
                            return <PokemonListDisplay key={index} pokemon={pokemon} />
                        })}
                    </div>
                </div>
             )
           }
        </div>
    )
}

export default PokemonList