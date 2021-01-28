export let getAllPokemon = async (url) => {
    return new Promise((ressolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            ressolve(data)
        })
    })
}

export let getPokemon = async (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data)
        })
    })
}