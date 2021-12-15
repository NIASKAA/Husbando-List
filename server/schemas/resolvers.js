const {ProfileModel, StoriesModel} = require('../models');

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
    },
    mutations: {}
}

module.exports = resolvers;