const mongoose = require('mongoose');

const profile = new mongoose.Schema({
    already_read: {type: Array},
    favorite_Stories: {type: Array},
    favorite_Chars: {type: Array},
    to_Complete_List: {type: Array}
});

const ProfileModel = mongoose.model("ProfileModel", profile);

module.exports = {ProfileModel, profile}