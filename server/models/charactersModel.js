const mongoose = require('mongoose');

const character = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    image: {type: String},
    description: {type: String},
});

const CharactersModel = mongoose.model("Characters", character);

module.exports = {CharactersModel, character};