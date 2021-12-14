const {StoriesModel} = require('../models');

const stories_Seeds = [
    {   
        name: '',
        characters: [
            {
                name:'',
                age: 0,
                image: '',
                description: ''
            }
        ],
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