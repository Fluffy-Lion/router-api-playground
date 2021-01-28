export let getAllPokemon = async (url) => {
    return new Promise((ressolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            ressolve(data)
        })
    })
}

