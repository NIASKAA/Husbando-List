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
        seasons: 2,
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
        seasons: 3,
        translation: 'ダウト～嘘つきオトコは誰?',
        release_Date: 'September 1, 2015'
    },
    {   
        name: 'Era of Samurai: Code of Love',
        characters: [
            {
                name:'Toshizo Hijikata',
                age: 29,
                image: '',
                description: 'Demonic Vice Commander'
            },
            {
                name:'Soji Okita',
                age: 22,
                image: '',
                description: 'Captain'
            },
            {
                name:'Sanosuke Harada',
                age: 24,
                image: '',
                description: 'Captain'
            },
            {
                name:'Hajime Saito',
                age: 20,
                image: '',
                description: 'Captain'
            },
            {
                name:'Isami Kondo',
                age: 30,
                image: '',
                description: 'Commander'
            },
            {
                name:'Shinsaku Taksugi',
                age: 25,
                image: '',
                description: 'Restaurant Owner'
            }
        ],
        image: '',
        seasons: 2,
        translation: '新選組が愛した女',
        release_Date: 'December 1, 2015'
    },
    {   
        name: 'Bad Boys Do It Better!',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '恋愛上等★イケメン学園',
        release_Date: 'December 9, 2015'
    },
    {   
        name: 'After School Affairs',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '教師たちの秘密の放課後',
        release_Date: 'September 1, 2015'
    },
    {   
        name: 'Butler Until Midnight',
        characters: [
            
        ],
        image: '',
        seasons: 2,
        translation: '深夜0時❤️素顔の執事',
        release_Date: 'March 24, 2015'
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