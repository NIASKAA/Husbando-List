const {StoriesModel} = require('../models');

const stories_Seeds = [
    {   
        name: 'Dangerous Seduction',
        characters: [
            {
                name:'Ryuzaki Masaharu',
                age: 29,
                image: '',
                description: 'Sniper'
            },
            {
                name:'Yasumi Arimura',
                age: 28,
                image: '',
                description: 'Hacker'
            },
            {
                name:'Haruma Fujioka',
                age: 30,
                image: '',
                description: 'Doctor'
            },
            {
                name:'Asuka Hino',
                age: 25,
                image: '',
                description: 'Spy'
            },
            {
                name:'Kentaro Inui',
                age: 00,
                image: '',
                description: 'Gang Leader'
            },
        ],
        image: '',
        endings: 2,
        translation: '容疑者たちの甘いたくらみ',
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