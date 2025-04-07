const {Pokemon} = require('../db/sequelize')

module.exports = async (app) => {
    app.get('/api/pokemons/:id', async (req, res) =>{
        await Pokemon.findByPk(req.params.id)
            .then(pokemon => {
                const message = `Le pokemon avec l'id ${req.params.id} a bien été trouvé`
                res.json({message, data: pokemon})
            }).catch(error => pokemon === null ? console.log(error): console.log('perfect'))
    })
}