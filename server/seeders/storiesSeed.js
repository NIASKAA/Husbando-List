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
            {
                name: 'Ryoju Ryukai',
                age: 00,
                image: '',
                description: ''
            },
            {
                name: 'Rei Todo',
                age: 00,
                image: '',
                description: ''
            },
            {
                name: 'Yu Agatsuma',
                age: 00,
                image: '',
                description: ''
            },
            {
                name: 'Akira Sakaki',
                age: 00,
                image: '',
                description: ''
            },
            {
                name: 'Kiichiro Minase',
                age: 00,
                image: '',
                description: ''
            },
            {
                name: 'Yuki Saejima',
                age: 00,
                image: '',
                description: ''
            },
        ],
        image: '',
        seasons: 1,
        translation: '恋愛上等★イケメン学園',
        release_Date: 'December 9, 2015'
    },
    {   
        name: 'After School Affairs',
        characters: [
            {
                name: 'Shinichi Kagari',
                age: 29,
                image: '',
                description: 'Math teacher'
            },
            {
                name: 'Kiyonori Taishi',
                age: 28,
                image: '',
                description: 'Japanese history teacher'
            },
            {
                name: 'Rikiya Mononobe',
                age: 29,
                image: '',
                description: 'Science teacher'
            },
            {
                name: 'Hidetaka Sera',
                age: 27,
                image: '',
                description: 'English teacher'
            },
            {
                name: 'Kenzo Yusukawa',
                age: 30,
                image: '',
                description: 'School nurse'
            },
            {
                name: 'Chiharu Utsumi',
                age: 17,
                image: '',
                description: 'Student'
            },
        ],
        image: '',
        seasons: 3,
        translation: '教師たちの秘密の放課後',
        release_Date: 'September 1, 2015'
    },
    {   
        name: 'Butler Until Midnight',
        characters: [
            {
                name: '',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: '',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: '',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: '',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: '',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: '',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: '',
                age: 5,
                image: '',
                description: ''
            },
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
        release_Date: 'February 27, 2014'
    },
    {   
        name: 'Enchanted in the Moonlight',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '今宵、妖しい口づけを',
        release_Date: 'February 7, 2014'
    },
    {   
        name: 'Be My Princess',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '王子様のプロポーズ',
        release_Date: 'March 14, 2012'
    },
    {   
        name: 'Be My Princess 2',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '王子様のプロポーズ2',
        release_Date: 'January 14, 2014'
    },
    {   
        name: 'Metro PD: Close to You',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '特別捜査★密着24時',
        release_Date: 'December 17, 2013'
    },
    {   
        name: 'Serendipity Next Door',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: 'お隣さんにご用心',
        release_Date: 'November 12, 2013'
    },
    {   
        name: 'Kissed By the Baddest Bidder',
        characters: [
            
        ],
        image: '',
        seasons: 6,
        translation: 'スイートルームで悪戯なキス',
        release_Date: 'October 9, 2013'
    },
    {   
        name: 'Class Trip Crush',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '修学旅行★ナイショの恋',
        release_Date: 'November 8, 2012'
    },
    {   
        name: 'Our Private Homeroom',
        characters: [
            
        ],
        image: '',
        seasons: 2,
        translation: '先生と秘密の同居中♡',
        release_Date: 'September 14, 2017'
    },
    {   
        name: 'Our Two Bedroom Story',
        characters: [
            
        ],
        image: '',
        seasons: 4,
        translation: '上司と秘密の2LDK',
        release_Date: 'January 17, 2014'
    },
    {   
        name: 'Kiss of Revenge',
        characters: [
            
        ],
        image: '',
        seasons: 2,
        translation: '復讐のキスをあなたに',
        release_Date: 'December 6, 2012'
    },
    {   
        name: 'Ten Days with my Devil',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '悪魔と恋する10日間',
        release_Date: 'March 13, 2013'
    },
    {   
        name: 'Dreamy Days in West Tokyo',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '吉祥寺★恋色デイズ',
        release_Date: 'October 10, 2013'
    },
    {   
        name: 'Office Secrets',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '社内恋愛2人のヒミツ',
        release_Date: 'May 20, 2013'
    },
    {   
        name: "A Knight's Devotion",
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '愛を捧ぐ伝説の騎士',
        release_Date: 'October 17, 2012'
    },
    {   
        name: 'My Sweet Bodyguard',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '恋人は専属SP',
        release_Date: 'September 21, 2011'
    },
    {   
        name: 'Love Letter From Thief X',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '怪盗Ｘ恋の予告状',
        release_Date: 'January 6, 2011'
    },
    {   
        name: 'When Destiny Comes Knocking',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: 'こんな私のモテ期な日常',
        release_Date: 'June 6, 2017'
    },
    {   
        name: 'In Your Arms Tonight',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '今夜アナタと眠りたい',
        release_Date: 'July 3, 2012'
    },
    {   
        name: 'In Your Arms Tonight 2',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '今夜アナタと眠りたい 2',
        release_Date: 'May 5, 2014'
    },
    {   
        name: 'Seduced in the Sleepless City',
        characters: [
            
        ],
        image: '',
        seasons: 3,
        translation: '眠らぬ街のシンデレラ',
        release_Date: 'February 27, 2012'
    },
    {   
        name: 'My Forged Wedding',
        characters: [
            
        ],
        image: '',
        seasons: 5,
        translation: '誓いのキスは突然に',
        release_Date: 'December 12, 2011'
    },
    {   
        name: 'Pirates in Love',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '恋に落ちた海賊王',
        release_Date: 'July 29, 2011'
    },
    {   
        name: 'Diary of Step-Sister',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: '恋人は同居人',
        release_Date: 'January 21, 2015'
    },
    {   
        name: 'Celebrity Darling',
        characters: [
            
        ],
        image: '',
        seasons: 1,
        translation: 'ダーリンは芸能人',
        release_Date: 'December 12, 2008'
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