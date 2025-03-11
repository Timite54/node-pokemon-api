const express = require('express');
const  morgan = require('morgan');
const favicon = require('serve-favicon');
let pokemons = require('./mock-pokemon');
const{success, getPokeId} = require('./helper');

const app = express();
const port = 2000;


app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(express.json())

app.get("/api/pokemons/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find((pokemon) => pokemon.id === id);
    const message = "Un pokemon a été touvé !"
    if (!pokemon) {
        res.json("Pokemon non touvé !")
    }
    res.json(success(message, pokemon));
})

app.get("/api/pokemons", (req, res) => {
    const allPokemons = pokemons
    const message = "La liste complète des pokemons"
    res.json(success(message, allPokemons));
})

app.post("/api/pokemons", (req, res) => {
    const uniqueID =  getPokeId(pokemons)
    const newPokemon = {
        id : uniqueID,
        ...req.body,
        ...{created : new Date()}
    }
    pokemons.push(newPokemon);
    const message = `Le pokemon ${newPokemon.name} a été crée avec succès`
    res.json(success(message, pokemons));
})

app.put("/api/pokemons/:id", (req, res) => {
    const pokemonID = parseInt(req.params.id);
    const pokemonIndex = pokemons.findIndex((el) => el.id ===pokemonID);
    if (pokemonIndex === -1){
        res.json({message: "Pokemon could not be found."})
    }
    pokemons[pokemonIndex] ={
        ...pokemons[pokemonIndex],
        ...req.body
    };
    // pokemons.push(pokemons[pokemonIndex]);
    const message = "Pokemons mis à jour"
    res.json(success(message, pokemons));
})

app.delete("/api/pokemons/:id", (req, res) => {
    const pokemonID = +req.params.id;
    const pokemonDeleted = pokemons.find(pokemon => pokemon.id === pokemonID);
    pokemons.filter(pokemon => pokemon.id !== pokemonID)
    const message = "Pokemon deleted."
    res.json(success(message, pokemonDeleted));
})

app.listen(port, () => {
    console.log(`Listening on : http://localhost:${port}`);
})