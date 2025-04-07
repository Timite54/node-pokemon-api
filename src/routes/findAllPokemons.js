const {Pokemon} = require('../db/sequelize')

module.exports = async (app) => {
    app.get('/api/pokemons', async (req, res) => {
        await Pokemon.findAll()
            .then(pokemons => {
             const message = 'Liste des pokemons recupéré avec succès'
            res.json({message, data: pokemons})
        })
    })
}