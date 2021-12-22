const {StoriesModel} = require('../models');

const stories_Seeds = [
    {   
        name: 'Dangerous Seduction',
        characters: [
            {
                name:'Ryuzaki Masaharu',
                age: 29,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207352/dangerousSeduction/Masaharu_Ryuzaki_-_Profile_fzymoa.jpg',
                description: 'Sniper'
            },
            {
                name:'Yasumi Arimura',
                age: 28,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207188/dangerousSeduction/Yasumi_brx4vx.png',
                description: 'Hacker'
            },
            {
                name:'Haruma Fujioka',
                age: 30,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207188/dangerousSeduction/Haruma_mt20xt.png',
                description: 'Doctor'
            },
            {
                name:'Asuka Hino',
                age: 25,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207352/dangerousSeduction/Asuka_profile_v3xnjs.jpg',
                description: 'Spy'
            },
            {
                name:'Kentaro Inui',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207188/dangerousSeduction/Kentaro_nzaeh0.png',
                description: 'Gang Leader'
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127389/Dangerous_Seduction_pspou3.jpg',
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
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207479/liar/Haruichi_ealqst.png',
                description: 'CEO'
            },
            {
                name:'Sotaro Shiga',
                age: 29,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207480/liar/Sotaro_nwfyhi.png',
                description: 'Surgeon'
            },
            {
                name:'Azusa Kurono',
                age: 27,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207480/liar/Azusa_agwb19.png',
                description: 'Graphic Designer'
            },
            {
                name:'Keima Katagiri',
                age: 32,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207479/liar/Keima_dvqilk.png',
                description: 'Stock Trader'
            },
            {
                name:'Joe Yazawa',
                age: 32,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207479/liar/Joe_nnf2hb.png',
                description: 'Fashion Designer'
            },
            {
                name:'Itaru Yuikawa',
                age: 28,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207479/liar/Itaru_kotxxd.png',
                description: 'Foreign Exchange Trader'
            },
            {
                name:'Kazumi Kagami',
                age: 40,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207479/liar/Kazumi_vgwhfk.png',
                description: 'Novelist'
            },
            {
                name:'Toya Kashi',
                age: 28,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207480/liar/Toya_dxrjdo.png',
                description: 'Patisserie'
            },
            {
                name:'Kunio Muroi',
                age: 38,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207480/liar/Kunio_xhqmut.png',
                description: 'Diplomat'
            },
            {
                name:'Shuto Matsuki',
                age: 25,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207480/liar/Shuto_zdejyq.png',
                description: 'Soccer Player'
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127392/Liar_Uncover_the_Truth_-_Title_kylnru.png',
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
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207808/samurai/Toshizo_Hijikata_hkffmy.png',
                description: 'Demonic Vice Commander'
            },
            {
                name:'Soji Okita',
                age: 22,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207808/samurai/Soji_Okita_awsigu.png',
                description: 'Captain'
            },
            {
                name:'Sanosuke Harada',
                age: 24,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207808/samurai/Sanosuke_Harada_gn9mku.png',
                description: 'Captain'
            },
            {
                name:'Hajime Saito',
                age: 20,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207808/samurai/Hajime_Saito_tdpfoi.png',
                description: 'Captain'
            },
            {
                name:'Isami Kondo',
                age: 30,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207808/samurai/Isami_Kondo_cmhuci.png',
                description: 'Commander'
            },
            {
                name:'Shinsaku Taksugi',
                age: 25,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640207808/samurai/Shinsaku_Takasugi_fr8jwr.png',
                description: 'Restaurant Owner'
            }
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127389/Era_of_Samurai_Code_of_Love_-_Title_id7rfp.jpg',
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
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208013/bad%20boys/Ryoji_Ryukai_mqahdz.png',
                description: 'King of the bad boys'
            },
            {
                name: 'Rei Todo',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208013/bad%20boys/Rei_Todo_c9ibxl.png',
                description: 'The "cursed student"'
            },
            {
                name: 'Yu Agatsuma',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208013/bad%20boys/Yu_Agatsuma_zuw2j2.png',
                description: 'Basketball fanatic'
            },
            {
                name: 'Akira Sakaki',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208013/bad%20boys/Akira_Sakaki_itwuao.png',
                description: 'Playboy'
            },
            {
                name: 'Keiichiro Minase',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208013/bad%20boys/Keiichiro_Minase_xtl2rq.png',
                description: 'Brusque'
            },
            {
                name: 'Yuki Saejima',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208093/bad%20boys/Yuki_Saejima_knkrrv.png',
                description: 'Coming soon...'
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127389/Bad_Boys_Do_it_Better_-_Title_ny77kx.jpg',
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
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208293/afterschool%20affairs/Shinichi_wfpxkl.png',
                description: 'Math teacher'
            },
            {
                name: 'Kiyonori Taishi',
                age: 28,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208293/afterschool%20affairs/Kiyonori_lx6vyn.png',
                description: 'Japanese history teacher'
            },
            {
                name: 'Rikiya Mononobe',
                age: 29,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208294/afterschool%20affairs/Rikiya_guzirl.png',
                description: 'Science teacher'
            },
            {
                name: 'Hidetaka Sera',
                age: 27,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208293/afterschool%20affairs/Hidetaka_smyrwt.png',
                description: 'English teacher'
            },
            {
                name: 'Kenzo Yusukawa',
                age: 30,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208293/afterschool%20affairs/Kenzo_npgymq.png',
                description: 'School nurse'
            },
            {
                name: 'Chiharu Utsumi',
                age: 17,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208293/afterschool%20affairs/Chiharu_rnhn3r.png',
                description: 'Student'
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127388/After_School_Affairs_Title_m4elhq.jpg',
        seasons: 3,
        translation: '教師たちの秘密の放課後',
        release_Date: 'September 1, 2015'
    },
    {   
        name: 'Butler Until Midnight',
        characters: [
            {
                name: 'Yuma Akagi',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208720/butler/Yuma_uc4yuw.png',
                description: 'Charismatic but insulting and smug towards you'
            },
            {
                name: 'Aoi Shirafuji',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208720/butler/Aoii_ly7clg.png',
                description: 'Gentle but coldness behind his facade'
            },
            {
                name: 'Tomoki Matsuba',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208720/butler/Tomoki_bikyjr.png',
                description: 'Cultured but sharp-tongued'
            },
            {
                name: 'Kyo Aizawa',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208720/butler/Kyo_pleycb.png',
                description: 'Quiet but hiding something in his heart'
            },
            {
                name: 'Itsuki Matsuba',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208720/butler/Itsuki_dcfxme.png',
                description: "Tomoki's younger brother who can put people at ease"
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127391/Butler_Until_Midnight_-_Title_rjzz1g.png',
        seasons: 2,
        translation: '深夜0時❤️素顔の執事',
        release_Date: 'March 24, 2015'
    },
    {   
        name: 'Rose in the Embers',
        characters: [
            {
                name: 'Kyosuke Takatsukasa',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208894/ember/Kyosuke_headshot_vlpmow.png',
                description: 'Skillful businessman and leader'
            },
            {
                name: 'Takahisa Togo',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208894/ember/Takahisa_headshot_hzqosn.png',
                description: 'Fearsome soldier'
            },
            {
                name: 'Misao Higuchi',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208894/ember/Misao_pr8vm6.png',
                description: 'Ukiyo-e artist'
            },
            {
                name: 'Tsukumo Kobayakawa',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208894/ember/Tsukumo_yymand.png',
                description: 'Enigmatic author'
            },
            {
                name: 'Atsuro Shibusawa',
                age: 00,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208894/ember/Atsuro_g0rpnf.png',
                description: 'Owner of Omurice Cafe'
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127393/Rose_in_The_Embers_-_Title_l8oyqk.png',
        seasons: 1,
        translation: '大正ロマン、運命の人',
        release_Date: 'July 3, 2017'
    },
    {   
        name: 'My First Last Kiss',
        characters: [
            {
                name: 'Ayato Hidaka',
                age: 5,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208990/first%20last%20kiss/Ayato_aepuvg.png',
                description: 'Coming actor'
            },
            {
                name: 'Ichiya Misono',
                age: 5,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208990/first%20last%20kiss/Ichiya_zobvld.png',
                description: 'Loner'
            },
            {
                name: 'Makoto Morimachi',
                age: 5,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208990/first%20last%20kiss/Makoto_vton07.png',
                description: "Oldest of the group and Riku's older brother"
            },
            {
                name: 'Takamune Kitami',
                age: 5,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208990/first%20last%20kiss/Takamune_ghrhyb.png',
                description: 'Professional soccer player'
            },
            {
                name: 'Riku Morimachi',
                age: 5,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208990/first%20last%20kiss/Riku_npzv0o.png',
                description: "Makoto's younger brother"
            },
            {
                name: 'Hiroki Eniwa',
                age: 5,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208990/first%20last%20kiss/Hiroki_nulfnj.png',
                description: 'Your first love'
            },
            {
                name: 'Rin Yakumo',
                age: 5,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640208990/first%20last%20kiss/Riku_npzv0o.png',
                description: 'Friends in high school'
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127394/My_Last_First_Kiss_-_Title_e3lqnk.png',
        seasons: 3,
        translation: '大人の初恋はじめます',
        release_Date: 'March 5, 2015'
    },
    {   
        name: 'Kiss Me on Clover Hill',
        characters: [
            {
                name: 'Soichi Kiyota',
                age: 21,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640209231/clover%20hill/Soichi_mcupm1.png',
                description: 'Architect'
            },
            {
                name: 'Bunta Kurimaki',
                age: 21,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640209230/clover%20hill/Bunta_e1zgns.png',
                description: 'Photographer'
            },
            {
                name: 'Yusuke Sakuraba',
                age: 24,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640209231/clover%20hill/Yusuke_mxzkpg.png',
                description: 'Painter'
            },
            {
                name: 'Chihiro Kikuhara',
                age: 24,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640209230/clover%20hill/Chihiro_lnd0qm.png',
                description: 'Musician'
            },
            {
                name: 'Shokichi Kuramoto',
                age: 18,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640209230/clover%20hill/Shokichi_o2kimn.png',
                description: 'Sculptor'
            },
            {
                name: 'KSazuto Horai',
                age: 29,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640209230/clover%20hill/Kazuto_tpfauv.png',
                description: 'Landlord'
            },
            {
                name: 'Daisuke Asahina',
                age: 19,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640209230/clover%20hill/Daisuke_ieef6e.png',
                description: 'Sculpting student'
            },
            {
                name: 'Akio Tsubaki',
                age: 22,
                image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640209231/clover%20hill/Akio_ybcw3k.png',
                description: 'Design student'
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127391/Kiss_Me_on_Clover_Hill_-_Title_ce46ya.jpg',
        seasons: 1,
        translation: 'ルームシェア★素顔のカレ',
        release_Date: 'July 1, 2015'
    },
    {   
        name: 'Sakura Amidst Chaos',
        characters: [
            {
                name: 'Nobunaga Oda',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kenshi Uesugi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ieyasu Tokugawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yukimura Sanada',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Masamune Date',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'M<itsuhide Akechi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kenetsugu Nanoe',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Saizou Kirigakure',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Mitsunari Ishida',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kojurou Katakura',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kiyomasa Katou',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Takeda Shigen',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Hanzou Hattori',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127394/Tenka_Touitsu_Koi_no_Ran_Title_bla6sv.jpg',
        seasons: 1,
        translation: '天下統一恋の乱',
        release_Date: 'October 1, 2014'
    },
    {   
        name: 'My Weddings and 7 Rings',
        characters: [
            {
                name: 'Asahi Kakyouin',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yamato Kougami',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Junta Nikaido',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Hiroto Chitose',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ren Shibasaki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kai Fujisawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Seiichirou Hayami',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127417/ijhwyipqtzmc4kum4ki3.jpg',
        seasons: 1,
        translation: '誓いのキスと7つの誘惑',
        release_Date: 'October 28, 2014'
    },
    {   
        name: 'Scandal in the Spotlight',
        characters: [
            {
                name: 'Kyohei Rikudoh',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Iori Enjo',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kota Igarashi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Nagito Aoshima',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Takashi Ninagawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ryo Chibana',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ritsuto Ena',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Fumito Ena',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127393/Scandal_in_the_Spotlight_tdqgk7.jpg',
        seasons: 4,
        translation: '偽りの君とスキャンダル',
        release_Date: 'August 24, 2014'
    },
    {   
        name: 'Star-Crossed Myth',
        characters: [
            {
                name: 'Leon',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Scorpio',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Teorus',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Dui',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Huedhaut',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ichthys',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Karno',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Zyglavis',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Aigonorus',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Krioff',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Tauxolouve',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Partheno',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127394/Star-Crossed_Myth_teb3vo.png',
        seasons: 2,
        translation: '恋してしまった星の王子',
        release_Date: 'August 11, 2014'
    },
    {   
        name: 'Love Brings You Home',
        characters: [
            {
                name: 'Inami Taiyo',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yuki Arata',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kurusu Liam',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Tojyo Hazuki',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127392/Love_Brings_You_Home_-_Title_tnzkh4.png',
        seasons: 1,
        translation: 'おかえり、僕の好きな人',
        release_Date: 'December 20, 2014'
    },
    {   
        name: 'Her Love in the Force',
        characters: [
            {
                name: 'Seiji Goto',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Hyogo Kaga',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Hideki Ishigami',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shusuke Soma',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ayumu Shinonome',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Jin Namba',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Toru Kurosawa',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127390/Her_Love_in_the_Force_Title_wpwbeh.jpg',
        seasons: 3,
        translation: '恋人は公安刑事',
        release_Date: 'June 30, 2014'
    },
    {   
        name: 'True Love Sweet Lies',
        characters: [
            {
                name: 'Kiyoharu Nanahoshi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Sakuya Nanahoshi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Rui Wakaba',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Naomasa Sakura',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Nozomu Fuse',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127395/True_Love_Sweet_Lies_Start_ygvgdq.png',
        seasons: 1,
        translation: '真実の恋は甘い嘘から',
        release_Date: 'May 7, 2014'
    },
    {   
        name: 'Finally, in Love Again',
        characters: [
            {
                name: 'Aki Fuhishima',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shuichiro Momoi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Sosuke Kikuchi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yoh Kobayakawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yuto Tsuruya',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kazuki Serizawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kanta Tachibana',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127390/Finally_2C_in_Love_Again_lmfbsp.jpg',
        seasons: 2,
        translation: '最後の恋、僕にください',
        release_Date: 'July 29, 2014'
    },
    {   
        name: 'First Love Diaries',
        characters: [
            {
                name: 'Nao Fujimori',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yuya Abe',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Mahiro Nanase',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Sota Yamamoto',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Mitsuru Sanada',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Masato Asakura',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127391/First_Love_Diaries_-_A_Kiss_on_the_Beach_uptqkb.png',
        seasons: 1,
        translation: '湘南初カレDiary',
        release_Date: 'February 27, 2014'
    },
    {   
        name: 'Enchanted in the Moonlight',
        characters: [
            {
                name: 'Miyabi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Chikage',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shinra',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kyoga',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yukinojo',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Samon',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kiryu',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127391/Koyoi_Start_hxnar6.png',
        seasons: 3,
        translation: '今宵、妖しい口づけを',
        release_Date: 'February 7, 2014'
    },
    {   
        name: 'Be My Princess',
        characters: [
            {
                name: 'Wilfred A. Spencer',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Joshua Lieben',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Keith Alford',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Roberto Button',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Glenn J. Casiraghi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Edward Levaincois',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Zain',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yako Chernenkov',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127392/Be_My_Princess_Title_f7zkxf.png',
        seasons: 1,
        translation: '王子様のプロポーズ',
        release_Date: 'March 14, 2012'
    },
    {   
        name: 'Be My Princess 2',
        characters: [
            {
                name: 'Hayden A. Spencer',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kuon J. Casiraghi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Sieg Lieben',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Oliver Button',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ivan Chernenkov',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Aslan Mafdir',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kevin A. Alford',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Maximillion Levaincois',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127390/Be_My_Princess_2_Title.PNG_t6bhxr.png',
        seasons: 1,
        translation: '王子様のプロポーズ2',
        release_Date: 'January 14, 2014'
    },
    {   
        name: 'Metro PD: Close to You',
        characters: [
            {
                name: 'Hiroshi Kirisawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kazusa Hanai',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yutaka Tennjoi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Tadanobu Nomura',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shusuke Asano',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Eiki Yachigusa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Katsuyuki Kyosbashi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ryohei Kimura',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127388/Mpd_start_uh4em1.png',
        seasons: 1,
        translation: '特別捜査★密着24時',
        release_Date: 'December 17, 2013'
    },
    {   
        name: 'Serendipity Next Door',
        characters: [
            {
                name: 'Masaomi Hibiya',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Izumi Takasaki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shinobu Narita',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Jinpachi Yushima',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Keiichi Tokiwa',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127394/Sereny_fqslyg.jpg',
        seasons: 1,
        translation: 'お隣さんにご用心',
        release_Date: 'November 12, 2013'
    },
    {   
        name: 'Kissed By the Baddest Bidder',
        characters: [
            {
                name: 'Eisuke Ichinomiya',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Soryu Oh',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Mitsunari Baba',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ota Kisaki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Mamoru Kishi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shuichi Hishikura',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Luke Foster',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Hikaru Aihara',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ribon Hatter',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127391/Kissed_ykvf0z.png',
        seasons: 6,
        translation: 'スイートルームで悪戯なキス',
        release_Date: 'October 9, 2013'
    },
    {   
        name: 'Class Trip Crush',
        characters: [
            {
                name: 'Taketo Kanzaki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yasuto Kanzaki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kanji Okumiya',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Homare Midorikawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Nagisa Ichinose',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Rintaro Ashiya',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Hajime Shindo',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127390/CCL_zybjss.png',
        seasons: 3,
        translation: '修学旅行★ナイショの恋',
        release_Date: 'November 8, 2012'
    },
    {   
        name: 'Our Private Homeroom',
        characters: [
            {
                name: 'Ryota Mochizuki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yohji Furuya',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shuya Komaki',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127388/3F_3F_3F_3F_3F_3F_3F_3F_3F_-_Title_s9w2ha.jpg',
        seasons: 2,
        translation: '先生と秘密の同居中♡',
        release_Date: 'September 14, 2017'
    },
    {   
        name: 'Our Two Bedroom Story',
        characters: [
            {
                name: 'Minato Okouchi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kaoru Kirishima',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shusei Hayakawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Chiaki Yuasa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Akiyoshi Zaizen',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Tsumugu Kido',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ayame Suo',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Hinata Yayoi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kagetora Oji',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127388/2LDK_mg05jc.png',
        seasons: 4,
        translation: '上司と秘密の2LDK',
        release_Date: 'January 17, 2014'
    },
    {   
        name: 'Kiss of Revenge',
        characters: [
            {
                name: 'Issei Sezaki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Junpei Miyashita',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Soichiro Irie',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kyosuke Narumi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Naoya Hasegawa',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127391/Kiss_of_Revenge_Title_xjjb3i.jpg',
        seasons: 2,
        translation: '復讐のキスをあなたに',
        release_Date: 'December 6, 2012'
    },
    {   
        name: 'Ten Days with my Devil',
        characters: [
            {
                name: 'Kakeru Kamui',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Satoru Kamagari',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shiki Kurobane',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Haruhito Amano',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Meguru Kamui',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Rein Isaka',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Tsubasa Shirai',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127388/10dayswithmydevil_ahdgs9.jpg',
        seasons: 1,
        translation: '悪魔と恋する10日間',
        release_Date: 'March 13, 2013'
    },
    {   
        name: 'Dreamy Days in West Tokyo',
        characters: [
            {
                name: 'Haruki Tanemura',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ryuzo Hatta',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ichigo Sato',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Takeshi Yuno',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Rihito Hatsune',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Johji Chakura',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Koh Uraga',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Reiji Uraga',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127388/Drmy_ksffdg.png',
        seasons: 3,
        translation: '吉祥寺★恋色デイズ',
        release_Date: 'October 10, 2013'
    },
    {   
        name: 'Office Secrets',
        characters: [
            {
                name: 'Toranosuke Hajime',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ryoma Shirasagi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shota Kurumi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Junya Sakurazawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Koji Nagumo',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shingo Kai',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Tamotsu Goda',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127393/Office_Secrets_Title_mtjorg.jpg',
        seasons: 1,
        translation: '社内恋愛2人のヒミツ',
        release_Date: 'May 20, 2013'
    },
    {   
        name: "A Knight's Devotion",
        characters: [
            {
                name: 'Lute',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Haku',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ken',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shion',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Gaia',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127388/A_Knight_s_Devotion_u6ob7o.jpg',
        seasons: 1,
        translation: '愛を捧ぐ伝説の騎士',
        release_Date: 'October 17, 2012'
    },
    {   
        name: 'My Sweet Bodyguard',
        characters: [
            {
                name: 'Subaru Ichiyanagi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kaiji Akizuki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Sora Hirosue',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Mizuki Fujisaki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Daichi Katsuragi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Hideki Ishigami',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Seigi Goto',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Toru Kurosawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kenta Makabe',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Eiji Kiyosumi',
                age: 5,
                image: '',
                description: ''
            }
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127391/Koibitosp_ierhwe.png',
        seasons: 1,
        translation: '恋人は専属SP',
        release_Date: 'September 21, 2011'
    },
    {   
        name: 'Love Letter From Thief X',
        characters: [
            {
                name: 'Takuto Hirukawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kenshi Inagaki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Hiro Sarashina',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Riki Yanase',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Atsumu Kashiwabara',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Tatsuro Togoshi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yuki Arisugawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Hyosuke Kujo',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Taiga Kujo',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127392/Love_Letter_From_Thief_X_Title_twa7ie.jpg',
        seasons: 3,
        translation: '怪盗Ｘ恋の予告状',
        release_Date: 'January 6, 2011'
    },
    {   
        name: 'When Destiny Comes Knocking',
        characters: [
            {
                name: 'Nozomu Kaneko',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Rheo Usami',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Seiya Fushimi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Wataru Toge',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shintaro Ando',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127394/When_Destiny_Comes_Knocking_-_Title_wuvrwt.png',
        seasons: 1,
        translation: 'こんな私のモテ期な日常',
        release_Date: 'June 6, 2017'
    },
    {   
        name: 'In Your Arms Tonight',
        characters: [
            {
                name: 'Genji Higashiyama',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shohei Aiba',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kiyoto Makimura',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kippei Ebihara',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ritsu Moriyama',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Koichi Natsukawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ginnosuke Oguri',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Soji Higashiyama',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Tsukasa Niregi',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127390/IYAT_fyqvj8.jpg',
        seasons: 1,
        translation: '今夜アナタと眠りたい',
        release_Date: 'July 3, 2012'
    },
    {   
        name: 'In Your Arms Tonight 2',
        characters: [
            {
                name: 'Takeru Ashida',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shinichiro Ogiwara',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shu Mishima',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Fumitaka Nishi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kazuya Seta',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Roysuke Sakura',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127392/IYAT2_-_Title_idqhi4.png',
        seasons: 1,
        translation: '今夜アナタと眠りたい 2',
        release_Date: 'May 5, 2014'
    },
    {   
        name: 'Seduced in the Sleepless City',
        characters: [
            {
                name: 'Yuzuki Kitaoji',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ryoichi Hirose',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'NMoel Aijima',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Chihaya Koda',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Mirai Kageyama',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Satsuki Kitaoji',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Hibiki Shiina',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Atsushi Jinnai',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Trevor Konno',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127395/Seduced_Start_wblhcu.png',
        seasons: 3,
        translation: '眠らぬ街のシンデレラ',
        release_Date: 'February 27, 2012'
    },
    {   
        name: 'My Forged Wedding',
        characters: [
            {
                name: 'Yamato Kougami',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Takamasa Saeki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ren Shibasaki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Takao Maruyama',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yuta Kajima',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kunihiko Aikawa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kyoichi Kunishiro',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Haraka Utsunomiya',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Akito Kakiuchi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Tamaki Kikushima',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127393/Myforgedwedding_m3ivfn.png',
        seasons: 5,
        translation: '誓いのキスは突然に',
        release_Date: 'December 12, 2011'
    },
    {   
        name: 'Pirates in Love',
        characters: [
            {
                name: 'Hayate',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shin',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Soshi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Nagi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Towa',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ryuga',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Roy',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Leondardo',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127418/fqnlgpxbivqje4zawblg.png',
        seasons: 1,
        translation: '恋に落ちた海賊王',
        release_Date: 'July 29, 2011'
    },
    {   
        name: 'Diary of Step-Sister',
        characters: [
            {
                name: 'Masaki Saionji',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Masaya Saionji',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yuji Saionji',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shuichi Saionji',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kaname Midou',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127391/Koihito_wa_D_3Fkyonin_-_Title_bxdtxf.jpg',
        seasons: 1,
        translation: '恋人は同居人',
        release_Date: 'January 21, 2015'
    },
    {   
        name: 'Celebrity Darling',
        characters: [
            {
                name: 'Sho Kiriya',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Hayato Shiratori',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Shinnosuke Ichijo',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Haru Shindo',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ryuji Soma',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Natsuki Orihara',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Lee Na-nuel',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Ryota Miike',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kyosuke Nakanishi',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Kazuma Honda',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Yoshito Fujisaki',
                age: 5,
                image: '',
                description: ''
            },
            {
                name: 'Teppei Yamada',
                age: 5,
                image: '',
                description: ''
            },
        ],
        image: 'https://res.cloudinary.com/ddg9uckpr/image/upload/v1640127390/Celebrily_Darling_-_Title_tgwpgn.png',
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