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
    {   
        name: 'Liar! Uncover the Truth',
        characters: [
            {
                name:'Haruichi Mamiya',
                age: 31,
                image: '',
                description: 'CEO'
            },
            {
                name:'Sotaro Shiga',
                age: 29,
                image: '',
                description: 'Surgeon'
            },
            {
                name:'Azusa Kurono',
                age: 27,
                image: '',
                description: 'Graphic Designer'
            },
            {
                name:'Keima Katagiri',
                age: 32,
                image: '',
                description: 'Stock Trader'
            },
            {
                name:'Joe Yazawa',
                age: 32,
                image: '',
                description: 'Fashion Designer'
            },
            {
                name:'Itaru Yuikawa',
                age: 28,
                image: '',
                description: 'Foreign Exchange Trader'
            },
            {
                name:'Kazumi Kagami',
                age: 40,
                image: '',
                description: 'Novelist'
            },
            {
                name:'Toya Kashi',
                age: 28,
                image: '',
                description: 'Patisserie'
            },
            {
                name:'Kunio Muroi',
                age: 38,
                image: '',
                description: 'Diplomat'
            },
            {
                name:'Shuto Matsuki',
                age: 25,
                image: '',
                description: 'Soccer Player'
            },
        ],
        image: '',
        endings: 9,
        translation: 'ダウト～嘘つきオトコは誰?',
        release_Date: 'September 1, 2015'
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