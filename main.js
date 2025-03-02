const express = require('express');
const  morgan = require('morgan');
let pokemons = require('./mock-pokemon');
const{success} = require('./helper');

const app = express();
const port = 2000;

app.use(morgan('dev'));

app.get("/api/pokemons/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find((pokemon) => pokemon.id === id);
    const message = "Un pokemon a été touvé !"
    res.json(success(message, pokemon));
})

app.get("/api/pokemons", (req, res) => {
    const allPokemons = pokemons
    const message = "La liste complète des pokemons"
    res.json(success(message, allPokemons));

})

app.listen(port, () => {
    console.log(`Listening on : http://localhost:${port}`);
})