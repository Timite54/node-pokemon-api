exports.success = (message, data) => {
    return {message, data}
}

exports.getPokeId = (pokemons) => {
    // Transforme pokemons[] en un tableau d'id de pokemon
    const pokemonsIds = pokemons.map(pokemon =>  pokemon.id)
    // calculcul l'id le plus grand parmi les id existant
    const maxId = pokemonsIds.reduce((a,b) => Math.max(a,b))
    // const maxId = Math.max.apply(Math, pokmonsIds);
    return maxId + 1
}



