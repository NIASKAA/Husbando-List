const {ProfileModel, StoriesModel, CharactersModel} = require('../models');

const resolvers = {
    Query: {
        profile: async (context) => {
            if(context.user) {
                const user = await ProfileModel.findById(context.user.id)
                return user;
            }
        },
        getStories: async () => {
            return await StoriesModel.find({});
        },
        getCharacter: async () => {
            return await CharactersModel.find({});
        }
    },
    mutations: {}
}

module.exports = resolvers;