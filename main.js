const express = require("express");
const  morgan = require('morgan');
const favicon = require('serve-favicon')
const sequelize= require('./src/db/sequelize')



const app = express();
const port = 2000;

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(express.json())

sequelize.innitDB()

require('./src/routes/findAllPokemons')(app)
require('./src/routes/findPokemonByPk')(app)
require('./src/routes/createPokemon')(app)

app.listen(port, () => {
    console.log(`Listening on : http://localhost:${port}`);
})