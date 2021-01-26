import React, { useState } from 'react'
import PokemonSearch from './PokemonSearch/PokemonSearch'
// import Loading from '../components/Loading/Loading'
import PokemonList from './PokemonList/PokemonList'

const Pokemon = () => {

return (
    <div>
        <h1> pokemon main component file</h1>
        <PokemonSearch />
        {/* <Loading /> */}
        <PokemonList />
    </div>
)
}

export default Pokemon