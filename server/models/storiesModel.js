const mongoose = require('mongoose');
const {CharactersModel} = require('./charactersModel');

const stories = new mongoose.Schema({
    characters: [CharactersModel],
    image: {type: String},
    endings: {type: Number},
    translation: {type: String},
    release_Date: {type: String},
    seasons: {type: Number}
})

const StoriesModel = mongoose.model("Stories", stories);

module.exports = {StoriesModel, stories};