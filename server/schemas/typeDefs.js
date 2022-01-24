const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type ProfileModel {
        _id: ID
        already_Read: [StoriesModel]
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
        getUserAlreadyRead: [ProfileModel]
        getUserFavoritesStories: [ProfileModel]
    }

    type Mutation {
        addToAlreadyRead(name: String! id: ID): ProfileModel
        addToFavoriteStories(name: String! id: ID): ProfileModel
        deleteAlreadyRead(storyID: ID! id: ID): ProfileModel
        deleteFavorites(storyID: ID! id: ID): ProfileModel
        addFavoriteCharacters(characterName: String! id: ID): ProfileModel
    }
`;

module.exports = typeDefs;
