const {Sequelize, DataTypes} = require('sequelize')
const PokemonModel = require('../models/Pokemon')
const pokemons = require('./mock-pokemon')

const sequelize = new Sequelize('pokedex', 'root', '', {
    host: 'localhost',
    dialect:'mariadb',
    logging:false
})

const Pokemon = PokemonModel(sequelize, DataTypes)
const innitDB = async () => {
    await sequelize.authenticate()
        .then(_ =>
            console.log('Connection has been established successfully.')
        ).catch(error =>console.error('Unable to connect to the database:', error))
    await sequelize.sync({force: true})
        .then(_ => {
            console.log('All models were synchronized successfully.')
            pokemons.map(pokemon => {
                Pokemon.create({
                    name: pokemon.name,
                    hp: pokemon.hp,
                    cp: pokemon.cp,
                    picture: pokemon.picture,
                    types: pokemon.types
                }).then(bulbizarre => console.log(bulbizarre.toJSON()))
            })
        }).catch(error => console.log(error))
}

module.exports = { innitDB, Pokemon}
