const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type ProfileModel {
        _id: ID
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
        description: String
    }

    type Query {
        profile: [ProfileModel]
        getStories: [StoriesModel]
        getCharacter: [CharactersModel]
    }
`;

module.exports = typeDefs;
