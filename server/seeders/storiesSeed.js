const {StoriesModel} = require('../models');

const stories_Seeds = [
    {
        characters: [],
        image: '',
        endings: 2,
        translation: '',
        release_Date: 'May 18, 2016'
    },
];

const Stories = async () => {
    try {
        await StoriesModel.deleteMany({});
        const seeds = await StoriesModel.insertMany(stories_Seeds);
        console.log(seeds);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
};

module.exports = {Stories};