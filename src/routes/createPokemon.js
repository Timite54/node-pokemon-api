const {Pokemon } = require('../db/sequelize')

module.exports = async (app) => {
    app.post('/api/pokemons', async (req, res) => {
        await Pokemon.create(req.body)
            .then(pokemon => {
                const message = `Le pokemon ${req.body.name}`
                res.json({message, data: pokemon})
            })
    })
}