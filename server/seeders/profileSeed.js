const {ProfileModel} = require('../models');

const singleProfile = [
    {
        already_read: [],
        favorite_Stories: [],
        favotite_Chars: [],
        to_Complete_List: [],
    }
];

const Profile = async () => {
    try {
        const profile = await ProfileModel.insert(singleProfile);
        console.log(profile);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
};

module.exports = {Profile};