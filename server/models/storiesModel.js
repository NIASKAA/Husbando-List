const mongoose = require('mongoose');

const character = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    image: {type: String},
    description: {type: String},
});

const stories = new mongoose.Schema({
    name: {type: String},
    characters: [character],
    image: {type: String},
    seasons: {type: Number},
    translation: {type: String},
    release_Date: {type: String}
})

const StoriesModel = mongoose.model("Stories", stories);

module.exports = {StoriesModel, stories};