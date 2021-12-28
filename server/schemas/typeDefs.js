const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type ProfileModel {
        _id: ID
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
        description: String
    }

    type Query {
        profile: [ProfileModel]
        getStories: [StoriesModel]
    }
`;

module.exports = typeDefs;
