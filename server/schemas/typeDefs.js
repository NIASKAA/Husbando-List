const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type ProfileModel {
        _id: ID
<<<<<<< HEAD
        already_Read: Array
        favorite_Stories: Array
        favorite_Chars: Array
        to_Complete_List: Array
    }

    type storiesModel {
        _id: ID
        characters: [CharactersModel]
        image: String
        endings: Float
        translation: String
        release_Date: String
        seasons: Float
    }

    type CharactersModel {
        _id: ID
        name: String
        image: String
        age: Float
=======
        already_read: [StoriesModel]
        favorite_Stories: [StoriesModel]
        favorite_Chars: [StoriesModel]
        to_Complete_List: [StoriesModel]
    }

    type StoriesModel {
        _id: ID
        name: String
        characters: [character]
        image: String
        seasons: Float
        translation: String
        release_Date: String
    }

    type character {
        _id: ID
        name: String
        age: Float
        image: String
>>>>>>> 3dbee1a36b8d471648cc80b2ba1ebbf07bbcd76e
        description: String
    }

    type Query {
        profile: [ProfileModel]
        getStories: [StoriesModel]
<<<<<<< HEAD
        getCharacter: [CharactersModel]
=======
>>>>>>> 3dbee1a36b8d471648cc80b2ba1ebbf07bbcd76e
    }
`;

module.exports = typeDefs;
