import React, { useState } from 'react'

const PokemonList = () => {

    const [idNumber, setIdNumber] = useState(0)
    const [pokemon, setPokemon] = useState({
        name: "",
        id: "",
        img: "",
        type: ""
    })
    const updateId = () => {
        setIdNumber(idNumber + 1)
        console.log(idNumber)
    }
    const listPokemon = (e) => {
        
        e.preventDefault()
        
        let url = `https://pokeapi.co/api/v2/pokemon/${idNumber}`
        console.log(idNumber)
       
        fetch(url).then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error ("dId YoU sPeLl It WrOnG sOn?")
            }})
            .then(data => {
                setPokemon({
                    name: data.name,
                    id: data.id,
                    img: data.sprites.front_default,
                    type: data.types[0].type.name

                })
                
            })
            .catch((error) => {
                console.log(error)

            })

    }

    return(
        <div>
            <button onClick={listPokemon}>fire</button>
            <button onClick={updateId}>plus one</button>
            <h1>{pokemon.name}</h1>
            <p>{pokemon.id}</p>
            <p>{pokemon.type}</p>
            <img src={pokemon.img} />
        </div>
    )
}

export default PokemonList