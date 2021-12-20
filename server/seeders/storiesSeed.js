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
    {   
        name: 'Rose in the Embers',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '大正ロマン、運命の人',
        release_Date: 'July 3, 2017'
    },
    {   
        name: 'My First Last Kiss',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '大人の初恋はじめます',
        release_Date: 'March 5, 2015'
    },
    {   
        name: 'Kiss Me on Clover Hill',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: 'ルームシェア★素顔のカレ',
        release_Date: 'July 1, 2015'
    },
    {   
        name: 'Sakura Amidst Chaos',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '天下統一恋の乱',
        release_Date: 'October 1, 2014'
    },
    {   
        name: 'My Weddings and 7 Rings',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '誓いのキスと7つの誘惑',
        release_Date: 'October 28, 2014'
    },
    {   
        name: 'Scandal in the Spotlight',
        characters: [
            
        ],
        image: '',
        seasons: 4,
        translation: '偽りの君とスキャンダル',
        release_Date: 'August 24, 2014'
    },
    {   
        name: 'Star-Crossed Myth',
        characters: [
            
        ],
        image: '',
        seasons: 2,
        translation: '恋してしまった星の王子',
        release_Date: 'August 11, 2014'
    },
    {   
        name: 'Love Brings You Home',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: 'おかえり、僕の好きな人',
        release_Date: 'December 20, 2014'
    },
    {   
        name: 'Her Love in the Force',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '恋人は公安刑事',
        release_Date: 'June 30, 2014'
    },
    {   
        name: 'True Love Sweet Lies',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '真実の恋は甘い嘘から',
        release_Date: 'May 7, 2014'
    },
    {   
        name: 'Finally, in Love Again',
        characters: [
            
        ],
        image: '',
        seasons: 2,
        translation: '最後の恋、僕にください',
        release_Date: 'July 29, 2014'
    },
    {   
        name: 'First Love Diaries',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '湘南初カレDiary',
        release_Date: 'October 1, 2014'
    },
    {   
        name: '',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '',
        release_Date: 'October 1, 2014'
    },
    {   
        name: '',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '',
        release_Date: 'October 1, 2014'
    },
    {   
        name: '',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '',
        release_Date: 'October 1, 2014'
    },
    {   
        name: '',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '',
        release_Date: 'October 1, 2014'
    },
    {   
        name: '',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '',
        release_Date: 'October 1, 2014'
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